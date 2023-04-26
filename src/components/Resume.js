function Resume(props) {
  let resumeData = props.resumeData;
  return (
    <section id="resume">
      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Specialties</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          {resumeData.education &&
            resumeData.education.map((item, i) => {
              return (
                <div className="row item" key={i}>
                  <div className="twelve columns">
                    <h3>{item.UniversityName}</h3>
                    <p className="info">
                      {item.specialization}
                      <span />{" "}
                    </p>
                    <p>{item.hobby}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div className="row work">
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
