function BlueMeeting() {
  return (
    <div
      className="row d-flex mx-auto blue-meeting"
      style={{
       
      }}
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
          }}
        >
          Mini Soman
        </span>
        <span
          style={{
            fontFamily: "Poppins",
            fontWeight: "400",
            lineHeight: "15px",
          }}
        >
          ; Mean stack developer; 4th phase interview
        </span>
        <span
          style={{
            fontFamily: "Poppins",
            fontWeight: "600",
            lineHeight: "15px",
            alignItems: "left",
          }}
        >
          &nbsp; | 3:15 - 3:45
        </span>
      </div>
    </div>
  );
}

export default BlueMeeting;
