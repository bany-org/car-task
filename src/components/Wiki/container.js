import { connect } from "react-redux";
import { addCash } from "../../actions";
import Wiki from "./Wiki";

// const mapStateToProps = (state, ownProps) => ({
//     active: ownProps.filter === state.visibilityFilter,
// });

const mapDispatchToProps = (dispatch, ownProps) => ({
    addCash: () => {
        dispatch(addCash());
    },
});

export default connect(null, mapDispatchToProps)(Wiki);
