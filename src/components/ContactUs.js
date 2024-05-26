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
              Github : <a href={resumeData.github}>Mattis3858</a>
            </h4>
            <h4>
              Email : <a href={resumeData.email}>mustang3858@gmail.com</a>
            </h4>
            <h4>
              Instagram : <a href={resumeData.instagramId}>zhumaozhen</a>
            </h4>
            <h4>Discord : {resumeData.discordId}</h4>
            <h4>Line : {resumeData.lineId}</h4>
          </div>
        </aside>
      </div>
    </section>
  );
}
export default ContactUs;
