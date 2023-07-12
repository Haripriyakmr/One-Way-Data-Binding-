import React from 'react'
import C1 from './C1'

function B(props) {
  return (
    <div>DATA passing B<C1 dataC1={props.dataB}/></div>
  )
}

export default B
