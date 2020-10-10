import React from 'react';
import { Navbar, Alignment} from "@blueprintjs/core";
import "../styles/topbar.css";

export class Topbar extends React.Component {
    render() {
        return (
            <Navbar className="topbar">
                <Navbar.Group align={Alignment.LEFT}>
                    <Navbar.Heading >Reactive - Learning ReactJS Platform</Navbar.Heading>
                </Navbar.Group>
            </Navbar>
        );
    }
}

export default Topbar;