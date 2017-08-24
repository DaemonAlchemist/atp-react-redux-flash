/**
 * Created by Andy on 8/17/2017.
 */

import React from "react";
import {Alert} from "react-bootstrap";

export default props =>
    <div>
        {props.messages.map((message, index) =>
            <Alert
                key={index}
                bsStyle={message.type === 'error' ? 'danger' : message.type}
                onClick={props.removeMessage(index)}
            >
                <p>{message.text}</p>
            </Alert>
        )}
    </div>;
