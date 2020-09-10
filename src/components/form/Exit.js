import React, { useEffect } from "react";
import { auth } from "./fb";
import s from "./form.module.scss";

const Exit = () => {
  async function exit() {
    try {
      await auth.signOut();
    } catch (e) {}
  }

  return (
    <div>
      <button className={s.btn} onClick={exit}>
        Exit
      </button>
    </div>
  );
};

export default Exit;
