import { useState } from "react";

const TableRow = (props) => {


const [rowHover,setRowHover]=useState(false)

  const ImageStyle = {
    height: "25px",
    width: "25px",
    marginRight:"10px"
  };

  const BigSpan = {
    fontFamily: "Poppins",
    fontSize: "12px",
    fontWeight: "600",
    lineHeight:"24px",
    paddingBottom: "2px",
    display: "flex",
  };

  const SmallSpan = {
    fontSize: "12px",
    fontWeight: "300",
    display: "flex",
  };


  return (
    <tr
      
      style={{ width: "100%",marginRight:"0px" }}
      onMouseEnter={()=>setRowHover(true)}
      onMouseLeave={()=>setRowHover(false)}
    >
      <td className="table-profile" style={ImageStyle}>
        <img
          style={{ width: "20px", height: "20px" }}
          src={"../../" + props.img}
        />
     </td>
      <td className="table-job">
        <span style={BigSpan}>{props.project}</span>
        <span style={SmallSpan}>{props.pdays}</span>
     </td>
      <td className="table-position-left" style={{ color: "#071C50" }}>
        {props.position}
     </td>
      <td className="table-applications">{props.application}</td>
      <td className="table-interviewed">{props.interview}</td>
      <td className="table-rejeted">{props.rejected}</td>
      <td className="table-feedeback-pending">{props.pending}</td>
      <td className="table-oferred">{props.offered}</td>
      <td className="table-hoverd-dot">
        {rowHover ? (
          <img style={{ width: "30px",height:"35px" }} src="../../three-dot.png" />
        ) : (
          ""
        )}
     </td>
   </tr>
  );
};

export default TableRow;
