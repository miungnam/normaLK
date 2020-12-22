import {bindActionCreators} from "redux";
import {connect as reduxConnect} from "react-redux";
import Login from '../../../components/Login/Login'
import * as LoginActions from '../../actions/LoginAction/login'


const mapStateToProps = state => ({
    ...state.login,
});
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
    ...LoginActions
    }, dispatch)
});
export default reduxConnect(mapStateToProps, mapDispatchToProps)(Login);