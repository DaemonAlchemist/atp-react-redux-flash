/**
 * Created by Andy on 3/27/2017.
 */

import {o} from "atp-sugar";

//Action types
export const ADD_MESSAGE = "atp-flash/add-message";
export const ADD_MESSAGES = "atp-flash/add-messages";
export const HIDE_MESSAGE = "atp-flash/hide-message";

//Action creators
export const addMessage = message => ({type: ADD_MESSAGE, message});
export const addMessages = messages => ({type: ADD_MESSAGES, messages});
export const removeMessage = messageIndex => ({type: HIDE_MESSAGE, messageIndex});

export const addError = text => addMessage({type: "error", text});
export const addWarning = text => addMessage({type: "warning", text});
export const addSuccess = text => addMessage({type: "success", text});
export const addInfo = text => addMessage({type: "info", text});

//Reducer
export default (state = [], action) =>
    o(action.type).switch({
        [ADD_MESSAGE]: () => state.concat(action.message),
        [ADD_MESSAGES]: () => state.concat(action.messages),
        [HIDE_MESSAGE]: () => state.slice(0, action.messageIndex).concat(state.slice(action.messageIndex + 1)),
        default: () => state
    });
