import classes from "./Introduction.module.css"

const Introduction = () => {
  return <div className={classes.introduction}>
    <h1 className={classes.name}>Eduard Ciugulea</h1>
    <h2 className={classes.job}>Full-Stack Developer</h2>
    <button className={classes.button}>View my work ↓</button>
  </div>
};

export default Introduction;