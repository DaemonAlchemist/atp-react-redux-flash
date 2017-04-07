/**
 * Created by Andy on 3/27/2017.
 */
"use strict";

import flash from "./reducer/flash";
import FlashMessages from "./containers/flash-messages";
import {addMessage, addMessages, removeMessage} from "./actions/flash";

const Flash = {
    reducers: {
        flash
    },
    FlashMessages,
    addMessage,
    addMessages,
    removeMessage
};

export default Flash;
export {FlashMessages, addMessage, addMessages, removeMessage};
