import { useState } from 'react'

import './App.css'

function App() {

  const [borderTopLeftRadius, setBorderTopLeftRadius] = useState('10px')
  const [borderTopRightRadius, setBorderTopRightRadius] = useState('10px')
  const [borderBottomRightRadius, setBorderBottomRightRadius] = useState('10px')
  const [borderBottomLeftRadius, setBorderBottomLeftRadius] = useState('10px')

  const handleborderTopLeftRadius = (e) => {
    const borderTopLeftRadiusValue = e.target.value + 'px'
    setBorderTopLeftRadius(borderTopLeftRadiusValue)
  }
  const handleborderTopRightRadius = (e) => {
    const borderTopRightRadiusValue = e.target.value + 'px'
    setBorderTopRightRadius(borderTopRightRadiusValue)
  }
  const handleborderBottomRightRadius = (e) => {
    const borderBottomRightRadiusValue = e.target.value + 'px'
    setBorderBottomRightRadius(borderBottomRightRadiusValue)
  }
  const handleborderBottomLeftRadius = (e) => {
    const borderBottomLeftRadiusValue = e.target.value + 'px'
    setBorderBottomLeftRadius(borderBottomLeftRadiusValue)
  }


  return (
    <div className="App">
      {/* 呈现区域 showplace*/}
      <div className='container'>
        <div
          className='previewer'
          style={{
            borderTopLeftRadius: borderTopLeftRadius,
            borderTopRightRadius: borderTopRightRadius,
            borderBottomRightRadius: borderBottomRightRadius,
            borderBottomLeftRadius: borderBottomLeftRadius
          }}
        >
        </div>
      </div>

      <div className='controlPanel'>
        <div className='controlItem'>
          <span>border Top Left Radius : </span>
          <input
            type="text"
            onChange={handleborderTopLeftRadius}
          />
        </div>

        <div className='controlItem'>
          <span>border Top Right Radius : </span>
          <input
            type="text"
            onChange={handleborderTopRightRadius}
          />
        </div>

        <div className='controlItem'>
          <span>border Bottom Right Radius :  </span>
          <input
            type="text"
            onChange={handleborderBottomRightRadius}
          />
        </div>

        <div className='controlItem'>
          <span>border Bottom Left Radius : </span>
          <input
            type="text"
            onChange={handleborderBottomLeftRadius}
          />
        </div>
      </div>

      <div className='copyPanel'>
        <div className='copyItem'>you can copy these attribitue:</div>
        <div className='copyItem'>
          <span>border Top Left Radius : </span>
          <span>{borderTopLeftRadius}</span>
        </div>

        <div className='copyItem'>
        <span>border Bottom Right Radius :  </span> 
          <span>{borderTopRightRadius}</span>
        </div>

        <div className='copyItem'>
        <span>border Bottom Left Radius : </span>
          <span>{borderBottomRightRadius}</span>
        </div>

        <div className='copyItem'>
          <span>border Top Left Radius : </span>
          <span>{borderBottomLeftRadius}</span>
        </div>
      </div>
    </div>
  )
}

export default App
