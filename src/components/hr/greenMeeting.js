function GreenMeeting() {
  return (
    <div
      className="row mx-auto green-meeting"
     
    >
      <div
        className="col-sm-2"
        style={{
          fontSize: "12px",
          borderRight: "1px solid #1B5CBE70",
          fontFamily: "Poppins",
          fontSize: "12px",
          fontWeight: "600",
          lineHeight: "18px",
          alignContent: "center",
        }}
      >
        3:15
      </div>
      <div
        className="col-sm-10"
        style={{ fontSize: "11px", textAlign: "left" }}
      >
        <span
          style={{
            fontFamily: "Poppins",
            fontWeight: "600",
            lineHeight: "15px",
            textAlign: "left",
          }}
        >
          Mini Soman
        </span>
        <span
          style={{
            fontFamily: "Poppins",
            fontWeight: "400",
            lineHeight: "15px",
            textAlign: "left",
          }}
        >
          ; Mean stack developer; 4th phase interview
        </span>
        <span
          style={{
            fontFamily: "Poppins",
            fontWeight: "600",
            lineHeight: "15px",
            textAlign: "left",
          }}
        >
          &nbsp; | 3:15 - 3:45
        </span>
      </div>
    </div>
  );
}

export default GreenMeeting;
