import React from "react";
import Female from "../assets/Female";
import Male from "../assets/Male";
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";

function Gender({ data, modifier }) {
  const fontStyle = {
    fontFamily: "Montserrat",
    fontWeight: "300",
    fontSize: "1.2rem",
  };

  const handleChange = (value, name) => {
    const values = [...data];
    values[0][`${name}`] = value;
    modifier(values);
  };
  return (
    <div
      className='genderDiv'
      style={{
        display: "flex",
        justifyContent: "end",
        flexDirection: "column",
        alignItems: "center",
        height: "100%",
        ...fontStyle,
      }}
    >
      <div
        className='panelForSelected'
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "10%",
          width: "50%",
          marginBottom: "3em",
        }}
      >
        <Nouislider
          start={[data[0].gender === "male" ? 0 : 1]}
          clickablePips
          range={{
            min: [0, 1],
            max: 1,
          }}
          onSlide={(e) => {
            handleChange(e[0] === "0.00" ? "male" : "female", "gender");
          }}
          orientation='horizontal'
          style={{ width: "100%" }}
        />
      </div>
      <div
        className='stickersDiv'
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "end",
          height: "70%",
          width: "80%",
          marginBottom: "3em",
        }}
      >
        <div
          className='man-gender'
          style={{
            width: data[0].gender === "male" ? "50%" : "45%",
            transition: "1.5s cubic-bezier(0.075, 0.82, 0.165, 1)",
          }}
        >
          <button
            onClick={(e) => {
              e.preventDefault();
              handleChange("male", "gender");
            }}
            style={{
              /* backgroundColor: "#c5eafc", */
              width: "100%",
              background: "rgba(50, 156, 192, 0.3)",
              border: "0.01rem solid #000",
              boxShadow: "0px 0px 8px -5px #000000",
              borderRadius: "20px",
              padding: "1rem",
            }}
          >
            <Male />
          </button>
        </div>
        <div
          className='woman-gender'
          style={{
            width: data[0].gender === "female" ? "45%" : "41%",
            transition: "1.5s cubic-bezier(0.075, 0.82, 0.165, 1)",
          }}
        >
          <button
            onClick={(e) => {
              e.preventDefault();
              handleChange("female", "gender");
            }}
            style={{
              /* backgroundColor: "#fcc5db", */
              width: "100%",
              background: "rgba(247, 193, 180, 0.3)",
              border: "0.01rem solid #000",
              boxShadow: "0px 0px 8px -5px #000000",
              borderRadius: "20px",
              padding: "1rem",
            }}
          >
            <Female />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Gender;
