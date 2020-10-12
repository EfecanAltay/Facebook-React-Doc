import React from 'react';
import BasePage from '../pages/BasePage';
import NoPage from '../pages/NoPage';

export class PageController extends React.Component {

    CurrentPage: BasePage;
    state: {
        PageList : Array<BasePage>
    }
    public PageList : Array<BasePage> ;
    constructor(props: {}) {
        super(props);
        this.CurrentPage = null;
        this.state = {
            PageList : new Array<BasePage>()
        };
    }

    AddPage(page: BasePage) {
        this.state.PageList.push(page);
    }

    SelectPage(pageIndex: number) {
        this.CurrentPage = this.state.PageList[pageIndex];
        this.setState(this.state);
    }

    render() {
        if (this.CurrentPage != null)
            return this.CurrentPage.PageRender();
        return (<NoPage/>);
    }
}

export default PageController;