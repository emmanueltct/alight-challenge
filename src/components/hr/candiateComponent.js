import CandidateTableHeader from "./candidates/candidateTableHeader";
import CandidateTableRow from "./candidates/candidateTableRow";

const CandidateComponent = () => {
 let allocated="true"
  return (
    <div className="table-responsive">
      <table
        className="table table-hover  transition"
        style={{
          flexDirection: "column",
          width: "98%",
          background: "#F3F8FF",
          marginTop: "10px",
          paddingTop: "10px",
          overflow: "auto",
        }}
      >
        <thead>
          <CandidateTableHeader />
        </thead>
        <tbody>
          <CandidateTableRow
            img="Group2509.png"
            name="Kalisa John"
            pdays="Java develope"
            board="Aug 18, 2023"
            training="07/10"
            documentation="06/10"
            supervisor=""
            profile=""
            allocated={!allocated}
            project=""
          />
          <CandidateTableRow
            img="Group2509.png"
            name="Kalisa John"
            pdays="Java develope"
            board="Aug 18, 2023"
            training="07/10"
            documentation="06/10"
            supervisor="Ernest"
            profile="Group2509.png"
            allocated={allocated}
            project="Respilon"
          />
          <CandidateTableRow
            img="Group2509.png"
            name="Kalisa John"
            pdays="Java develope"
            board="Aug 18, 2023"
            training="07/10"
            documentation="06/10"
            supervisor="Emmanuel"
            profile="CardIcon.png"
            allocated={!allocated}
            project="Respilon"
          />
          <CandidateTableRow
            img="Group2509.png"
            name="Kalisa John"
            pdays="Java develope"
            board="Aug 18, 2023"
            training="07/10"
            documentation="06/10"
            supervisor="Emmanuel"
            profile="Group2509.png"
            allocated={allocated}
            project="Respilon"
          />
          <CandidateTableRow
            img="Group2509.png"
            name="Kalisa John"
            pdays="Java developer"
            board="Aug 18, 2023"
            training="07/10"
            documentation="06/10"
            supervisor="Emmanuel"
            profile="CardIcon.png"
            allocated={!allocated}
            project=""
          />
        </tbody>
      </table>
    </div>
  );
};

export default CandidateComponent;
