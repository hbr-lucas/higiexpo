import React from "react";

function Profile({ data, modifier }) {
  const fontStyle = {
    fontFamily: "Montserrat",
    fontWeight: "300",
    fontSize: "1.2rem",
  };

  const divStyle = {
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    marginBlock: "2rem",
  };

  const styleInput = {
    width: "80%",
    paddingTop: "0.5rem",
    paddingBottom: "0.5rem",
    paddingLeft: "0.5rem",
    border: "0.5px solid #000",
    borderRadius: "0.5rem",
  };

  const handleChange = (value, name) => {
    const values = [...data];
    values[0][`${name}`] = value;
    modifier(values);
  };

  return (
    <div
      className='profileSection'
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        ...fontStyle,
      }}
    >
      <div
        className='profileDiv'
        style={{
          width: "90%",
          height: "50%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "15px",
          boxShadow: "0px 0px 7px -5px #000000",
        }}
      >
        <div
          className='nameInput'
          style={{
            ...divStyle,
          }}
        >
          <label style={{ width: "80%", marginBottom: "0.5em" }}>Nome</label>
          <input
            className='myInput'
            type='text'
            id='name'
            name='name'
            required
            value={data[0]["name"]}
            onChange={(e) => handleChange(e.target.value, e.target.name)}
            style={{
              ...styleInput,
            }}
          />
        </div>
        <div className='emailInput' style={{ ...divStyle }}>
          <label style={{ width: "80%", marginBottom: "0.5em" }}>E-mail</label>
          <input
            className='myInput'
            type='text'
            id='email'
            name='email'
            required
            value={data[0]["email"]}
            onChange={(e) => handleChange(e.target.value, e.target.name)}
            style={{ ...styleInput }}
          />
        </div>
      </div>
    </div>
  );
}

export default Profile;
