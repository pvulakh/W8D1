import { connect } from 'react-redux';
import SessionForm from './session_form';

const msp = state => {
    return {
        errors: Object.values(state.errors),
        formType: 'signup'
    };
};

const mdp = dispatch => {
    return {
        processForm: user => dispatch(signup(user))
    };
};

export default connect(msp, mdp)(SessionForm);