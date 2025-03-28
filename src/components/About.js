import React from "react";
function About(props) {
  let resumeData = props.resumeData;
  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img
            className="profile-pic"
            src="images/sakura.jpg"
            alt=""
            height="10px"
          />
        </div>

        <div className="nine columns main-col">
          <h2>About Me</h2>
          <p>
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
          </p>

          {/* <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{resumeData.name}</span>
                  <br />
                  <span>{resumeData.address}</span>
                  <br />
                  <span>Email: {resumeData.email}</span>
                  <br />
                  <span>{resumeData.website}</span>
                </p>
              </div>
            </div> */}
        </div>
      </div>
    </section>
  );
}

export default About;
