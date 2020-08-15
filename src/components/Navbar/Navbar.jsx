import React, { Component } from 'react';
import logo from '../../img/lookemall.svg'
import { Link } from 'react-router-dom';
export default class Navbar extends Component {

    render() {
        return (
            <header>
                <nav>
                    <Link to="/">
                        <img src={logo} width="auto" height="40" alt="logo lokemall" />
                    </Link>
                    <ul>
                        <li><Link to="/" >Lookemall</Link></li>
                    </ul>
                </nav>
            </header>
        );
    }
}


