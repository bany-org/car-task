import { connect } from "react-redux";

import Garage from "./Garage";

import { getCarColor, getUserCash } from "../../selectors";
import { changeCarColor } from "../../actions";

const mapStateToProps = (state) => ({
    carColor: getCarColor(state),
    cash: getUserCash(state),
});

const mapDispatchToProps = (dispatch) => ({
    changeCarColor: (hexCode) => {
        dispatch(changeCarColor(hexCode.hex));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Garage);
