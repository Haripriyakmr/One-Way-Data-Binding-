import React from 'react'
import B from './B'

function A(props) {
  return (
    <div>
      <div>i'm passing vi A</div>
      <B dataB={props.dataA} />
    </div>
  )
}

export default A
