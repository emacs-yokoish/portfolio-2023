import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import Header from './components/Header';
import About from './components/About';
import SkillSet from './components/SkillSet';
import Works from './components/Works';
import Profile from './components/Profile';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <section>
      <Header />
    </section>
    <section id="profile">
      <Profile />
    </section>
    <section id="about">
      <About />
    </section>
    <section id="skill_set">
      <SkillSet />
    </section>
    <section id="works">
      <Works />
    </section>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
