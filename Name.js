import React from 'react'

function Name(props) {
  return (
    <div>
      <h1>My name is {props.SendingName}</h1>
      <h1>My age is {props.age}</h1>
      <h1>My degree is {props.degree}</h1>
      <h1>My state is {props.state}</h1>

    </div>
  )
}

export default Name
