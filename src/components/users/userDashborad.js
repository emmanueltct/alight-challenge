import ProfileSection from "./sub-components/profile-section";
import FileDownload from "./sub-components/file-download";
import ApplicationComponent from "./sub-components/application";
import { useState } from "react";

import UserMark from "./sub-components/userMark";
import { Allow, BackAllow } from "./check-svg/checks";
import TopNav from "./sub-components/topNav";
import SideBarCandidate from "./sub-components/sideBarCandidate";

const UserDashboard = () => {
  const [tabView, setTabView] = useState("general");

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
          <SideBarCandidate />
        </div>
        <div
          className="col-sm-11 body"
          style={{ paddingLeft: "0px", paddingRight: "0px", margin: "0px" }}
        >
          <TopNav />
          <div className="row d-flex mx-auto current-tab">
            <div className="col-sm-6 current-tab-left">
              <div className="first-title">Candidates</div>
              <div>
                <Allow />
              </div>
              <div className="second-title">John Doe</div>
            </div>
            <div className=" col-sm-6 current-tab-right">
              <BackAllow />
            </div>
          </div>
          <div className="row mx-auto profile-section">
            <ProfileSection />
          </div>

          <div className="row mx-auto tab-sections">
            <div className="col-sm-12">
              <div className="tab-headers">
                <div
                  className={tabView === "general" ? "tabs active-tab" : "tabs"}
                  onClick={() => setTabView("general")}
                >
                  General
                  {tabView === "general" && (
                    <span
                      className="under_line transition"
                      style={{ width: "40px" }}
                    >
                      l
                    </span>
                  )}
                </div>
                <div
                  className={tabView === "eval" ? "tabs active-tab" : "tabs"}
                  onClick={() => setTabView("eval")}
                >
                  Evaluations
                  {tabView === "eval" && (
                    <span
                      className="under_line transition"
                      style={{ width: "40px" }}
                    >
                      l
                    </span>
                  )}
                </div>
                <div
                  className={
                    tabView === "experience" ? "tabs active-tab" : "tabs"
                  }
                  onClick={() => setTabView("experience")}
                >
                  Experience
                  {tabView === "experience" && (
                    <span
                      className="under_line transition"
                      style={{ width: "40px" }}
                    >
                      l
                    </span>
                  )}
                </div>
                <div
                  className={
                    tabView === "education" ? "tabs active-tab" : "tabs"
                  }
                  onClick={() => setTabView("education")}
                >
                  Education{" "}
                  {tabView === "education" && (
                    <span
                      className="under_line transition"
                      style={{ width: "40px" }}
                    >
                      l
                    </span>
                  )}
                </div>
                <div
                  className={tabView === "event" ? "tabs active-tab" : "tabs"}
                  onClick={() => setTabView("event")}
                >
                  Events{" "}
                  {tabView === "event" && (
                    <span
                      className="under_line transition"
                      style={{ width: "40px" }}
                    >
                      l
                    </span>
                  )}
                </div>
                <div
                  className={
                    tabView === "document" ? "tabs active-tab" : "tabs"
                  }
                  onClick={() => setTabView("document")}
                >
                  Documents{" "}
                  {tabView === "document" && (
                    <span
                      className="under_line transition"
                      style={{ width: "40px" }}
                    >
                      l
                    </span>
                  )}
                </div>
                <div
                  className={tabView === "message" ? "tabs active-tab" : "tabs"}
                  onClick={() => setTabView("message")}
                >
                  Messages{" "}
                  {tabView === "message" && (
                    <span
                      className="under_line transition"
                      style={{ width: "40px" }}
                    >
                      l
                    </span>
                  )}
                </div>
              </div>
            </div>
            <hr
              style={{
                background: "#E5EDF9",
                border: "1px solid ",
                marginTop: "10px",
                opacity: "0.2",
              }}
            />

            <div className="row">
              <div className="col-sm-9">
                <FileDownload />
                <div className="file-view-all">View All</div>
                <ApplicationComponent />
              </div>
              <div className="col-sm-3 job-marks">
                <UserMark />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserDashboard;
