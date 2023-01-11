import { useState, useRef } from "react"

function App() {
  const [binary, setBinary] = useState('')
  const [errorMessage, setErrorMessage] = useState('enter 0 or 1')
  const [warnMessage, setWarnMessage] = useState('keep input in 8 digits')
  const [res, setRes] = useState('')

  const handleInput = (e) => {
    const inputValue = e.target.value
    setBinary(inputValue)
    if (binary.split('').length > 7) {
      alert(warnMessage)
    }
  }

  const handleConvert = () => {
    if (binary.match(/^[0-1]+$/g) === null) {
      alert(errorMessage)
      return
    }
    setRes(result)
  }

  return (
    <div className="App">
      <div className="container">
        <input
          className="inputBinary"
          type="text"
          placeholder="enter 0 or 1"
          onChange={handleInput}
        />

        <button
          onClick={handleConvert}
        >
          convert
        </button>

        <div className="result">
          convert result is:{res}
        </div>

      </div>
    </div>
  )
}

export default App
