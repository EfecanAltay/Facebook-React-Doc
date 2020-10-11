import React from 'react';
import "../styles/basepage.css";

export class BasePage extends React.Component {
    Title: string = "";
    Id: number = 0;
    constructor(id: number, title: string, props: {}) {
        super(props);
        this.Id = id;
        this.Title = title;
    }

    PageRender(): {} {
        return (<div className="PageContent">{this.render()}</div>);
    }
}


export default BasePage;