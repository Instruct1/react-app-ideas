import { useState } from 'react'

import "tailwindcss/tailwind.css"

function App() {

  const [nextValue, setNextValue] = useState('')
  const [initShow, setrInitShow] = useState(
    {
      num: 0,
      isShow: true
    }
  )

  const handleNumClick = (e) => {
    const inputValue = e.target.innerHTML
    setrInitShow(
        !initShow.isShow
      )
    setNextValue(
      nextValue + inputValue
    )
  }

  return (
    <div className="App">
      <div className="Calculator flex flex-col h-screen justify-center items-center">

        <div
          className='showPanel mb-4 w-60 text-right'
        >
          {
            initShow.isShow === true ? initShow.num : nextValue
          }
        </div>

        <div className='calcPanelf flex flex-col'>
          <div className="calcItem mb-2 ">
            <button className="btn btn-outline ml-2 w-14">C/AC</button>
            <button className="btn btn-outline ml-2 w-14">%</button>
            <button className="btn btn-outline ml-2 w-14">÷</button>
            <button className="btn btn-outline ml-2 w-14">del</button>
          </div>

          <div className="calcItem mb-2">
            <button
              className="btn btn-outline ml-2 w-14"
              onClick={handleNumClick}
            >
              7
            </button>
            <button className="btn btn-outline ml-2 w-14" onClick={handleNumClick}>8</button>
            <button className="btn btn-outline ml-2 w-14" onClick={handleNumClick}>9</button>
            <button className="btn btn-outline ml-2 w-14" onClick={handleNumClick}>x</button>
          </div>

          <div className="calcItem mb-2">
            <button className="btn btn-outline ml-2 w-14" onClick={handleNumClick}>4</button>
            <button className="btn btn-outline ml-2 w-14" onClick={handleNumClick}>5</button>
            <button className="btn btn-outline ml-2 w-14" onClick={handleNumClick}>6</button>
            <button className="btn btn-outline ml-2 w-14" onClick={handleNumClick}>-</button>
          </div>

          <div className="calcItem mb-2">
            <button className="btn btn-outline ml-2 w-14" onClick={handleNumClick}>1</button>
            <button className="btn btn-outline ml-2 w-14" onClick={handleNumClick}>2</button>
            <button className="btn btn-outline ml-2 w-14" onClick={handleNumClick}>3</button>
            <button className="btn btn-outline ml-2 w-14" onClick={handleNumClick}>+</button>
          </div>

          <div className="calcItem mb-2">
            <button className="btn btn-outline ml-2 w-14">+/-</button>
            <button className="btn btn-outline ml-2 w-14" onClick={handleNumClick}>0</button>
            <button className="btn btn-outline ml-2 w-14">.</button>
            <button className="btn btn-outline ml-2 w-14">=</button>
          </div>
        </div>

      </div>

    </div>
  )
}

export default App
