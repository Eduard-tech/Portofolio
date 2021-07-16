// import React, { StrictMode } from "react";
import Introduction from './components/Introduction';
import SkillList from './components/skills/SkillList';
import Project from './components/project/Project';

function App() {
  return (
    <>
      <section><Introduction /></section>
      <section><Project /></section>
      <section><SkillList /></section>
    </>
  );
}

export default App;
