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
              <div>
                {resumeData.aboutme.map((paragraph, index) => (
                  <div key={index} className="aboutme-description">
                    <h5>{paragraph.description}</h5>
                    <div className="technique-text">{paragraph.technique}</div>
                    <div>{paragraph.content}</div>
                  </div>
                ))}
              </div>
            }
          </div>
          <h2>課業學習</h2>
          <div>
            {
              <div>
                {resumeData.educationDescription.map((paragraph, index) => (
                  <div key={index} className="aboutme-description">
                    <h5>{paragraph.description}</h5>
                    <div className="technique-text">{paragraph.technique}</div>
                    <div>{paragraph.content}</div>
                  </div>
                ))}
              </div>
            }
          </div>
          <h2>工作經驗</h2>
          <div>
            {
              <div>
                {resumeData.workingExperienceDescription.map(
                  (paragraph, index) => (
                    <div key={index} className="aboutme-description">
                      <h5>{paragraph.description}</h5>
                      <div className="technique-text">
                        {paragraph.technique}
                      </div>
                      <div>{paragraph.content}</div>
                    </div>
                  )
                )}
              </div>
            }
          </div>
          <h2>專案經驗</h2>
          <div>
            {
              <div>
                {resumeData.projectExperienceDescription.map(
                  (paragraph, index) => (
                    <div key={index} className="aboutme-description">
                      <h5>{paragraph.description}</h5>
                      <div className="technique-text">
                        {paragraph.technique}
                      </div>
                      <div>{paragraph.content}</div>
                    </div>
                  )
                )}
              </div>
            }
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
