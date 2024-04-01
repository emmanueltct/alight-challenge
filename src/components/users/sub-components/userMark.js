import { CorrectIcons, InCorrectIcons } from "../check-svg/checks";
const UserMark = () => {
  return (
    <>
      <div className="candidate-marks">
        <div className="inner-div">
          <div className="elipse">74</div>
          <div className="score-fit">
            <span
              style={{
                color: " rgba(7, 28, 80, 1)",
                fontSize: "12px",
              }}
            >
              Score:
            </span>
            <span
              style={{
                color: " rgba(70, 150, 7, 1)",
                fontSize: "12px",
              }}
            >
              Potential Fit
            </span>
          </div>
          <div className="score-edit-button">Edit</div>
        </div>
      </div>
      <div className="row mx-auto" style={{ width: "98%", marginTop: "20px" }}>
        <div className="col-sm-12 job-check-condition">
          <span>Qualifications and skills match</span>
          <CorrectIcons />
        </div>
        <div className="col-sm-12 job-check-condition">
          <span>Experience Rlevance</span>

          <CorrectIcons />
        </div>
        <div className="col-sm-12 job-check-condition">
          <span>Education</span>

          <CorrectIcons />
        </div>
        <div className="col-sm-12 job-check-condition">
          <span>Keywords Match</span>

          <InCorrectIcons />
        </div>
        <div className="col-sm-12 job-check-condition">
          <span>Years of Experience</span>
          <CorrectIcons />
        </div>
        <div className="col-sm-12 job-check-condition">
          <span>Job Hopping</span>

          <CorrectIcons />
        </div>
        <div className="col-sm-12 job-check-condition">
          <span>Cultural Fit</span>
          <InCorrectIcons />
        </div>
        <div className="col-sm-12 job-check-condition">
          <span>Interview Performance</span>

          <CorrectIcons />
        </div>
        <div className="col-sm-12 job-check-condition">
          <span>References</span>
          <InCorrectIcons />
        </div>
        <div className="col-sm-12 job-check-condition">
          <span>Additional Factors</span>

          <CorrectIcons />
        </div>
      </div>
    </>
  );
};
export default UserMark;
