import TableRow from "./tableRow";
import TableHeader from "./tableHeader";
function TableComponent() {
  return (
    <div className="table-responsive">
      <table
        className="table table-hover  transition"
        style={{
          flexDirection: "column",
          width: "98%",
          background: "red",
          marginTop: "10px",
          paddingTop: "10px",
          paddingRight: "10px",
          marginRight: "0px",
          overflow: "auto",
        }}
      >
        <thead>
          <TableHeader />
        </thead>
        <tbody>
          <TableRow
            img="Group2509.png"
            project="Senior Data Analyst"
            pdays="100 days ago"
            position="3"
            application="123"
            interview="40"
            rejected="33"
            pending="7"
            offered="2"
          />
          <TableRow
            img="Group2509.png"
            project="Junior Data Analyst"
            pdays="78 days ago"
            position="7"
            application="567"
            interview="22"
            rejected="20"
            pending="2"
            offered="4"
          />
          <TableRow
            img="Group2509.png"
            project="Product Designer"
            pdays="56 days ago"
            position="2"
            application="201"
            interview="32"
            rejected="18"
            pending="14"
            offered="0"
          />
          <TableRow
            img="Group2509.png"
            project="Product Designer"
            pdays="56 days ago"
            position="2"
            application="201"
            interview="32"
            rejected="18"
            pending="14"
            offered="0"
          />
          <TableRow
            img="Group2509.png"
            project="Java Developer"
            pdays="46 days ago"
            position="5"
            application="231"
            interview="23"
            rejected="10"
            pending="13"
            offered="3"
          />
          
        </tbody>
      </table>
    </div>
  );
}

export default TableComponent;
