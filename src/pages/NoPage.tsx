import { Callout } from '@blueprintjs/core';
import React from 'react';
import BasePage from './BasePage';


export class NoPage extends BasePage {
    constructor() {
        super(0,"No Page",{});
    }
    render(){
        return (
            <Callout intent="warning" title="Not link to page !">
                Sorry This is not link to page.
            </Callout>
        );
    }
}

export default NoPage;