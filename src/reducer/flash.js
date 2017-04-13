/**
 * Created by Andy on 3/27/2017.
 */

import {ADD_MESSAGE, ADD_MESSAGES, HIDE_MESSAGE} from "../actions/flash";
import {o} from "atp-sugar";

export default (state = [], action) =>
    o(action.type).switch({
        [ADD_MESSAGE]: () => state.concat(action.message),
        [ADD_MESSAGES]: () => state.concat(action.messages),
        [HIDE_MESSAGE]: () => state.slice(0, action.messageIndex).concat(state.slice(action.messageIndex + 1)),
        default: () => state
    });
