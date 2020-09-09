import React from 'react'

import ReactRRule from 'react-rrule'

const App = () => {
  return <ReactRRule onChange={(val) => console.log(val)} />
}

export default App
