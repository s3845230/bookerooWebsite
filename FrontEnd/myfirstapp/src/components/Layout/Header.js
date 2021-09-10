import React, { Component } from 'react'
import logoLight from '../../images/bookerooLogo.png'
import SearchBar from '../ViewBooks/SearchBar';

class Header extends Component {
    render() {
        return (
            <div>
                {/*Header Navbar*/}
                <nav className="navbar navbar-expand-sm navbar-light mx-0">
                {/*<nav className="navbar navbar-light mx-0">*/}
                    <div className="container">
                        
                        {/*Logo*/}
                        <a className="navbar-brand" href="/">
                            <img src={logoLight} alt="Bookeroo Logo" className="logoLight"/>
                        </a>

                        {/*Collapsable navbar button, only viewable from mobile devices*/}
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                            <span className="navbar-toggler-icon" />
                        </button>

                        {/*Navbar items*/}
                        <div className="collapse navbar-collapse" id="mobile-nav">
                            <ul className="navbar-nav mr-auto">

                                {/*View Books*/}
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button"
                                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Books
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="/" style={{ color: 'darkslategrey', textDecoration: 'none' }}>Genre</a></li>
                                        <li><a className="dropdown-item" href="/" style={{ color: 'darkslategrey', textDecoration: 'none' }}>Author</a></li>
                                        <li><a className="dropdown-item" href="/publisher" style={{ color: 'darkslategrey', textDecoration: 'none' }}>Publisher</a></li>
                                    </ul>
                                </li>

                                {/*About*/}
                                <li className="nav-item">
                                    <a className="nav-link " href="/about">
                                        About
                                    </a>
                                </li>

                                {/*Contact*/}
                                <li className="nav-item">
                                    <a className="nav-link" href="/contact">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                        
                        {/*Collapse Mobile Search*/}
                        <SearchBar />

                        {/*<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapseSearch" aria-expanded="false" aria-controls="collapseSearch">
                            Search
                        </button>
                        <div className="collapse navbar-collapse" id="collapseSearch">
                            {/*Search Form
                            <form className="navbar-left form-inline" role="search">
                                <div className="card-body">
                                    <input type="text" className="form-control mr-sm-2" placeholder="Search" />
                                    <button type="submit" className="btn btn-outline-primary">Search</button>
                                </div>
                            </form>
                        </div>*/}
                    </div>
                </nav>
            </div>
        )
    }
}
export default Header;