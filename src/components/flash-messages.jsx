/**
 * Created by Andy on 8/17/2017.
 */

import React from "react";
import {Alert, Col, Row} from "react-bootstrap";

export default props =>
    <div style={{position: "absolute", bottom: 0, zIndex: 99999, width: "100%"}}>
        <Row>
            <Col xs={12} sm={8} smOffset={2} md={6} mdOffset={3}>
                {props.messages.map((message, index) =>
                    <Alert
                        key={index}
                        bsStyle={message.type === 'error' ? 'danger' : message.type}
                        onClick={props.removeMessage(index)}
                    >
                        <p>{message.text}</p>
                    </Alert>
                )}
            </Col>
        </Row>
    </div>;
