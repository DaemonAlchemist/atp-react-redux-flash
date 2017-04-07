/**
 * Created by Andy on 3/27/2017.
 */

export const ADD_MESSAGE = "atp-flash/add-message";
export const ADD_MESSAGES = "atp-flash/add-messages";
export const HIDE_MESSAGE = "atp-flash/hide-message";

export const addMessage = message => ({type: ADD_MESSAGES, message});
export const addMessages = messages => ({type: ADD_MESSAGES, messages});
export const removeMessage = messageIndex => ({type: HIDE_MESSAGE, messageIndex});
