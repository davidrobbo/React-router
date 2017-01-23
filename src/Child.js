import React, { Component } from 'react'
import { Link } from 'react-router'

class Child extends Component {
    render() {
        return (
            <div className="App">
                <h1><Link to="/account">I am a child!</Link></h1>
            </div>
        )
    }
}

export default Child
