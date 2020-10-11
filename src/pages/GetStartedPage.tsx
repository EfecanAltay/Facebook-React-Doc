import React from 'react';
import BasePage from './BasePage';


export class WelcomePage extends BasePage {
    constructor() {
        super(0,"Get Started",{});
    }
    render(){
        return (
            <div>Welcome Page</div>
        );
    }
}

export default WelcomePage;