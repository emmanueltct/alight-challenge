import BlueMeeting from "./blueMeeting";
import GreenMeeting from "./greenMeeting";
function UpcomingSection() {
  return (
    <div
      className="col-sm-12"
      style={{
        top: "-20px",
        borderRadius: "4px 0px 0px 0px",
        opacity: "0px",
        background: "#F3F8FF",
      }}
    >
      <div className="col-sm-12" style={{ textAlign: "left",paddingBottom:"5px" }}>
        <span
          style={{
            fontFamily: "Poppins",
            fontSize: "16px",
            fontWeight: "600",
            lineHeight: "24px",
            textAlign: "left",
          }}
        >
          Upcoming Meetings
        </span>
        &nbsp;&nbsp;
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 0C18.6275 0 24 5.37258 24 12C24 18.6275 18.6275 24 12 24C5.37258 24 0 18.6275 0 12C0 5.37258 5.37258 0 12 0ZM12 1.5C6.20101 1.5 1.5 6.20101 1.5 12C1.5 17.799 6.20101 22.5 12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5ZM12 6C12.4142 6 12.75 6.33579 12.75 6.75V11.25H17.25C17.6642 11.25 18 11.5858 18 12C18 12.4142 17.6642 12.75 17.25 12.75H12.75V17.25C12.75 17.6642 12.4142 18 12 18C11.5858 18 11.25 17.6642 11.25 17.25V12.75H6.75C6.33579 12.75 6 12.4142 6 12C6 11.5858 6.33579 11.25 6.75 11.25H11.25V6.75C11.25 6.33579 11.5858 6 12 6Z"
            fill="#4B93E7"
          />
        </svg>
      </div>
      <div className="col-sm-12">
        <div
          className="col-sm-12"
          style={{
            color: "#071C50",
            fontFamily: "Poppins",
            fontSize: "12px",
            fontWeight: "600",
            lineHeight: "18px",
            textAlign: "left",
            paddingTop: "3px",
            paddingBottom: "3px",
          }}
        >
          Today
        </div>
        <BlueMeeting />
        <BlueMeeting />
        <BlueMeeting />
        <GreenMeeting />
        <div
          className="col-sm-12"
          style={{
            color: "#071C50",
            fontFamily: "Poppins",
            fontSize: "12px",
            fontWeight: "600",
            lineHeight: "18px",
            textAlign: "left",
            paddingTop: "3px",
            paddingBottom: "3px",
          }}
        >
          Tomorrow
        </div>
        <BlueMeeting />
        <GreenMeeting />
        <BlueMeeting />
        <BlueMeeting />
        <div
          className="col-sm-12"
          style={{
            color: "#071C50",
            fontFamily: "Poppins",
            fontSize: "12px",
            fontWeight: "600",
            lineHeight: "18px",
            textAlign: "left",
            paddingTop: "3px",
            paddingBottom: "3px",
          }}
        >
          This Week
        </div>
        <BlueMeeting />
        <GreenMeeting />
        <BlueMeeting />
        <BlueMeeting />
        <BlueMeeting />
        <GreenMeeting />
        <BlueMeeting />
        <BlueMeeting />
        <GreenMeeting />
        <GreenMeeting />
        <GreenMeeting />
        <BlueMeeting />
        <BlueMeeting />
        <GreenMeeting />
      </div>
    </div>
  );
}

export default UpcomingSection;
