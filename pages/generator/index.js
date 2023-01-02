import React, { useState } from "react";
import PersonalDetails from "../../components/forms/personalDetail";
import ProfessionalSummary from "../../components/forms/professioanalSumary";
import Education from "../../components/forms/education";
import EmploymentHistory from "../../components/forms/employmentHistory";
import Website from "../../components/forms/website";
import Skills from "../../components/forms/skillComponent";
import Reference from "../../components/forms/reference";
import Hobbies from "../../components/forms/hobbies";
import Languages from "../../components/forms/languages";
import Colors from "../../components/forms/colors";


export default function index() {
  const [title, setTitle] = useState("Untitled");
  const [open, setOpen] = useState(false)
  const titleChange = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const openTemplates = () => {
    setOpen(() => !open)
  }

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
            {/* personal-details */}
            <PersonalDetails />
            {/* Professioanl Summary */}
            <ProfessionalSummary />
            {/* Edcucation */}
            <Education />
            {/* Employment History */}
            <EmploymentHistory />
            {/* Website and Socials links */}
            <Website />
            {/* Skills */}
            <Skills />
            {/* Reference */}
            <Reference />
            {/* Hobbies */}
            <Hobbies />
            {/* Languages */}
            <Languages />
          </div>
        </div>
        <div className={open ? 'generator__right w-70' : 'generator__right'}>
          <div className="preview">
            <div className={open ? "adjustedBody" :"preview__body"}></div>
          </div>
          <div className={open ? "preview__panel bg-black" : "preview__panel"}>
            <div className="preview_buttons">
              <button className="btn__secondary" onClick={() => openTemplates()}>
                <i className={open? "pi pi-times" : "pi pi-th-large"}></i>
               {open ? 'Close':  "Select Template"}
              </button>
              <Colors />
              <button className="btn__secondary">
                <i className="pi pi-download"></i>
                Download
              </button>
            </div>
          </div>
        </div>
      </div>
      { open ? 
      <div className="overlay__templates">
        <div className="templates__main py-5">
            <div className="small__templaes">
            </div>
            <div className="small__templaes">

            </div>
            <div className="small__templaes">
            </div>
            <div className="small__templaes">

            </div>
            <div className="small__templaes">
            </div>
            <div className="small__templaes">

            </div>
            
        </div>
      </div>
        : ''  
    }
    </div>
  );
}
