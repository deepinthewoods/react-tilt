import React from 'react'
const TiltBox = React.forwardRef((props, ref) => {

    const spanStyle = {
        display: "inline-block",
        border: "3px solid black",
        width: "100px",
        height: "300px",
        padding: "0px"
    }
    return <div>
        <span style={spanStyle} ref = {ref}> 
        <p>angle {parseFloat(props.angle).toFixed(2)}</p>
        <p>% X {parseFloat(props.pxX).toFixed(2)}</p>
        <p>% Y {parseFloat(props.pxY).toFixed(2)}</p>
        <p>Tilt X {parseFloat(props.tiltX).toFixed(2)}</p>
        <p>Tilt Y {parseFloat(props.tiltY).toFixed(2)}</p>
        </span>
        
    </div>
})

export default TiltBox