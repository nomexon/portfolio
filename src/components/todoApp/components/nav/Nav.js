import React from "react";
import s from "./Nav.module.scss";
import { Button, Input } from "antd";
import {
  SHOW_ACTIVE,
  SHOW_ALL,
  SHOW_DONE
} from "../../redux/actionTypes/actionTypes";

const Nav = ({
  startSearch,
  changeShowFilter,
  searchValueChange,
  searchValue
}) => {
  return (
    <nav className={s.nav}>
      <div className={s.search__wrap}>
        <Input
          type="text"
          value={searchValue}
          onChange={searchValueChange}
          placeholder="search"
          className={s.searchInput}
          onPressEnter={() => {
            startSearch();
          }}
        />
      </div>

      <div className="filters">
        <Button
          className={s.btn_marginRight}
          onClick={() => {
            changeShowFilter(SHOW_ALL);
          }}
        >
          all
        </Button>
        <Button
          className={s.btn_marginRight}
          onClick={() => {
            changeShowFilter(SHOW_DONE);
          }}
        >
          done
        </Button>
        <Button
          onClick={() => {
            changeShowFilter(SHOW_ACTIVE);
          }}
        >
          active
        </Button>
      </div>
    </nav>
  );
};

export default Nav;
