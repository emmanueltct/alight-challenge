
const OnboardTableHeader = () => {
  return (
    <tr style={{ paddingBottom: "20px" }}>
      <td
        colSpan={2}
        className="candidate-table-job"
        style={{ color: "transparent" }}
      >
        ttt
      </td>
      <td className="candidate-table-board">Applied On</td>
      <td className="candidate-table-training" style={{ width: "170px" }}>
        Interview Round
      </td>
      <td className="candidate-table-documentation">Assigned To</td>
      <td className="candidate-table-supervisor">Score</td>
      <td
        className="candidate-table-hoverd-dot"
        style={{ color: "transparent" }}
      >
        rrr
      </td>
    </tr>
  );
};

export default OnboardTableHeader;
