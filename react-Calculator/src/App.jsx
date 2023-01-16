
import './App.css'

function App() {

  const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  return (
    <div className="App">
      <div className="Calculator">

        <div className='showPanel'>

        </div>

        <div className='calcPanel'>
          <div className="calcItem" key={numArr}>
            <button className="numButton">C</button>
            <button className="numButton">-/+</button>
            <button className="numButton">x</button>
            <button className="numButton">÷</button>
          </div>
          
        </div>
      </div>

    </div>
  )
}

export default App
