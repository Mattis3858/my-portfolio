import React from "react";
function About(props) {
  let resumeData = props.resumeData;
  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img className="profile-pic" src="images/sakura.jpg" alt="" />
        </div>

        <div className="nine columns main-col">
          <h2>About Me</h2>
          <div>
            {
              <p>
                {resumeData.aboutme.split("\n").map((paragraph, index) => (
                  <React.Fragment key={index}>
                    {paragraph}
                    <br />
                  </React.Fragment>
                ))}
              </p>
            }
          </div>
          <h2>課業學習</h2>
          <div>
            {
              <p>
                {resumeData.educationDescription
                  .split("\n")
                  .map((paragraph, index) => (
                    <React.Fragment key={index}>
                      {paragraph}
                      <br />
                    </React.Fragment>
                  ))}
              </p>
            }
          </div>
          <h2>實習經驗</h2>
          <div>
            {
              <p>
                {resumeData.internshipExperienceDescription
                  .split("\n")
                  .map((paragraph, index) => (
                    <React.Fragment key={index}>
                      {paragraph}
                      <br />
                    </React.Fragment>
                  ))}
              </p>
            }
          </div>
          <h2>專案經驗</h2>
          <div>
            {
              <p>
                {resumeData.projectExperienceDescription
                  .split("\n")
                  .map((paragraph, index) => (
                    <React.Fragment key={index}>
                      {paragraph}
                      <br />
                    </React.Fragment>
                  ))}
              </p>
            }
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
