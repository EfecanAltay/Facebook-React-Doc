import React from 'react';
import { Navbar, Button, Alignment} from "@blueprintjs/core";

export class Sidebar extends React.Component {
    render() {
        return (
            <Navbar>
                <Navbar.Group align={Alignment.LEFT}>
                    <Navbar.Heading >Reactive - Learning ReactJS Platform</Navbar.Heading>
                </Navbar.Group>
            </Navbar>
        );
    }
}

export default Sidebar;