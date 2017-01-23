import React, { Component } from 'react'
import { Link } from 'react-router'

class Home extends Component {
    render() {
        return (
            <div className="App">
                <h1><Link to="/account">I am home!</Link></h1>
                {this.props.children}
            </div>
        )
    }
}

export default Home
