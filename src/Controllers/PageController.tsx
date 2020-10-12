import React from 'react';
import BasePage from '../pages/BasePage';
import NoPage from '../pages/NoPage';

export class PageController extends React.Component {

    state: {
        PageList: Array<BasePage>,
        CurrentPage: BasePage;
    }

    constructor(props: {}) {
        super(props);
        this.state = {
            PageList: new Array<BasePage>(),
            CurrentPage: null
        };
    }

    AddPage(page: BasePage) {
        this.state.PageList.push(page);
    }

    SelectPage(pageIndex: number) {
        this.state.CurrentPage = this.state.PageList[pageIndex];
        this.setState(this.state);
    }

    render() {
        if (this.state.CurrentPage != null)
            return this.state.CurrentPage.PageRender();
        return (<NoPage/>);
    }
}

export default PageController;