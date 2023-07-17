import React from 'react'

function Alerts(props) {
  const capitalize = (word) =>{
    // const lower = word.toLowerCase();
    return word.charAt(0).toUpperCase()+word.slice(1);
  }
  return (
    <div style={{height:'60px'}}>
    {props.alert && <div className={`alert alert-${props.alert.typ} alert-dismissible fade show`} role="alert">
         <strong>{capitalize(props.alert.typ)}</strong> : {props.alert.msg}
    </div>}
    </div>
  )
}

export default Alerts