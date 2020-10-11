import React from 'react';
import BasePage from './BasePage';


export class WelcomePage extends BasePage {
    constructor() {
        super(0,"WelcomePage",{});
    }
    render(){
        return (
            <div className="bp3-running-text .modifier">
                <h1 className="bp3-heading">Welcome to Reactive</h1>
                <p>Reactive is react learning platform as <b>active</b></p>
                <p>You can start first step with <b>Get Started</b> Section</p>
                <p>Enjoy Us!</p>
            </div>
        );
    }
}

export default WelcomePage;