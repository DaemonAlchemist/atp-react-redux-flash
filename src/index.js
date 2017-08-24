/**
 * Created by Andy on 3/27/2017.
 */
"use strict";

import {Provider} from "react-redux";

import flash from "./reducer/flash";
import FlashMessages from "./containers/flash-messages";
import {addMessage, addMessages, removeMessage} from "./reducer/flash";

//Module definition
const Flash = {
    reducers: {
        flash
    },
};
export default Flash;

//Other exports
export {FlashMessages, addMessage, addMessages, removeMessage};
