import React, { Component } from 'react'
import logoDark from '../../images/roo512White.png'

class Footer extends Component {
    render() {
        return (
            <div className="bottom">
                {/*Footer Navbar*/}
                <footer className="navbar navbar-dark bg-dark">
                    {/*Logo*/}
                    <a className="navbar-brand-foot" href="/">
                        <img src={logoDark} alt="Bookeroo Logo" className="logoDark"/>
                    </a>
                    <nav>
                        <ul className="nav nav-pills">
                            <li role="presentation" className="active"><a className="nav-link" href="/" style={{ color: '#FFF' }}>View Books</a></li>
                            <li role="presentation"><a className="nav-link" href="/about" style={{ color: '#FFF' }}>About</a></li>
                            <li role="presentation"><a className="nav-link" href="/contact" style={{ color: '#FFF' }}>Contact</a></li>
                        </ul>
                    </nav>
                </footer>
            </div>
        )
    }
}
export default Footer;