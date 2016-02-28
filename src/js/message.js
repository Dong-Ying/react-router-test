import React from 'react'
import { render } from 'react-dom'

module.exports = React.createClass({
    render() {
        return (
            <div>
                This is the detailed info about message {this.props.params.id}.
            </div>
        )
    }
});