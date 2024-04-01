import { useState } from "react";

function Cards(props) {
  const smallCardValue = {
    width: "55px",
    height: "60px",
    borderRadius: "40%",
    border: "1px solid grey",
    position: "absolute",
    top: "-10px",
    left: "-10px",
    color: "#FFFFFF",
    background: "#4B93E7",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "1s",
    fontSize: "18px",
  };

  const initValue = {
    width: "35px",
    height: "40px",
    borderRadius: "10px",
    border: "1px solid grey",
    position: "absolute",
    top: "-10px",
    left: "-10px",
    backgroundColor: "#F3F8FF",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "1s",
  };

 
  const TextSpan = {
    fontFamily: "Poppins",
    fontSize: "10px",
    fontWeight: "400",
    position: "absolute",
    textAlign: "left",
    color: "#000000",
    width: "60%",
    height: "48px",
    top: "80px",
    left: "15px",
    transition: "1s"
  };

  
  const TextSpanHover = {
    fontSize: "12px",
    fontWeight: "600",
    position: "absolute",
    textAlign: "left",
    color: "#000000",
    width: "60%",
    height: "48px",
    top: "80px",
    left: "15px",
    transition:"1s"
  };
  const [cardSize, setCardSize] = useState(initValue);
  const [textStyle,setTextStyle]=useState(TextSpan);
  const [bigCard, setBigCard] = useState(false);


  const ImagaSpan = {
    position: "absolute",
    width: "70px",
    height: "55px",
    top: "15px",
    right: "15px",
  };


  const onHover = () => {
    setCardSize(smallCardValue);
    setBigCard(true);
    setTextStyle(TextSpanHover);
  };
    const unHover = () => {
      setCardSize(initValue);
      setBigCard(false);
       setTextStyle(TextSpan);
    };
  const VectorSpan = {
    position: "absolute",
    width: "20px",
    height: "10px",
    top: "90px",
    right: "15px",
    stroke:"black" ,
  
  };
  return (
    <div
      className="col-sm-3"
      style={{
        height: "188px",
      }}
      onMouseEnter={onHover}
      onMouseLeave={unHover}
    >
      <div
        className="card"
        style={{ height: "120px", backgroundColor: "#F3F8FF" }}
      >
        <div style={cardSize}>{props.number}</div>
        <img style={ImagaSpan} src={"../../" + props.image} alt="" />

        <span style={textStyle}>{props.text}</span>
        {bigCard && (
          <div
            style={{
              width: "100%",
              height: "120px",
              background: "#A0DBF457",
              color: "transparent",
              transition: "1s",
            }}
          >
            <svg
              style={VectorSpan}
              width="15"
              height="19"
              viewBox="0 0 11 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0.5 0.5L9.5 9.5L0.5 18.5" />
            </svg>
            <svg
              style={VectorSpan}
              width="15"
              height="19"
              viewBox="0 0 11 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0.5 0.5L9.5 9.5L0.5 18.5" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cards;
