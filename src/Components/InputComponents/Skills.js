import React, { Fragment, useRef } from 'react'
import Input from '../UI/Input'

import SkillsList from './SkillsList'

const Skills = (props) => {
  const skillInputRef = useRef();

  const addSkillHandler = (event) => {
    event.preventDefault()
    const skill = skillInputRef.current.value;

    //validate skill
    if(skill === '' || skill === null){
      console.log('Enter valid skill')
      return;
    }
    if(props.allSkills.indexOf(skill) >= 0){
      console.log("Skill exists")
      return;
    }
    props.setAllSkills([...props.allSkills, skill]);
  }

  return (
    <Fragment>
      <label>Skills:</label>
      <SkillsList allSkills={props.allSkills} />
      <Input ref={skillInputRef} />
      <button onClick={addSkillHandler}>+</button>
    </Fragment>
  )
}

export default Skills