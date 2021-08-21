import React, { Component } from 'react'
import logoLight from '../../images/bookerooLogo.png'
import logoDark from '../../images/roo512White.png'

 class HeaderFooter extends Component {
    render() {
        return (
            <div>
                {/*Header Navbar*/}
                <nav className="navbar navbar-expand-sm navbar-light mx-0">
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
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="/">Genre</a>
                                        <a className="dropdown-item" href="/">Author</a>
                                        <a className="dropdown-item" href="/">Publisher</a>
                                    </div>
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

                        {/*Search Form*/}
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <form className="navbar-form navbar-left" role="search">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Search" />
                                        {/*<button type="submit" className="btn btn-default">Submit</button>*/}
                                    </div>
                                </form>
                            </li>
                        </ul>
                    </div>
                </nav>

                {/*Footer Navbar*/}
                <nav className="navbar fixed-bottom navbar-dark bg-dark">
                    {/*Logo*/}
                    <a className="navbar-brand-foot" href="/">
                        <img src={logoDark} alt="Bookeroo Logo" className="logoDark"/>
                    </a>
                    {/*<div className="container">*/}
                        {/*<div className= </div>*/}
                        <ul className="navbar-nav mr-5" style={{display:"inline-block"}}>
                            <li className="nav-item">
                                <a className="nav-link" href="/">
                                    View Books
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">
                                    About
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    {/*</div>*/}
                </nav>
            </div>
        )
    }
}
export default HeaderFooter;