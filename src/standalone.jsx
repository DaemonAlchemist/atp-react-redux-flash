
import React from "react";

import {standAlone} from "atp-redux";
import flash from "./reducer/flash";
import FlashMessages from "./containers/flash-messages";
import {addMessage, addMessages, removeMessage} from "./reducer/flash";

//Standalone module definition
console.log("creating initializer");
const namespace = "ATP";
const name = "flash";
standAlone({
    namespace,
    name,
    content: props => <FlashMessages />,
    reducer: {flash},
    actions: {addMessage, addMessages, removeMessage}
});
