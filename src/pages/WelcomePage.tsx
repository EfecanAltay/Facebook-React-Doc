import React from 'react';
import BasePage from './BasePage';


export class WelcomePage extends BasePage {
    constructor() {
        super(0,"WelcomePage",{});
    }
    render(){
        return (
            <div className="pageContent">Welcome To Reactive</div>
        );
    }
}

export default WelcomePage;