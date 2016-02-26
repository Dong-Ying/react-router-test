import React from 'react'
import { render } from 'react-dom'

const App = require('./app');

document.addEventListener('DOMContentLoaded', function () {
    render(
        <App />,
        document.getElementById("router")
    );
});


