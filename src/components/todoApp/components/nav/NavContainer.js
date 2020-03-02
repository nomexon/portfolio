import { connect } from "react-redux";
import Nav from "./Nav";

import {
  changeShowFilter,
  searchValueChange,
  startSearch
} from "../../redux/actions/action";

const mapStateToProps = state => {
  return {
    searchValue: state.tasks.searchValue
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeShowFilter: filter => {
      dispatch(changeShowFilter(filter));
    },
    searchValueChange: e => {
      dispatch(searchValueChange(e));
    },
    startSearch: () => {
      dispatch(startSearch());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
