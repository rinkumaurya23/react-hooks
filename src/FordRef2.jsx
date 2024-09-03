import React,{forwardRef} from 'react'


function FordRef2(props,ref) {

  return (
    <div>
      <h1>forwardRef 2 </h1>
      <input type="text" ref={ref} />
    </div>
  )
}

export default forwardRef(FordRef2);
