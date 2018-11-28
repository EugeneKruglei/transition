import React from 'react';
import Link from 'react-router-dom/Link';
import {NavLink} from 'react-router-dom';
import './Nav.css';

export default function Nav() {
    return (
        <nav className="nav">
            <NavLink
                exact to={{
                pathname: '/home',
                state: {prev: false},
            }}
                activeClassName="selected"
                /*activeStyle={{
                    font: "bold",
                    background: "#0088cc",
                    color: "#fff",
                    border: "0.5em"
                }}*/
                className="nav__link"

            >
                Home
            </NavLink>
            <NavLink
                to={{
                    pathname: '/about',
                    state: {prev: false},
                }}
                activeClassName="selected"
                className="nav__link"
                /*activeStyle={{
                    font: "bold",
                    background: "#0088cc",
                    color: "#fff",
                    border: "0.5em"
                }}*/
            >
                About
            </NavLink>
            <NavLink
                to={{
                    pathname: '/products',
                    state: {prev: false},
                }}
                className="nav__link"
                activeClassName="selected"
            >
                Products
            </NavLink>
            <NavLink
                to={{
                    pathname: '/contact',
                    state: {prev: false},
                }}
                className="nav__link"
                activeClassName="selected"
            >
                Contact
            </NavLink>
        </nav>
    );
}
