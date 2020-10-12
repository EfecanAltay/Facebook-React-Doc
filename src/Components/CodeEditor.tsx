import { Callout, Card, Code, Elevation } from '@blueprintjs/core';
import React from 'react';
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live';
import "./CodeEditor.css";


export class CodeEditor extends React.Component {
    Title: string = "";
    Id: number = 0;
    constructor(id: number, title: string, props: {}) {
        super(props);
        this.Id = id;
        this.Title = title;
    }

    code: string = "class GetStartedPage extends React.Component {\n render(){\n return ( <h2>Hello World !</h2>);\n  }}";

    render() {
        return (
            <Card className="codeEditorPanel" onErrorCapture={(err) => { console.log(err); }} interactive={false} elevation={Elevation.TWO}>
                <LiveProvider code={this.code} >
                    <Code>import React from 'react'; </Code>
                    <LiveEditor className="editor" />
                    <LivePreview className="preview" />
                    <Callout className="errorview" intent="danger" title={"Error"}>
                        <LiveError />
                    </Callout>
                </LiveProvider>
            </Card>
        );
    }
}


export default CodeEditor;