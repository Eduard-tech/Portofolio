import Skill from "./Skill";

import classes from "./SkillList.module.css"

const skills=[
  {name: "HTML" ,imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/600px-HTML5_Badge.svg.png"},
  {name: "CSS" ,imgUrl: "https://www.svgrepo.com/show/170099/css-file-format-symbol.svg"},
  {name: "Javscript" ,imgUrl: "https://iconape.com/wp-content/files/ez/353342/svg/javascript-seeklogo.com.svg"},
  {name: "Bootstrap" ,imgUrl: "https://cdn.volaresystems.com/Images/Posts/2019/12/bootstrap.png"},
  {name: "ReactJs" ,imgUrl: "https://user-images.githubusercontent.com/21227322/31187159-01c8d592-a8ff-11e7-9386-af708a7ae9de.png"},
  {name: "Ruby on Rails" ,imgUrl: "https://www.shareicon.net/data/256x256/2015/08/30/93005_on_395x512.png"},
  {name: "Ruby" ,imgUrl: "https://www.logolynx.com/images/logolynx/85/85e74fd4ec731ee889a1812c10a196fa.png"},
  {name: "Api" ,imgUrl: "https://image.flaticon.com/icons/png/512/3234/3234207.png"},
  {name: "JSON" ,imgUrl: "https://icon-library.com/images/json-icon-png/json-icon-png-5.jpg"},
  {name: "UI Design (Figma)" ,imgUrl: "https://iconape.com/wp-content/png_logo_vector/cib-figma.png"},
  {name: "Sql" ,imgUrl: "https://www.svgrepo.com/show/7344/sql-file-format-symbol.svg"},
  {name: "PostgreSQL" ,imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/745px-Postgresql_elephant.svg.png"},
  {name: "Firebase" ,imgUrl: "https://firebase.google.com/downloads/brand-guidelines/PNG/logo-logomark.png"},
  {name: "Git | Github" ,imgUrl: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"},
  {name: "Adobe Photoshop" ,imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/2101px-Adobe_Photoshop_CC_icon.svg.png"},
  {name: "Adobe After Effects" ,imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Adobe_After_Effects_CC_icon.svg/1051px-Adobe_After_Effects_CC_icon.svg.png"},
  {name: "Adobe Illustrator" ,imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/1051px-Adobe_Illustrator_CC_icon.svg.png"},
  {name: "Wordpress" ,imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Wordpress-Logo.svg/2048px-Wordpress-Logo.svg.png"}
]

const SkillList = () => {

  return <div className={classes.container}>
    <h1 className={classes.title}>Skills</h1>
    <div className={classes["skill-grid"]}>
      <Skill skillArr={skills}/>
    </div>
  </div>

};

export default SkillList;