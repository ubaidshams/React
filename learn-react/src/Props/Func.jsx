// Passing Function as props
import React from 'react'

const Func = ({dispName,uname}) => {
  return (
      <div>
          {dispName(uname)}
    </div>
  )
}

export default Func