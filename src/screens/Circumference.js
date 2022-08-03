import React from "react";
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";

import { ReactComponent as Circumference1M } from "../assets/SVG/SVG_Circumference/man/favMan_Circumference_1.svg";
import { ReactComponent as Circumference2M } from "../assets/SVG/SVG_Circumference/man/favMan_Circumference_2.svg";
import { ReactComponent as Circumference3M } from "../assets/SVG/SVG_Circumference/man/favMan_Circumference_3.svg";
import { ReactComponent as Circumference4M } from "../assets/SVG/SVG_Circumference/man/favMan_Circumference_4.svg";
import { ReactComponent as Circumference5M } from "../assets/SVG/SVG_Circumference/man/favMan_Circumference_5.svg";
import { ReactComponent as Circumference6M } from "../assets/SVG/SVG_Circumference/man/favMan_Circumference_6.svg";
import { ReactComponent as Circumference7M } from "../assets/SVG/SVG_Circumference/man/favMan_Circumference_7.svg";
import { ReactComponent as Circumference8M } from "../assets/SVG/SVG_Circumference/man/favMan_Circumference_8.svg";
import { ReactComponent as Circumference9M } from "../assets/SVG/SVG_Circumference/man/favMan_Circumference_9.svg";

import { ReactComponent as Circumference1F } from "../assets/SVG/SVG_Circumference/woman/favWoman_Circumference_1.svg";
import { ReactComponent as Circumference2F } from "../assets/SVG/SVG_Circumference/woman/favWoman_Circumference_2.svg";
import { ReactComponent as Circumference3F } from "../assets/SVG/SVG_Circumference/woman/favWoman_Circumference_3.svg";
import { ReactComponent as Circumference4F } from "../assets/SVG/SVG_Circumference/woman/favWoman_Circumference_4.svg";
import { ReactComponent as Circumference5F } from "../assets/SVG/SVG_Circumference/woman/favWoman_Circumference_5.svg";
import { ReactComponent as Circumference6F } from "../assets/SVG/SVG_Circumference/woman/favWoman_Circumference_6.svg";
import { ReactComponent as Circumference7F } from "../assets/SVG/SVG_Circumference/woman/favWoman_Circumference_7.svg";
import { ReactComponent as Circumference8F } from "../assets/SVG/SVG_Circumference/woman/favWoman_Circumference_8.svg";
import { ReactComponent as Circumference9F } from "../assets/SVG/SVG_Circumference/woman/favWoman_Circumference_9.svg";

function Circumference({ data, modifier }) {
  const handleChange = (value, name) => {
    const values = [...data];
    values[0][`${name}`] = value;
    modifier(values);
  };

  return (
    <div
      className='myFormInput'
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "end",
        alignItems: "center",
        height: "100%",
      }}
    >
      <p
        style={{
          margin: 0,
          padding: 0,
          fontSize: "3rem",
          fontFamily: "Montserrat",
          fontWeight: "800",
          height: "10%",
        }}
      >
        {data[0].circumference}
      </p>
      <div
        className='characterCircumference'
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80%",
          width: "35%",
        }}
      >
        <div
          className='displayCircumference'
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "100%",
            height: "100%",
          }}
        >
          {data[0].circumference < 35 ? (
            <Circumference1M />
          ) : data[0].circumference < 45 ? (
            <Circumference2M />
          ) : data[0].circumference < 55 ? (
            <Circumference3M />
          ) : data[0].circumference < 65 ? (
            <Circumference4M />
          ) : data[0].circumference < 75 ? (
            <Circumference5M />
          ) : data[0].circumference < 85 ? (
            <Circumference6M />
          ) : data[0].circumference < 95 ? (
            <Circumference7M />
          ) : data[0].circumference < 105 ? (
            <Circumference8M />
          ) : (
            <Circumference9M />
          )}
        </div>
      </div>
      <div
        className='ruler'
        style={{
          display: "flex",
          justifyContent: "center",
          marginBlock: "0",
          height: "10%",
        }}
      >
        <Nouislider
          start={[data[0].circumference]}
          pips={{
            mode: "values",
            values: [25, 35, 45, 55, 65, 75, 85, 95, 105, 115],
            density: 2,
          }}
          clickablePips
          range={{
            min: 25,
            max: 115,
          }}
          onSlide={(e) => {
            handleChange(e[0], "circumference");
          }}
          orientation='horizontal'
          direction='ltr'
          style={{ width: "80vw" }}
        />
      </div>
    </div>
  );
}

export default Circumference;
