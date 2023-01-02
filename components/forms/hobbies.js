import React, { useEffect, useState } from "react";

export default function hobbies() {
    const [hobby, setHobbby] = useState('')

    const handleHobby = (e) => {
        setHobbby(e.target.value)
    }

    useEffect(()=> {
        let value = JSON.stringify(hobby)
        sessionStorage.setItem('hobby', value)
    }, [hobby])

    
  return (
    <div className="personal">
      <div className="title">Hobbies</div>
      <small className="pb-1">What do you like?</small>

      <div className="grouped__accordion">
        <div className="accordion-tab">
          <div className="full__form ">
            <textarea value={hobby} onChange={(e) => handleHobby(e)} name="" id="" cols="30" rows="5" />
          </div>
        </div>
      </div>
    </div>
  );
}
