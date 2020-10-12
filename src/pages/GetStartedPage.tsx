import React from 'react';
import CodeEditor from '../Components/CodeEditor';
import BasePage from './BasePage';


export class GetStartedPage extends BasePage {
    constructor() {
        super(1,"Get Started",{});
    }
    render(){
        return (
            <div>
                <h2>Get Started Page</h2>
                <CodeEditor />
            </div>
        );
    }
}

export default GetStartedPage;