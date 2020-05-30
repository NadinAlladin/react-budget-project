
import React, { Component} from "react";
import "./App.scss";
import {ConnectedRouter} from "connected-react-router";
import routes from "./routes";
import PropTypes from 'prop-types'

const App = ({ history }) => {
    return (
        <ConnectedRouter history={history}>
            { routes }
        </ConnectedRouter>
    )
}

App.propTypes = {
    history: PropTypes.object,
}

export default App;