import classes from "./Skill.module.css"

const Skill = (props) => {

  const skill = props.skillArr.map((skill) => {
    
    return <div className={classes.box}>
      <img src={skill.imgUrl} alt="Skill"/>
      <div className={classes.description}>
      {skill.name}
      </div>
       </div>

  });

  return <>{skill}</>
};

export default Skill;