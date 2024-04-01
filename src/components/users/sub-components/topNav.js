import Dropdown from "react-bootstrap/Dropdown";
const TopNav = () => {
  return (
    <div
      className="row mx-auto"
      style={{
        background: "#FFFFFF",
        height: "70px",
        alignItems: "center",
        marginBottom: "20px",
      }}
    >
      <div
        className="col-sm-5"
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          paddingRight: "70px",
        }}
      >
        <input
          placeholder={"serach"}
          style={{
            background: "#E5EDF970",
            width: "300px",
            height: "35px",
            border: "1px solid #5B5B5B21",
            borderRadius: "8px",
            boxShadow: " 0px 4px 20px 0px #5B5B5B21",
          }}
        />
      </div>
      <div
        className="col-sm-7"
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          paddingRight:"60px"
        }}
      >
        <Dropdown>
          <Dropdown.Toggle
            id="dropdown-basic"
            style={{
              background: "none",
              border: "none",
              fontFamily: "Poppins",
              fontSize: "16px",
              fontWeight: "600",
              lineHeight: "24px",
              textAlign: "left",
              color: "#071C50",
            }}
          >
            <span
              style={{
                background: "#D9D9D9",
                padding: "5%",
                backgroundImage: `url("../../profile.jfif")`,
                backgroundPosition: "center",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                borderRadius: "450%",
              }}
            >
              &nbsp; &nbsp;&nbsp;
            </span>
            &nbsp;&nbsp; Jane Doe
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
            <Dropdown.Item href="/">Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};

export default TopNav;
