import React from 'react'

import Input from '../UI/Input'

const SkillsList = (props) => {
    const skills = props.allSkills
    console.log(props.allSkills)
    // const skillSet = skills.map((skill) => <li key={skill}>{skill}</li> )
    const skillSet = skills.map((skill) => <Input key={skill} value={skill}>{skill}</Input> )

    return (
        <div>
           {skillSet}        
        </div>
    )
}

export default SkillsList