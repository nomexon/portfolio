import { connect } from "react-redux";
import Main from "./Main";
import {
  changeEditStatus,
  changeEditValueTask,
  changeStatus,
  deleteTask,
  saveEditValue
} from "../../redux/actions/action";

const mapStateToProps = state => {
  return {
    tasks: state.tasks.tasks,
    searchValue: state.tasks.searchValue,
    editText: state.tasks.editValueTask,
    editMode: state.tasks.editMode,
    showFilter: state.tasks.showFilter
  };
};
const mapDispatchToProps = dispatch => {
  return {
    deleteTask: id => {
      dispatch(deleteTask(id));
    },
    changeStatus: id => {
      dispatch(changeStatus(id));
    },
    changeEditStatus: id => {
      dispatch(changeEditStatus(id));
    },
    changeEditValueTask: e => {
      dispatch(changeEditValueTask(e));
    },
    saveEditValue: id => {
      dispatch(saveEditValue(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
