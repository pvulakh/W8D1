import { connect } from 'react-redux';
import SessionForm from './session_form';

const msp = state => {
    return {
        errors: Object.values(state.errors),
        formType: 'login'
    };
};

const mdp = dispatch => {   
    return {
        processForm: user => dispatch(login(user))
    };
};

export default connect(msp, mdp)(SessionForm);