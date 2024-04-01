import { useState } from "react";

const OnboardTableRow = (props) => {
  const [rowHover, setRowHover] = useState(false);
  const BigSpan = {
    fontFamily: "Poppins",
    fontWeight: "600",
    paddingBottom: "1px",
    display: "flex",
  };

  const SmallSpan = {
    fontFamily: "Poppins",
    fontSize: "12px",
    fontWeight: "300",
    display: "flex",
  };
  return (
    <tr
      onMouseEnter={() => setRowHover(true)}
      onMouseLeave={() => setRowHover(false)}
    >
      <td className="table-profile" style={{ width: "25px" }}>
        <img
          style={{ width: "20px", height: "20px" }}
          src={"../../" + props.img}
        />
      </td>
      <td className="candidate-table-job" style={{ background: "red" }}>
        <span style={BigSpan}>{props.name}</span>
        <span style={SmallSpan}>{props.pdays}</span>
      </td>
      <td className="candidate-table-board" style={{ color: "#071C50" }}>
        {props.board}
      </td>
      <td className="candidate-table-training" style={{ width: "170px" }}>
        {props.training}
      </td>

      <td className="candidate-table-supervisor">
        <div
          className={
            props.allocated == "true"
              ? " d-flex mx-auto allocated"
              : "d-flex mx-auto not-allocated"
          }
          style={{ justifyContent: "space-around" }}
        >
          {props.allocated == "true" ? (
            <div
              style={{
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                overflow: "hidden",
              }}
            >
              <img style={{ width: "100%" }} src={"../../" + props.profile} />
            </div>
          ) : (
            ""
          )}
          <div>
            <div>
              {props.allocated == "true" ? props.supervisor : "Not Allocated"}
            </div>
          </div>
        </div>
      </td>
      <td className="candidate-table-documentation">{props.documentation}</td>
      <td className="candidate-table-hoverd-dot">
        {rowHover ? (
          <img
            style={{ width: "30px", height: "35px" }}
            src="../../three-dot.png"
          />
        ) : (
          ""
        )}
      </td>
    </tr>
  );
};

export default OnboardTableRow;
