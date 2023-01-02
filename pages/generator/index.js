import React, { useState } from "react";
import PersonalDetails from '../../components/forms/personalDetail'
import ProfessionalSummary from '../../components/forms/professioanalSumary'
import Education from '../../components/forms/education'
import EmploymentHistory from '../../components/forms/employmentHistory'
import Website from '../../components/forms/website'
import Skills from '../../components/forms/skillComponent'
import Reference from '../../components/forms/reference'
import Hobbies from '../../components/forms/hobbies'
import Languages from '../../components/forms/languages'



export default function index() {
  const [title, setTitle] = useState("Untitled");

  const titleChange = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
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
        <div className="generator__right">
          <div className="preview"></div>
        </div>
      </div>
    </div>
  );
}
