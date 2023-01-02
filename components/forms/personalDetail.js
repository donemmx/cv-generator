import React, { useEffect, useState } from "react";

export default function personalDetail() {
  const [details, setDetails] = useState([
    {
      title: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      country: "",
      city: "",
      address: "",
      postalCode: "",
      drivingLicense: "",
      nationality: "",
      placeOfBirth: "",
      dateOfBirth: "",
    },
  ]);

  const handleChange = (event, index) => {
    let data = [...details];
    data[index][event.target.name] = event.target.value;
    setDetails(data);
  };

  useEffect(() => {
    let value = JSON.stringify(details);
    sessionStorage.setItem("personal", value);
  }, [details]);

  return (
    <div className="personal">
      <div className="title">Personal Details</div>
      {details.map((value, index) => (
        <div className="main__form" key={index}>
          <div className="form__group">
            <label htmlFor="">Wanted Job Title</label>
            <input
              type="text"
              name="title"
              value={value.title}
              onChange={(event) => {
                handleChange(event, index);
              }}
            />
          </div>
          <div className="form__group">
            <div className="file__upload">
              <i className="pi pi-user"></i>
              <label htmlFor="">Upload photo</label>
            </div>
          </div>
          <div className="form__group">
            <label htmlFor="">First Name</label>
            <input
              type="text"
              name="firstName"
              value={value.firstName}
              onChange={(e) => handleChange(e, index)}
            />
          </div>
          <div className="form__group">
            <label htmlFor="">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={value.lastName}
              onChange={(e) => handleChange(e, index)}
            />
          </div>
          <div className="form__group">
            <label htmlFor="">Email</label>
            <input
              type="email"
              name="email"
              value={value.email}
              onChange={(e) => handleChange(e, index)}
            />
          </div>
          <div className="form__group">
            <label htmlFor="">Phone</label>
            <input
              type="text"
              name="phone"
              value={value.phone}
              onChange={(e) => handleChange(e, index)}
            />
          </div>
          <div className="form__group">
            <label htmlFor="">Country</label>
            <input
              type="text"
              name="country"
              value={value.country}
              onChange={(e) => handleChange(e, index)}
            />
          </div>
          <div className="form__group">
            <label htmlFor="">City</label>
            <input
              type="text"
              name="city"
              value={value.city}
              onChange={(e) => handleChange(e, index)}
            />
          </div>
          <div className="form__group">
            <label htmlFor="">Address</label>
            <input
              type="text"
              name="address"
              value={value.address}
              onChange={(e) => handleChange(e, index)}
            />
          </div>
          <div className="form__group">
            <label htmlFor="">Postal Code</label>
            <input
              type="text"
              name="postalCode"
              value={value.postalCode}
              onChange={(e) => handleChange(e, index)}
            />
          </div>
          <div className="form__group">
            <label htmlFor="">Driving License</label>
            <input type="text" 
             name='drivingLicense'
             value={value.drivingLicense}
             onChange={(e) => handleChange(e, index)}
            />
          </div>
          <div className="form__group">
            <label htmlFor="">Nationality</label>
            <input type="text" 
             name='nationality'
             value={value.nationality}
             onChange={(e) => handleChange(e, index)}
            />
          </div>
          <div className="form__group">
            <label htmlFor="">Place Of Birth</label>
            <input type="text" 
             name='placeOfBirth'
             value={value.placeOfBirth}
             onChange={(e) => handleChange(e, index)}
            />
          </div>
          <div className="form__group">
            <label htmlFor="">Date Of Birth</label>
            <input type="date" 
            name='dateOfBirth'
            value={value.dateOfBirth}
            onChange={(e) => handleChange(e, index)}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
