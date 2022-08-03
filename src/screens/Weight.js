import React, { useState } from "react";
import Roundy from "roundy";

function Weight({ data, modifier }) {
  const [value, setValue] = useState(30);
  const handleChange = (value, name) => {
    const values = [...data];
    values[0][`${name}`] = value;
    modifier(values);
  };

  return (
    <div
      className='weightSection'
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className='weightScale'>
        <div
          className='roundy'
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Roundy
            value={70}
            min={40}
            max={150}
            stepSize={1}
            radius={150}
            arcSize={270}
            rotationOffset={-45}
            color='#7c0bd9'
            onChange={(value) => handleChange(value, "weight")}
            allowClick
            style={{ marginTop: "15vh" }}
          />
        </div>
      </div>

      <div
        className='scaleDisplay'
        style={{
          marginTop: "-8em",
          border: "0.5px solid #000",
          height: "5em",
          width: "7em",
          paddingInline: "0.5rem",
          borderRadius: "150px 150px 150px 150px",
          backgroundColor: "#fcfcfc",
        }}
      >
        <div
          className='displayNumbers'
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p
            style={{
              fontWeight: "400",
              fontFamily: "Montserrat",
            }}
          >
            {data[0].weight - 1}
          </p>
          <p
            style={{
              fontWeight: "800",
              fontFamily: "Montserrat",
              fontSize: "1.5rem",
            }}
          >
            {data[0].weight}
          </p>
          <p
            style={{
              fontWeight: "400",
              fontFamily: "Montserrat",
            }}
          >
            {data[0].weight + 1}
          </p>
        </div>
        <div
          className='triangle'
          style={{
            position: "relative",
            right: "2.5em",
            bottom: "4.9em",
            transform: "rotate(180deg)",
          }}
        >
          <div
            className='arrow-up'
            style={{
              width: 0,
              height: 0,
              borderLeft: "15px solid transparent",
              borderRight: "15px solid transparent",
              borderBottom: "15px solid black",
            }}
          />
        </div>
      </div>
      <div
        className='kgDisplay'
        style={{
          display: "flex",
          width: "100vw",
          justifyContent: "end",
          alignItems: "end",
          opacity: "0.2",
          zIndex: "1",
        }}
      >
        <p
          style={{
            margin: 0,
            padding: 0,
            fontSize: "9.5rem",
            fontFamily: "Montserrat",
            transition: "all .4s",
            fontWeight:
              data[0].weight < 53.75
                ? "100"
                : data[0].weight < 67.5
                ? "200"
                : data[0].weight < 81.25
                ? "300"
                : data[0].weight < 95
                ? "400"
                : data[0].weight < 108.75
                ? "500"
                : data[0].weight < 122.5
                ? "600"
                : data[0].weight < 136.25
                ? "700"
                : "800",
          }}
        >
          KG
        </p>
      </div>
    </div>
  );
}

export default Weight;
