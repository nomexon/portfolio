import { connect } from "react-redux";
import Footer from "./Footer";
import { changeValueTask, addTask } from "../../redux/actions/action";

const mapStateToProps = state => {
  return {
    value: state.tasks.valueTask
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeValue: e => dispatch(changeValueTask(e)),
    addTask: () => {
      dispatch(addTask());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
