import React, { useState } from "react";

import s from "./welcomePage.module.scss";
import { Link } from "react-router-dom";

const skillItem = (title, iclass) => {
  return (
    <div key={title} className={s.skills__item}>
      <p className={s.skills__item__title}>{title}</p>
      <i className={iclass} />
    </div>
  );
};
let ini = [
  { title: "react", iclass: `fab fa-react ${s.react}` },
  { title: "javascript", iclass: `fab fa-js ${s.js}` },
  { title: "sass", iclass: `fab fa-sass ${s.sass}` },
  { title: "html5", iclass: `fab fa-html5 ${s.html5}` },
  { title: "css", iclass: `fab fa-css3-alt  ${s.css}` },
  { title: "github", iclass: `fab fa-github ${s.github}` },
  { title: "git", iclass: `fab fa-git-square ${s.git}` },
];

const WelcomePage = () => {
  const [skills] = useState(ini);
  let skillsArr = skills.map((item) => {
    return skillItem(item.title, item.iclass);
  });
  return (
    <section className={s.about}>
      <h1 className={s.title}>Frontend developer</h1>
      <h2 className={s.name}>Evgeny Kiselev</h2>

      <div className={s.skills__and__projects}>
        <div className={s.skills}>
          <h2 className={s.mySkills}>My skills</h2>
          <div className={s.skills__items}>{skillsArr}</div>
        </div>
        <div className={s.projects}>
          <h2 className={s.mySkills}>My projects</h2>
          <Link className={s.projectLink} to="/todoredux">
            ToDoApp Redux
          </Link>

          <Link className={s.projectLink} to="/form">
            Form
          </Link>
          <Link className={s.projectLink} to="/form">
            Form2222
          </Link>
        </div>
      </div>

      <ul className={s.links}>
        <li className={s.link__item}>
          <a href="skype:live:ekiscode?chat">
            <i className="fab fa-skype" />
          </a>
        </li>
        <li className={s.link__item}>
          <a href="mailto:ekiscode@gmail.com">
            <i className="fas fa-at" />
          </a>
        </li>
        <li className={s.link__item}>
          <a href="https://github.com/nomexon">
            <i className="fab fa-github-square" />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default WelcomePage;
