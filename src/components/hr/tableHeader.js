const TableHeader = () => {
  const ImageStyle = {
    height: "25px",
    width: "25px",
  };

  
  return (
    <tr
      style={{ paddingBottom: "20px" }}
    >
      <td colSpan={2}  className="table-job" style={{ color: "transparent" }}>
        ttt
      </td>
      <td  className="table-position-left">Positions Left</td >
      <td  className="table-applications">Applications</td >
      <td  className="table-interviewed">Interviewed</td >
      <td  className="table-rejeted">Rejected</td >
      <td  className="table-feedeback-pending">Feedback Pending</td >
      <td  className="table-oferred">Offered</td >
      <td  className="table-hoverd-dot"></td >
    </tr>
  );
};

export default TableHeader;
