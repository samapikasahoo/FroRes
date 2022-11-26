import { Link, Outlet } from "react-router-dom";
import ResumeBuilder from "./ResumeBuilder";
import React, { useState } from "react";
function UseTemplate() {
    const [personalInfo, setPersonalInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        address: "",
        city: "",
        state: "",
        postalCode: "",
        objective: "",
      });
   
      const [workExperience, setWorkExperience] = useState({
        jobTitle: "",
        orgName: "",
        startYear: "",
        endYear: "",
      });
   
      const [education, setEducation] = useState({
        type: "",
        university: "",
        degree: "",
        startYear: "",
        endYear: "",
      });
   
      const [keySkills, setKeySkills] = useState({
        skill1: "",
        skill2: "",
        skill3: "",
        skill4: "",
      });
      const [resumeName, setResumeName] = useState("");
      const [activeTab, setActiveTab] = useState(0);
      const [nextButtonClickedOnPI, setNextButtonClickedOnPI] =
        React.useState(false);
      const [nextButtonClickedOnWE, setNextButtonClickedOnWE] =
        React.useState(false);
      const [nextButtonClickedOnEdu, setNextButtonClickedOnEdu] =
        React.useState(false);
      const [nextButtonClickedOnKS, setNextButtonClickedOnKS] =
        React.useState(false);
   
    return (
      <div>
        <h1>   </h1>
        <Link to="/"> </Link>
        <ResumeBuilder
        personalInfo={personalInfo}
        setPersonalInfo={setPersonalInfo}
        workExperience={workExperience}
        setWorkExperience={setWorkExperience}
        education={education}
        setEducation={setEducation}
        keySkills={keySkills}
        setKeySkills={setKeySkills}
        resumeName={resumeName}
        setResumeName={setResumeName}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        nextButtonClickedOnPI={nextButtonClickedOnPI}
        setNextButtonClickedOnPI={setNextButtonClickedOnPI}
        nextButtonClickedOnWE={nextButtonClickedOnWE}
        setNextButtonClickedOnWE={setNextButtonClickedOnWE}
        nextButtonClickedOnEdu={nextButtonClickedOnEdu}
        setNextButtonClickedOnEdu={setNextButtonClickedOnEdu}
        nextButtonClickedOnKS={nextButtonClickedOnKS}
        setNextButtonClickedOnKS={setNextButtonClickedOnKS}
      />
      </div>
    );
   }
   
   export default UseTemplate;
 