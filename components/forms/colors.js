import React, { useEffect, useState } from 'react'

export default function colors() {
const [color, setColor] = useState('black')

    const handleColor = (e) => {
        setColor(e)
    }

    useEffect(()=> {
        let value = JSON.stringify(color)
        sessionStorage.setItem('color', value)
    }, [color])

  return (
    <div className='colors'>
        <button className="btn__color yellow" onClick={() => handleColor('#fff66d')}>
        </button>
        <button className="btn__color green" onClick={() => handleColor('#4bfbba')}>
        </button>
        <button className="btn__color blue" onClick={() => handleColor('#9aebfe')}>
        </button>
        <button className="btn__color gold" onClick={() => handleColor('#fed78c')}>
        </button>
        <button className="btn__color gray" onClick={() => handleColor('#e4e4e4')}>
        </button>
    </div>
  )
}
