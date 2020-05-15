import { connect } from "react-redux";
// import * as TodoActions from '../actions'
// import { bindActionCreators } from "redux";
import UserStatusBar from "./UserStatusBar";
import { getUserCash, getUserName } from "../../selectors";

const mapStateToProps = (state) => ({
    cash: getUserCash(state),
    userName: getUserName(state),
    // completedCount: getCompletedTodoCount(state),
});

// const mapDispatchToProps = dispatch => ({
//   actions: bindActionCreators(TodoActions, dispatch)
// })

export default connect(mapStateToProps)(UserStatusBar);
