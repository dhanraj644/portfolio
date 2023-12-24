import React from "react";

function Education() {
  return (
    <secton>
      <div className="education-page">
        <center>
          <h2 className="titele-text">
           
            <span>My </span>Education
          </h2>
        </center>

        <div className="box--container">
          <div className="box-1">
            <div className="e-box">
              <i class="fas fa-graduation-cap"></i>
              <span>2023-2025</span>
              <h3>MASTER OF COMPUTER APLICATION (MCA)</h3>
              <p>Rajkot gujrat india</p>
            </div>

            <div className="e-box">
              <i className="fas fa-graduation-cap"></i>
              <span>2020-2023</span>
              <h3>BACHELORE OF COMPUTER APLICATION (BCA)</h3>
              <p>Aburoad rajasthan india</p>
            </div>
          </div>

          <div className="box-1">
            <div className="e-box">
              <i className="fas fa-graduation-cap"></i>
              <span>2019-2020</span>
              <h3>GOVT.SR.SEC.SCHOOL (12th)</h3>
              <p>ORIYA,MOUNT ABU RAJASTHAN</p>
            </div>

            <div className="e-box">
              <i className="fas fa-graduation-cap"></i>
              <span>2017-2018</span>
              <h3>GOVT.SR.SEC.SCHOOL (10th)</h3>
              <p>ORIYA,MOUNT ABU RAJASTHAN</p>

            </div>
          </div>
        </div>
      </div>
    </secton>
  );
}

export default Education;
