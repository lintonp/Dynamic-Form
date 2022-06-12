import React, { useState, useRef } from 'react'

import Input from '../UI/Input';
// import classes from './PhoneNumber.module.css'

const PhoneNumber = (props) => {
  const [addButton, setAddButton] = useState(false);

  const inputTypeRef = useRef();
  const inputNumberRef = useRef();

  const addPhoneNumber = (event) => {
    event.preventDefault()
    console.log(`Counter: ${props.inputList.length}`)
    if(props.inputList.length<3){
      console.log(`Counter: ${props.inputList}`)
      props.setInputList([...props.inputList, {typ:inputTypeRef.current.value, detail:inputNumberRef.current.value}]);      
    }
    else{
      setAddButton(true);
    }
  }

  let phoneInput = props.inputList.map((item) => {
    return <div key={item.typ}>
      <Input key={item.typ} value={item.typ} />
      <Input key={item.detail} value={item.detail} />    
    </div>
  })

  return (
    <div>
      {phoneInput}
      <input type="text" ref={inputTypeRef} />
      <input type='tel' ref={inputNumberRef} />
      <button onClick={addPhoneNumber} disabled={addButton}>+</button>
    </div>
  )
}

export default PhoneNumber