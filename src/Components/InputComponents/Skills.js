import React, { Fragment, useState, useRef } from 'react'
import Input from '../UI/Input'

import SkillsList from './SkillsList'

const Skills = () => {
  const [allSkills, setAllSkills] = useState([]);
  const skillInputRef = useRef();

  const addSkillHandler = () => {
    const skill = skillInputRef.current.value;
    //validate skill
    if(skill === '' || skill === null){
      console.log('Enter valid skill')
      return;
    }
    if(allSkills.indexOf(skill) > 0){
      console.log("Skill exists")
      return;
    }
    // console.log()
    console.log(`Added: ${skill}`)
    setAllSkills([...allSkills, skill]);
  }

  return (
    <Fragment>
      <label>Skills:</label>
      <SkillsList allSkills={allSkills} />
      <Input ref={skillInputRef} />
      <button onClick={addSkillHandler}>+</button>
    </Fragment>
  )
}

export default Skills