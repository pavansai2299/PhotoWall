import { connect } from "react-redux";
import Main from "./Main";
import { bindActionCreators } from "redux";
import * as actions from '../redux/action'
import { withRouter } from "react-router";

const mapStateToProps = (state) =>{
    console.log(state);
    return {
        posts:state.posts,
        comments:state.comments,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions,dispatch);
}

const App = withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));

export default App;
