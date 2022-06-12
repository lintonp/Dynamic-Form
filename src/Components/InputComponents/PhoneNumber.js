import React, { useState, useRef } from 'react'

import Input from '../UI/Input';
// import classes from './PhoneNumber.module.css'

const PhoneNumber = (props) => {
  // let phoneInput = <input type='text' />
  // let counter = 0;
  const [addButton, setAddButton] = useState(false);
  const [inputList, setInputList] = useState([]);

  const inputTypeRef = useRef();
  const inputNumberRef = useRef();
  // const count = inputList.length;
  
  const addPhoneNumber = (event) => {
    event.preventDefault()
    console.log(`Counter: ${props.inputList.length}`)
    if(props.inputList.length<4){
      console.log(`Counter: ${props.inputList}`)
      props.setInputList([...props.inputList, {typ:inputTypeRef.current.value, detail:inputNumberRef.current.value}]);
      
      // setInputList([...inputList, {t:inputTypeRef, d:inputNumberRef}]);
      // console.log(inputList)
      // setInputList((list) => {
      //   return [...list, list.length];
      // })
      // phoneInput += <input type='text' />
    }
    else{
      setAddButton(true);
    }
    // counter++;
  }

  let phoneInput = props.inputList.map((item) => {
    return <div key={item.typ}>
      <Input key={item.typ} value={item.typ} />
      <Input key={item.detail} value={item.detail} />    
    </div>
  })

  // let allContacts = inputList.map((inp) => {
  //   console.log(`inp: ${inp}`)
  // })

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