import React from "react";
function Resume(props) {
  let resumeData = props.resumeData;
  return (
    <section id="resume">
      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Educations</span>
          </h1>
        </div>
        <div className="nine columns main-col">
          {resumeData.education &&
            resumeData.education.map((item, i) => {
              return (
                <div className="row item" key={i}>
                  <div className="twelve columns">
                    <h3>{item.specialization}</h3>
                    <p className="info">
                      {item.UniversityName}
                      <span />{" "}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div className="row experiences">
        <div className="three columns header-col">
          <h1>
            <span>Experiences</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          {resumeData.experience &&
            resumeData.experience.map((item, i) => {
              return (
                <div className="row item" key={i}>
                  <div className="twelve columns">
                    <h3>{item.title}</h3>
                    <div className="info">
                      {item.company}
                      <span />
                      <div>{item.time}</div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div className="row achievements">
        <div className="three columns header-col">
          <h1>
            <span>Achievements</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          {resumeData.achievements &&
            resumeData.achievements.map((item, i) => {
              return (
                <div className="row item" key={i}>
                  <div className="twelve columns">
                    <p>{item.Achievements}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <p>{resumeData.skillsDescription}</p>

          <div className="bars">
            <ul className="skills">
              {resumeData.skills &&
                resumeData.skills.map((item, i) => {
                  return (
                    <li key={i}>
                      <span className={`bar-expand style-${item.skillid}`} />
                      <em>{item.skillname}</em>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
