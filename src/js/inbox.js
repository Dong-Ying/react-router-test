import React from 'react'
import { render } from 'react-dom'

module.exports = React.createClass({
    render() {
        return (
            <div>
                <h2>Inbox</h2>
                {this.props.children}
            </div>
        )
    }
});