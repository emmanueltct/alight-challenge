import CandidateTableHeader from "./candidates/candidateTableHeader";
import CandidateTableRow from "./candidates/candidateTableRow";
import OnboardTableHeader from "./candidates/onboardTableHeader";
import OnboardTableRow from "./candidates/onboardTableRow";

const OnboardComponent = () => {
  let allocated = "true";
  return (
    <div className="table-responsive">
      <table
        className="table table-hover transition"
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
          <OnboardTableHeader />
        </thead>
        <tbody>
          <OnboardTableRow
            img="Group2509.png"
            name="Kalisa John"
            pdays="Java develope"
            board="Aug 18, 2023"
            training="07/10"
            documentation="6"
            supervisor=""
            profile=""
            allocated={!allocated}
            project=""
          />
          <OnboardTableRow
            img="Group2509.png"
            name="Kalisa John"
            pdays="Java develope"
            board="Aug 18, 2023"
            training="07/10"
            documentation="13"
            supervisor="Ernest"
            profile="Group2509.png"
            allocated={allocated}
            project="Respilon"
          />
          <OnboardTableRow
            img="Group2509.png"
            name="Kalisa John"
            pdays="Java develope"
            board="Aug 18, 2023"
            training="07/10"
            documentation="20"
            supervisor="Emmanuel"
            profile="CardIcon.png"
            allocated={!allocated}
            project="Respilon"
          />
          <OnboardTableRow
            img="Group2509.png"
            name="Kalisa John"
            pdays="Java develope"
            board="Aug 18, 2023"
            training="07/10"
            documentation="7"
            supervisor="Emmanuel"
            profile="Group2509.png"
            allocated={allocated}
            project="Respilon"
          />
          <OnboardTableRow
            img="Group2509.png"
            name="Kalisa John"
            pdays="Java developer"
            board="Aug 18, 2023"
            training="07/10"
            documentation="10"
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

export default OnboardComponent;
