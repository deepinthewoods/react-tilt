import './App.css';
import TiltBox from './TiltBox'
import React, {useState} from 'react'
import VanillaTilt from 'vanilla-tilt'



function App() {
  const [angle, setAngle] = useState(0)
  const [pxX, setPxX] = useState(0)
  const [pxY, setPxY] = useState(0)
  const [tiltX, setTiltX] = useState(0)
  const [tiltY, setTiltY] = useState(0)
  
  const callback = (event) => {
    console.log(event.detail)
    setAngle(event.detail.angle)
    setPxX(event.detail.percentageX)
    setPxY(event.detail.percentageY)
    setTiltX(event.detail.tiltX)
    setTiltY(event.detail.tiltY)
  }
  let boxRef = React.useRef()
  React.useEffect(() => {
    VanillaTilt.init(boxRef.current, {
      max: 25,
      speed: 400
    })
    boxRef.current.addEventListener("tiltChange", callback)
    return () => {
      boxRef.current.removeEventListener("tiltChange", callback)
    }
  }, [])

  return (
    <div className="App">
      <TiltBox ref = {boxRef}
      angle = {angle}
      pxX = {pxX}
      pxY = {pxY}
      tiltX = {tiltX}
      tiltY = {tiltY}
      />
    </div>
  );
}

export default App;
