import { Callout, Card, Elevation } from '@blueprintjs/core';
import React from 'react';
import { LiveError, LivePreview, LiveProvider } from 'react-live';
import "./CodeEditor.css";
//import { Prism } from 'prism-react-renderer';
import Editor from 'react-simple-code-editor';

import Prism, { highlight } from 'prismjs';

export class CodeEditor extends React.Component {
    Title: string = "";
    Id: number = 0;
    constructor(id: number, title: string, props: {}) {
        super(props);
        this.Id = id;
        this.Title = title;
        
        this.state = { code : "class MyComponent extends React.Component{\n render(){\n  return (\n\t<h1>Hello World</h1>\n  );\n }\n}" };
    }
    state: {
        code: string;
    }
  
    render() {
        return (
            <Card className="codeEditorPanel" onErrorCapture={(err) => { console.log(err); }} interactive={false} elevation={Elevation.TWO}>
                
                <LiveProvider code={this.state.code} >
                <Editor
                        value={this.state.code}
                        onValueChange={codeValue => this.setState({ code : codeValue })}
                        highlight={code => highlight(code,Prism.languages.javascript,'javascript') }
                        padding={5}
                        color="red"
                        style={{
                            fontFamily: '"Fira code", "Fira Mono", monospace',
                            fontSize: 16,
                        }}
                />
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