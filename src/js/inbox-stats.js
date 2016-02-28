import React from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router'

module.exports = React.createClass({
    getInitialState() {
        return ({
            messages: []
        })
    },
    componentDidMount() {
        //ajax call
        this.setState({
                messages: [
                    {
                        id: 1,
                        content: 'Message 1'
                    },
                    {
                        id: 2,
                        content: 'Message 2'
                    }
                ]
            }
        )
    },
    render() {
        return (
            <div>
                Inbox Stats
                <div>
                    {
                        this.state.messages.map((message) => {
                            return (
                                <Link to={`/messages/${message.id}`}>
                                    {message.content}
                                </Link>
                            );
                        })
                    }
                </div>
            </div>
        )
    }
});