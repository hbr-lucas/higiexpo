import React from "react";
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";

import { ReactComponent as Height1M } from "../assets/SVG/SVG_Height/man/favMan_Height_1.svg";
import { ReactComponent as Height2M } from "../assets/SVG/SVG_Height/man/favMan_Height_2.svg";
import { ReactComponent as Height3M } from "../assets/SVG/SVG_Height/man/favMan_Height_3.svg";
import { ReactComponent as Height4M } from "../assets/SVG/SVG_Height/man/favMan_Height_4.svg";
import { ReactComponent as Height5M } from "../assets/SVG/SVG_Height/man/favMan_Height_5.svg";

import { ReactComponent as Height1F } from "../assets/SVG/SVG_Height/woman/favWoman_Height_1.svg";
import { ReactComponent as Height2F } from "../assets/SVG/SVG_Height/woman/favWoman_Height_2.svg";
import { ReactComponent as Height3F } from "../assets/SVG/SVG_Height/woman/favWoman_Height_3.svg";
import { ReactComponent as Height4F } from "../assets/SVG/SVG_Height/woman/favWoman_Height_4.svg";
import { ReactComponent as Height5F } from "../assets/SVG/SVG_Height/woman/favWoman_Height_5.svg";
import nouislider from "nouislider";

function Height({ data, modifier }) {
  const characterStyle = {
    width: `${data[0].height - 30}px`,
    transition: "all 0.4s",
  };
  const handleChange = (value, name) => {
    const values = [...data];
    values[0][`${name}`] = value;
    modifier(values);
  };

  return (
    <div className='myFormInput' style={{ position: "relative" }}>
      <div
        className='numberDisplay'
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "end",
          opacity: "0.2",
          position: "absolute",
          bottom: 0,
          left: "0.5rem",
          zIndex: "1",
        }}
      >
        <p
          style={{
            margin: 0,
            padding: 0,
            fontSize: "9.5rem",
            fontFamily: "Montserrat",
            fontWeight: "800",
          }}
        >
          {Math.round(data[0].height)}
        </p>
      </div>
      <div
        className='characterHeight'
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginLeft: "-75px",
          marginBottom: "20px",
          marginTop: "3rem",
        }}
      >
        <div
          className='displayHeight'
          style={{
            position: "absolute",
            bottom: "0",
            zIndex: "5",
          }}
        >
          {data[0].height < 90 ? (
            <Height1M style={{ ...characterStyle }} />
          ) : data[0].height < 120 ? (
            <Height2M style={{ ...characterStyle }} />
          ) : data[0].height < 150 ? (
            <Height3M style={{ ...characterStyle }} />
          ) : data[0].height < 180 ? (
            <Height4M style={{ ...characterStyle }} />
          ) : (
            <Height5M style={{ ...characterStyle }} />
          )}
        </div>
      </div>
      <div
        className='ruler'
        style={{
          display: "flex",
          justifyContent: "end",
          marginRight: "4rem",
          height: "64vh",
        }}
      >
        <div className='slider-pips' id='slider-pips'></div>
        <Nouislider
          start={[data[0].height]}
          pips={{
            mode: "values",
            values: [
              70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200,
              210,
            ],
            density: 1,
          }}
          clickablePips
          range={{
            min: 60,
            max: 210,
          }}
          onSlide={(e) => {
            handleChange(e[0], "height");
          }}
          orientation='vertical'
          direction='rtl'
          style={{ height: "100%" }}
        />
      </div>
    </div>
  );
}

export default Height;
