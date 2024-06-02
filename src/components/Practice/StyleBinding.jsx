import React, { useState } from 'react'

const StyleBinding = () => {

    const[style, setStyle] = useState({'fontSize':'10px','color':'black'})
    const handleFontChange = (e) =>
    {
        setStyle({
            fontSize:e.target.value+"px",
            color:style.color
        })
    }
    const handleFontColor =(e) =>
    {
        setStyle({
            fontSize:style.fontSize,
            color:e.target.value
        })
    }
  return (
    <div>
      <div className='container-fluid bg-warning h-100'>
        <h1>Style Binding</h1>
        <dl>
            <dt>Font Size</dt>
            <dd><input onChange={handleFontChange} type="range" max="300" /></dd>
            <dt>Fond Color</dt>
            <dd><input onChange={handleFontColor} type="color" name="" id="" /></dd>
        </dl>
        <p className='text-center' style={style}> test Font</p>
      </div>
    </div>
  )
}

export default StyleBinding
