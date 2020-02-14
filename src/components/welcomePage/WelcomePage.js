import React from "react";

import s from "./welcomePage.module.scss";

const WelcomePage = () => {
  return (
    <section className={s.about}>
      <h1 className={s.title}>Frontend developer</h1>
      <h2 className={s.name}>Evgeny Kiselev</h2>
      <h2 className={s.mySkills}>My skills</h2>
      <div className={s.skills}>
        <div className={s.skills__item}>
          <p className={s.skills__item__title}>react</p>
          <i className={`fab fa-react ${s.react}`}></i>
        </div>

        <div className={s.skills__item}>
          <p className={s.skills__item__title}>javascript</p>
          <i className={`fab fa-js ${s.js}`}></i>
        </div>
        <div className={s.skills__item}>
          <p className={s.skills__item__title}>sass</p>
          <i className={`fab fa-sass ${s.sass}`}></i>
        </div>
        <div className={s.skills__item}>
          <p className={s.skills__item__title}>html</p>
          <i className={`fab fa-html5 ${s.html5}`}></i>
        </div>
        <div className={s.skills__item}>
          <p className={s.skills__item__title}>css</p>
          <i className={`fab fa-css3-alt  ${s.css}`}></i>
        </div>
        <div className={s.skills__item}>
          <p className={s.skills__item__title}>github</p>
          <i className={`fab fa-github ${s.github}`}></i>
        </div>
        <div className={s.skills__item}>
          <p className={s.skills__item__title}>git</p>
          <i className={`fab fa-git-square ${s.git}`}></i>
        </div>
      </div>

      <ul className={s.links}>
        <li className={s.link__item}>
          <a href="skype:live:ekiscode?chat">
            <i className="fab fa-skype"></i>
          </a>
        </li>
        <li className={s.link__item}>
          <a href="mailto:ekiscode@gmail.com">
            <i className="fas fa-at"></i>
          </a>
        </li>
        <li className={s.link__item}>
          <a href="https://github.com/nomexon">
            <i className="fab fa-github-square"></i>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default WelcomePage;
