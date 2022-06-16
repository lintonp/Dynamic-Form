import React, { useState, useRef } from 'react'

import Input from '../UI/Input';
// import classes from './PhoneNumber.module.css'

const PhoneNumber = (props) => {
  const [addButton, setAddButton] = useState(false);

  const inputTypeRef = useRef();
  const inputNumberRef = useRef();

  const addPhoneNumber = (event) => {
    event.preventDefault()

    console.log(props.inputList);

    if(props.inputList.length>0 && props.inputList.filter((contact)=>{
      return contact.type === inputTypeRef.current.value
    })){
      console.log("Contact Type Exists");
      return;
    }
    if(props.inputList.length<4){
      console.log(`Counter: ${props.inputList}`)
      props.setInputList([...props.inputList, {type:inputTypeRef.current.value, number:inputNumberRef.current.value}]);      
    }
    else{
      setAddButton(true);
    }
  }

  let phoneInput = props.inputList.map((item) => {
    return <div key={item.type}>
      <Input value={item.type} />
      <Input value={item.number} />    
    </div>
  })

  return (
    <div>
      {phoneInput}
      {props.inputList.length<4 ?  
      <>
        <input type="text" ref={inputTypeRef} />
        <input type='tel' ref={inputNumberRef} />
      </>         
      : null}
      <button onClick={addPhoneNumber} disabled={props.inputList.length>3}>+</button>
    </div>
  )
}

export default PhoneNumber