import Cards from "./card";
import UpcomingSection from "./upcoming";
import Dropdown from "react-bootstrap/Dropdown";
import TableComponent from "./tableComponent";
import CandidateComponent from "./candiateComponent";
import SideBar from "./sideBar";
import { useState } from "react";
import OnboardComponent from "./onboardCompnent";
import TopNav from "../users/sub-components/topNav";

function Dashboard() {
  const [tableView, setTableView] = useState("job");

  const img = [
    "Illustrations1.png",
    "Illustrations2.png",
    "Illustrations3.png",
    "Illustrations4.png",
    "Illustrations5.png",
    "Illustrations6.png",
    "Illustrations7.png",
    "Illustrations8.png",
  ];
  const vector = "Vector10.png";

  return (
    <div
      className="containers"
      style={{
        backgroundColor: "#E5EDF9",
        width: "100%",
      }}
    >
      <div className="row">
        <div className="col-sm-1 " style={{ backgroundColor: "#082777" }}>
          <SideBar />
        </div>
        <div
          className="col-sm-11 body"
          style={{ paddingLeft: "0px", paddingRight: "0px", margin: "0px" }}
        >
          <TopNav />
          <div className="row mx-auto body-center" style={{ width: "95%" }}>
            <div className="col-sm-9">
              <div
                className="row d-flex"
                style={{
                  justifyContent: "space-between",
                  paddingBottom: "40px",
                }}
              >
                <div
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "22px",
                    fontWeight: "600",
                    lineHeight: "33px",
                    textAlign: "left",
                    width: "20%",
                  }}
                >
                  Overview
                </div>
                <div
                  className="addButton"
                  style={{
                    width: "40%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      width: "168px",
                      height: "35px",
                    }}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 0C18.6275 0 24 5.37258 24 12C24 18.6275 18.6275 24 12 24C5.37258 24 0 18.6275 0 12C0 5.37258 5.37258 0 12 0ZM12 1.5C6.20101 1.5 1.5 6.20101 1.5 12C1.5 17.799 6.20101 22.5 12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5ZM12 6C12.4142 6 12.75 6.33579 12.75 6.75V11.25H17.25C17.6642 11.25 18 11.5858 18 12C18 12.4142 17.6642 12.75 17.25 12.75H12.75V17.25C12.75 17.6642 12.4142 18 12 18C11.5858 18 11.25 17.6642 11.25 17.25V12.75H6.75C6.33579 12.75 6 12.4142 6 12C6 11.5858 6.33579 11.25 6.75 11.25H11.25V6.75C11.25 6.33579 11.5858 6 12 6Z"
                        fill="white"
                      />
                    </svg>
                    &nbsp; Add Candidate
                  </span>
                  <span
                    style={{
                      width: "120px",
                      height: "35px",
                    }}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 0C18.6275 0 24 5.37258 24 12C24 18.6275 18.6275 24 12 24C5.37258 24 0 18.6275 0 12C0 5.37258 5.37258 0 12 0ZM12 1.5C6.20101 1.5 1.5 6.20101 1.5 12C1.5 17.799 6.20101 22.5 12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5ZM12 6C12.4142 6 12.75 6.33579 12.75 6.75V11.25H17.25C17.6642 11.25 18 11.5858 18 12C18 12.4142 17.6642 12.75 17.25 12.75H12.75V17.25C12.75 17.6642 12.4142 18 12 18C11.5858 18 11.25 17.6642 11.25 17.25V12.75H6.75C6.33579 12.75 6 12.4142 6 12C6 11.5858 6.33579 11.25 6.75 11.25H11.25V6.75C11.25 6.33579 11.5858 6 12 6Z"
                        fill="white"
                      />
                    </svg>
                    &nbsp; Add Job
                  </span>
                </div>
              </div>
              <div className="row d-flex">
                <Cards
                  image={img[0]}
                  number="33"
                  text="Interview 
Scheduled"
                />
                <Cards
                  image={img[1]}
                  number="2"
                  text="Interview  Feedback
Pending"
                />
                <Cards
                  image={img[2]}
                  number="44"
                  text="Approval
Pending"
                />
                <Cards
                  image={img[3]}
                  number="13"
                  text="Offer Acceptance
Pending"
                />
                <Cards
                  image={img[4]}
                  number="17"
                  text="Documentations
Pending"
                />
                <Cards
                  image={img[5]}
                  number="3"
                  text="Training
Pending"
                />
                <Cards
                  image={img[6]}
                  number="5"
                  text="Supervisor Allocation
Pending"
                />
                <Cards
                  image={img[7]}
                  number="56"
                  text="Project Allocation
Pending"
                />
              </div>
              <div className="row d-flex  align-items-center ">
                <div
                  className="col-sm-12"
                  style={{
                    color: "#071C50",
                    fontSize: "20px",
                    fontWeight: "600",
                    textAlign: "left",
                    marginBottom: "20px",
                  }}
                >
                  Require Attention
                </div>
                <div
                  className="col-sm-12"
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "14px",
                    fontWeight: "400",
                    lineHeight: "24px",
                    textAlign: "left",
                    opacity: "0.5px",
                    display: "flex",
                    gap: "30px",
                    marginBottom: "10px",
                    cursor: "pointer",
                  }}
                >
                  <span
                    className={tableView === "job" ? "active" : "desactive"}
                    onClick={() => setTableView("job")}
                  >
                    Job
                    {tableView === "job" && (
                      <span className="under_line transition">l</span>
                    )}
                  </span>

                  <span
                    className={
                      tableView === "candidate" ? "active" : "desactive"
                    }
                    onClick={() => setTableView("candidate")}
                  >
                    Candidates
                    {tableView === "candidate" && (
                      <span
                        className="under_line transition"
                        style={{ width: "75px" }}
                      >
                        l
                      </span>
                    )}
                  </span>
                  <span
                    className={tableView === "board" ? "active" : "desactive"}
                    onClick={() => setTableView("board")}
                  >
                    Onboardings
                    {tableView === "board" && (
                      <span
                        className="under_line transition"
                        style={{ width: "75px" }}
                      >
                        l
                      </span>
                    )}
                  </span>
                </div>
                {tableView === "job" && <TableComponent />}
                {tableView === "candidate" && <CandidateComponent />}
                {tableView === "board" && <OnboardComponent />}
              </div>
            </div>
            <div className="col-sm-3">
              <div class="row">
                <UpcomingSection />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
