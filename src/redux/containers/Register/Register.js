import {bindActionCreators} from "redux";
import {connect as reduxConnect} from "react-redux";
import Register from '../../../components/Registr/Registrationn'
import * as RegisterActions from '../../actions/RegisteAction/register'


const mapStateToProps = state => ({
    ...state.register,
});
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
    ...RegisterActions
    }, dispatch)
});
export default reduxConnect(mapStateToProps, mapDispatchToProps)(Register);