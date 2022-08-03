import React from "react";
import logo from "../assets/logo_medik.png";

function Sent({ data }) {
  return (
    <>
      <div
        className='mainPage'
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50%",
        }}
      >
        <img src={logo} alt='logo' />
      </div>
      <h2
        style={{
          fontFamily: "Montserrat",
          paddingLeft: "0.5em",
          marginTop: "-0.5em",
          marginBottom: "2em",
        }}
      >
        Obrigado por participar!
      </h2>
      <div className='relatory' style={{ height: "50%" }}>
        <div style={{ paddingInline: "0.5em", fontFamily: "Montserrat" }}>
          <h3>O relatório irá para o seu e-mail</h3>
          <h4>{data[0].email}</h4>
          <h4>Infos:</h4>
          <p>Nome: {data[0].name}</p>
          <p>Email: {data[0].email}</p>
          <p>Gênero: {data[0].gender}</p>
          <p>Altura: {data[0].height} cm</p>
          <p>Peso: {data[0].weight} kg</p>
          <p>Circunferência Abdominal: {data[0].circumference} cm</p>
        </div>
      </div>
    </>
  );
}

export default Sent;
