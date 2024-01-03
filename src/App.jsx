
import React from 'react';
import RightSection from './components/right'
import LeftSection from './components/left'



function App() {

  return (
    <div className='ml-20 mr-10 mx-auto max-w-6xl grid sm:grid-cols-[40%_60%]'>

      <LeftSection/>
      <RightSection/>
    </div>
  )
}


export default App
