import {bindActionCreators} from "redux";
import {connect as reduxConnect} from "react-redux";
import News from '../../components/News/News'
import * as NewsActions from '../../actions/newsAction/news-action'


const mapStateToProps = state => ({
    ...state.news,
});
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
    ...NewsActions
    }, dispatch)
});
export default reduxConnect(mapStateToProps, mapDispatchToProps)(News);