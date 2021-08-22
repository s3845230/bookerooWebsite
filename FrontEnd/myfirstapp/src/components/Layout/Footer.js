import React, { Component } from 'react'
import logoLight from '../../images/bookerooLogo.png'
import logoDark from '../../images/roo512White.png'

class Footer extends Component {
    render() {
        return (
            <div>
                {/*Footer Navbar*/}
                <footer className="navbar navbar-dark bg-dark">
                    {/*Logo*/}
                    <a className="navbar-brand-foot" href="/">
                        <img src={logoDark} alt="Bookeroo Logo" className="logoDark"/>
                    </a>
                <nav>
                    <ul class="nav nav-pills">
                        <li role="presentation" class="active"><a className="nav-link" href="/">View Books</a></li>
                        <li role="presentation"><a className="nav-link" href="/about">About</a></li>
                        <li role="presentation"><a className="nav-link" href="/contact">Contact</a></li>
                    </ul>
                </nav>
                </footer>
            </div>
        )
    }
}
export default Footer;