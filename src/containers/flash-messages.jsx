import {connect} from "react-redux";

import {removeMessage} from "../reducer/flash";
import FlashMessages from "../components/flash-messages";

export default connect(
    state => ({
        messages: state.flash
    }),
    dispatch => ({
        removeMessage: index => () => dispatch(removeMessage(index))
    })
)(FlashMessages);