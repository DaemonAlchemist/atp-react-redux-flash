/**
 * Created by Andy on 3/27/2017.
 */
import React from "react";
import {connect} from "react-redux";
import {Alert} from "react-bootstrap";

import {removeMessage} from "../actions/flash";

export default connect(
    state => ({messages: state.flash}),
    dispatch => ({dispatch})
)(props =>
    <div>
        {props.messages.map((message, index) =>
            <Alert
                key={index}
                bsStyle={message.type === 'error' ? 'danger' : message.type}
                onClick={() => props.dispatch(removeMessage(index))}
            >
                <p>{message.text}</p>
            </Alert>
        )}
    </div>
);