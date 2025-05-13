import React from "react";
function ContactUs(props) {
  let resumeData = props.resumeData;
  return (
    <section id="contact">
      <div className="row section-head">
        <div className="ten columns">
          <p className="lead">Contact</p>
        </div>
      </div>
      <div className="row">
        <aside className="eigth columns footer-widgets">
          <div className="widget">
            <h4>
              LinkedIn :{" "}
              <a
                href={resumeData.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
              >
                朱茂榛
              </a>
            </h4>
            <h4>
              Github :{" "}
              <a
                href={resumeData.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                {resumeData.github}
              </a>
            </h4>
            <h4>
              Email :{" "}
              <a
                href={"mailto:" + resumeData.email}
                target="_blank"
                rel="noopener noreferrer"
              >
                {resumeData.email}
              </a>
            </h4>
            <h4>
              Instagram :{" "}
              <a
                href={resumeData.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                zhumaozhen
              </a>
            </h4>
            <h4>
              Line :{" "}
              <a
                href={resumeData.line}
                target="_blank"
                rel="noopener noreferrer"
              >
                mattis3858
              </a>
            </h4>
            <h4>Discord : {resumeData.discordId}</h4>
          </div>
        </aside>
      </div>
    </section>
  );
}
export default ContactUs;
