import React from 'react';
import '../styles/sidebar.css';
import { ITreeNode, Tooltip, Position, Classes, Icon, Intent, Tree, Callout } from "@blueprintjs/core";

export interface ITreeExampleState {
    nodes: ITreeNode[];
}

export class SideBar extends React.Component {
    public state: ITreeExampleState = { nodes: INITIAL_STATE };
    public CurrentSelectedID: number;

    public props: {
        OnSelected: (a: number) => void;
    }
    
    render() {
        return (
            <div className="sidebar">
                <Callout className="header" title="Reactive" >
                    <img className="icon" src="../logo192.png" alt="reactive_logo"></img>
                    <p>Native Learning Platform</p>
                </Callout>
                <Tree
                    contents={this.state.nodes}
                    onNodeClick={this.handleNodeClick}
                    onNodeCollapse={this.handleNodeCollapse}
                    onNodeExpand={this.handleNodeExpand}
                    className={Classes.ELEVATION_0}
                />
            </div>
        );
    }

    private handleNodeClick = (nodeData: ITreeNode, _nodePath: number[], e: React.MouseEvent<HTMLElement>) => {
        const originallySelected = nodeData.isSelected;
        if (!e.shiftKey) {
            this.forEachNode(this.state.nodes, n => (n.isSelected = false));
        }
        nodeData.isSelected = originallySelected == null ? true : !originallySelected;
        this.setState(this.state);
        if (this.props.OnSelected != null)
            this.props.OnSelected(+nodeData.id);
    };

    private handleNodeCollapse = (nodeData: ITreeNode) => {
        nodeData.isExpanded = false;
        this.setState(this.state);
    };

    private handleNodeExpand = (nodeData: ITreeNode) => {
        nodeData.isExpanded = true;
        this.setState(this.state);
    };

    private forEachNode(nodes: ITreeNode[], callback: (node: ITreeNode) => void) {
        if (nodes == null) {
            return;
        }

        for (const node of nodes) {
            callback(node);
            this.forEachNode(node.childNodes, callback);
        }
    }
}

/* tslint:disable:object-literal-sort-keys so childNodes can come last */
const INITIAL_STATE: ITreeNode[] = [
    {
        id: 0,
        hasCaret: false,
        icon: <Icon icon="tag" intent={Intent.PRIMARY} className={Classes.TREE_NODE_ICON} />,
        label: "Welcome",
    },
    {
        id: 1,
        hasCaret: false,
        icon: "document",
        label: "Get Started",
    },
    {
        id: 2,
        icon: "folder-close",
        isExpanded: true,
        label: (
            <Tooltip content="It's Beginner Form" position={Position.RIGHT}>
                Beginner
            </Tooltip>
        ),
        childNodes: [
            {
                id: 3,
                icon: "document",
                label: "Item 0",
                secondaryLabel: (
                    <Tooltip content="An eye!">
                        <Icon icon="eye-open" />
                    </Tooltip>
                ),
            },
            {
                id: 4,
                icon: <Icon icon="tag" intent={Intent.PRIMARY} className={Classes.TREE_NODE_ICON} />,
                label: "Organic meditation gluten-free, sriracha VHS drinking vinegar beard man.",
            }
        ],
    },
    {
        id: 5,
        hasCaret: true,
        icon: "folder-close",
        label: "Super secret files",
        disabled: true,
    },
];
/* tslint:enable:object-literal-sort-keys */

export default SideBar;