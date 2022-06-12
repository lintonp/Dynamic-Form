import React from 'react'

const Input = React.forwardRef((props, ref) => {
  return (
    <input type='text' ref={ref} value={props.value} onChange={()=>{}}  />
  )
});

export default Input