import React from 'react'

export default function personalDetail() {
  return (
    <div className="personal">
    <div className="title">Personal Details</div>
    <div className="main__form">
      <div className="form__group">
        <label htmlFor="">Wanted Job Title</label>
        <input type="text" />
      </div>
      <div className="form__group">
        <div className="file__upload">
          <i className="pi pi-user"></i>
          <label htmlFor="">Upload photo</label>
        </div>
      </div>
      <div className="form__group">
        <label htmlFor="">First Name</label>
        <input type="text" />
      </div>
      <div className="form__group">
        <label htmlFor="">Last Name</label>
        <input type="text" />
      </div>
      <div className="form__group">
        <label htmlFor="">Email</label>
        <input type="text" />
      </div>
      <div className="form__group">
        <label htmlFor="">Phone</label>
        <input type="text" />
      </div>
      <div className="form__group">
        <label htmlFor="">Country</label>
        <input type="text" />
      </div>
      <div className="form__group">
        <label htmlFor="">City</label>
        <input type="text" />
      </div>
      <div className="form__group">
        <label htmlFor="">Address</label>
        <input type="text" />
      </div>
      <div className="form__group">
        <label htmlFor="">Postal Code</label>
        <input type="text" />
      </div>
      <div className="form__group">
        <label htmlFor="">Driving License</label>
        <input type="text" />
      </div>
      <div className="form__group">
        <label htmlFor="">Nationality</label>
        <input type="text" />
      </div>
      <div className="form__group">
        <label htmlFor="">Place Of Birth</label>
        <input type="text" />
      </div>
      <div className="form__group">
        <label htmlFor="">Date Of Birth</label>
        <input type="text" />
      </div>
    </div>
  </div>
  )
}
