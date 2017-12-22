
import flash from "./reducer/flash";
import FlashMessages from "./containers/flash-messages";
import {addMessage, addMessages, removeMessage, addError, addWarning, addSuccess, addInfo} from "./reducer/flash";

//Module definition
const Flash = {
    reducers: {
        flash
    },
};
export default Flash;

//Other exports
export {FlashMessages, addMessage, addMessages, removeMessage, addError, addWarning, addSuccess, addInfo};
