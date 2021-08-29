import React, { Component } from 'react'



class Dashboard extends Component {
    render() {
        return (
            <div style={{padding:"200px"}}>
                <a href="/addBook">
                    <button type="button" className="btn btn-primary btn-large">ADD BOOK</button>
                </a>
            </div>
        )
    }
}

export default Dashboard;