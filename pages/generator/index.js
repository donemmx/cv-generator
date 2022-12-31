import React, { useRef, useState } from "react";
import { Editor } from "primereact/editor";

export default function index() {
  const [title, setTitle] = useState("Untitled");
  const [professional, setProfessional] = useState("");
  let fixedData = {}
  const [inputFields, setInputFields] = useState([
    {
      school: "",
      degree: "",
      city: "",
      startDate: "",
      endDate: "",
    }
  ]);
  const titleChange = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };
  const renderHeader = () => {
    return (
      <span className="ql-formats">
        <button className="ql-bold" aria-label="Bold"></button>
        <button className="ql-italic" aria-label="Italic"></button>
        <button className="ql-underline" aria-label="Underline"></button>
        <button className="ql-link" aria-label="Insert Link"></button>
        <button className="ql-list" aria-label="Unordered List"></button>
      </span>
    );
  };

  const header = renderHeader();

  const handleFormChange = (index, event) => {
    let data = [...inputFields];
    data[index][event.target.name] = event.target.value;
    setInputFields(data);
  };

  const addFields = () => {
    let newfield = {
      school: "",
      degree: "",
      city: "",
      startDate: "",
      endDate: "",
    };
    

  };


  const removeFields = (index) => {
    let data = [...inputFields];
    data.splice(index, 1);
    setInputFields(data);
  };

  return (
    <div className="generator">
      <div className="genrator__main">
        <div className="generator__left">
          <div className="cvForm">
            <div className="form__title">
              <input
                className="formTitle"
                type="text"
                value={title}
                onChange={(e) => titleChange(e)}
                placeholder=""
                id=""
              />
            </div>
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
            <div className="personal">
              <div className="title">Professional Summary</div>
              <div className="full__form">
                <div className="form__group">
                  <small className="pb-2">
                    Write 2-4 short & energetic sentences to interest the
                    reader! Mention your role, experience & most importantly -
                    your biggest achievements, best qualities and skills.
                  </small>
                  <Editor
                    headerTemplate={header}
                    style={{ height: "320px" }}
                    value={professional}
                    onTextChange={(e) => setProfessional(e.htmlValue)}
                  />
                </div>
              </div>
            </div>
            <div className="personal">
              <div className="title">Educational Summary</div>
              <small className="pb-2">
                A varied education on your resume sums up the value that your
                learnings and background will bring to job.
              </small>
              <div className="accordion pt-2">
               
                  <div className="accordion-tab" >
                    <div className="main__form ">
                      <div className="form__group">
                        <label htmlFor="">School</label>
                        <input
                          type="text"
                          name="school"
                        />
                      </div>
                      <div className="form__group">
                        <label htmlFor="">Degree</label>
                        <input
                          type="text"
                          name="degree"
                         
                        />
                      </div>
                      <div className="form__group">
                        <div className="form__group">
                          <label htmlFor="">School</label>
                          <input
                            type="date"
                            name="startDate"
                          />
                        </div>
                        <div className="form__group">
                          <label htmlFor="">School</label>
                          <input
                            type="date"
                            name="endDate"
                          />
                        </div>
                      </div>
                      <div className="form__group">
                        <label htmlFor="">City</label>
                        <input
                          type="text"
                          name="city"
                        />
                      </div>
                    </div>
                    <div className="full__form pt-3">
                      <div className="form__group">
                        <Editor
                          headerTemplate={header}
                          style={{ height: "320px" }}
                          value={professional}
                          onTextChange={(e) => setProfessional(e.htmlValue)}
                        />
                      </div>
                    </div>
                  </div>
              </div>
              <button className="btn__small mt-2" onClick={addFields()}>
                + Add one more employment
              </button>
            </div>
          </div>
        </div>
        <div className="generator__right">
          <div className="preview"></div>
        </div>
      </div>
    </div>
  );
}
