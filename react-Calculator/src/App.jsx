
import './App.css'

function App() {

  const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  return (
    <div className="App">
      <div className="Calculator">

        <div className="numPanel">
          {
            numArr.map(numArr => (
              <div className="numItem" key={numArr}>
                <button className="numButton">{numArr}</button>
              </div>
            ))
          }
        </div>

        <div className='calcPanel'>
          <div>+</div>
          <div>-</div>
          <div>x</div>
          <div>÷</div>
          <div>=</div>
          <div>+/-</div>
          <div>.</div>
          <div>delete</div>
          <div>AC</div>
        </div>

      </div>
    </div>
  )
}

export default App
