import React from 'react';
import ReactLogo from './assets/react.svg';
import GitHubLogo from './assets/github.svg';
import './global.css';

const Chip = ({ data }) => {
  return (
    <span className="chip" style={data.style}>
      {data.title}
    </span>
  );
};

const chipData = [
  {
    style: { background: '#1c1c1c', color: '#1d6cad' },
    title: 'webpack',
  },
  {
    style: { background: '#1b1b1d', color: '#f5da55' },
    title: 'babel',
  },
  {
    style: { background: '#1f1f1f', color: '#dd3a0a' },
    title: 'postcss',
  },
  {
    style: { background: '#000', color: '#FF911C' },
    title: 'svgr',
  },
  {
    style: { background: '#101828', color: '#B7B7FF' },
    title: 'eslint',
  },
  {
    style: { background: '#1A2B34', color: '#c596c7' },
    title: 'prettier',
  },
];

const App = () => (
  <div className="wrapper">
    <div className="github_link">
      <a
        href="https://github.com/jaykanjia/react_tailwind_setup"
        target="_blank"
        className="github_logo"
      >
        <GitHubLogo className="github_icon" />
      </a>
    </div>
    <div className="logo_container">
      <ReactLogo />
    </div>
    <h1 className="title" data-val="React Setup">
      React Setup
    </h1>
    <p className="desc">
      Simple and light weight react and webpack setup using
    </p>
    <div className="chip_container">
      {chipData.map((item, index) => {
        return <Chip key={index} data={item} />;
      })}
    </div>
  </div>
);

export default App;
