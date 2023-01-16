import { useState } from 'react'

import "tailwindcss/tailwind.css"

function App() {

  const [number, setNumber] = useState(0)

  return (
    <div className="App">
      <div className="Calculator flex h-screen flex-col justify-center items-center">

        <div className='showPanel mb-4 w-60 text-right'>
          {number}
        </div>

        <div className='calcPanelf flex flex-col'>
            <div className="calcItem mb-2 ">
              <button className="btn btn-outline ml-2 w-14">C/AC</button>
              <button className="btn btn-outline ml-2 w-14">%</button>
              <button className="btn btn-outline ml-2 w-14">÷</button>
              <button className="btn btn-outline ml-2 w-14">del</button>
            </div>

            <div className="calcItem mb-2">
              <button className="btn btn-outline ml-2 w-14">7</button>
              <button className="btn btn-outline ml-2 w-14">8</button>
              <button className="btn btn-outline ml-2 w-14">9</button>
              <button className="btn btn-outline ml-2 w-14">x</button>
            </div>

            <div className="calcItem mb-2">
              <button className="btn btn-outline ml-2 w-14">4</button>
              <button className="btn btn-outline ml-2 w-14">5</button>
              <button className="btn btn-outline ml-2 w-14">6</button>
              <button className="btn btn-outline ml-2 w-14">-</button>
            </div>

            <div className="calcItem mb-2">
              <button className="btn btn-outline ml-2 w-14">1</button>
              <button className="btn btn-outline ml-2 w-14">2</button>
              <button className="btn btn-outline ml-2 w-14">3</button>
              <button className="btn btn-outline ml-2 w-14">+</button>
            </div>

            <div className="calcItem mb-2">
              <button className="btn btn-outline ml-2 w-14">+/-</button>
              <button className="btn btn-outline ml-2 w-14">0</button>
              <button className="btn btn-outline ml-2 w-14">.</button>
              <button className="btn btn-outline ml-2 w-14">=</button>
            </div>
        </div>

      </div>

    </div>
  )
}

export default App
