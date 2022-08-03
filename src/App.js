import { useState, useRef, useEffect } from "react";
import anime from "animejs";
import "./App.css";
import Height from "./screens/Height";
import Weight from "./screens/Weight";
import Circumference from "./screens/Circumference";
import Profile from "./screens/Profile";
import Gender from "./screens/Gender";
import Home from "./screens/Home";
import Sent from "./screens/Sent";
import ButtonWithArrow from "./assets/ButtonWithArrow";
import { ReactComponent as StartArrow } from "../src/assets/SVG/startarrow.svg";

const ticks = Array.from(Array(8));

function App() {
  const [playing, setPlaying] = useState(true);
  const animation = useRef(null);

  useEffect(() => {
    animation.current = anime({
      targets: ".square",
      translateX: 270,
      direction: "alternate",
      delay: anime.stagger(300),
      loop: true,
      easing: "spring(1, 80, 10, 0)",
    });
    console.log("im here");
  }, []);

  const [userData, setuserData] = useState([
    {
      name: "",
      circumference: 50,
      weight: 70,
      height: 145,
      gender: "",
      email: "",
    },
  ]);

  const [homeScreen, setHomeScreen] = useState(true);
  const [profileScreen, setProfileScreen] = useState(false);
  const [genderScreen, setGenderScreen] = useState(false);
  const [heightScreen, setHeightScreen] = useState(false);
  const [weightScreen, setWeightScreen] = useState(false);
  const [circumferenceScreen, setCircumferenceScreen] = useState(false);
  const [sentScreen, setSentScreen] = useState(false);
  const pages = {
    home: {
      previous: "home",
      next: "profile",
      activator: function activator() {
        setHomeScreen(true);
      },
      deactivator: function deactivator() {
        setHomeScreen(false);
      },
      label: "Início",
      percentage: 0,
    },
    profile: {
      previous: "home",
      next: "gender",
      activator: function activator() {
        setProfileScreen(true);
      },
      deactivator: function deactivator() {
        setProfileScreen(false);
      },
      label: "Perfil",
      percentage: 20,
    },
    gender: {
      previous: "profile",
      next: "height",
      activator: function activator() {
        setGenderScreen(true);
      },
      deactivator: function deactivator() {
        setGenderScreen(false);
      },
      label: "Gênero",
      percentage: 40,
    },
    height: {
      previous: "gender",
      next: "weight",
      activator: function activator() {
        setHeightScreen(true);
      },
      deactivator: function deactivator() {
        setHeightScreen(false);
      },
      label: "Altura",
      percentage: 60,
    },
    weight: {
      previous: "height",
      next: "circumference",
      activator: function activator() {
        setWeightScreen(true);
      },
      deactivator: function deactivator() {
        setWeightScreen(false);
      },
      label: "Peso",
      percentage: 80,
    },
    circumference: {
      previous: "weight",
      next: "sent",
      activator: function activator() {
        setCircumferenceScreen(true);
      },
      deactivator: function deactivator() {
        setCircumferenceScreen(false);
      },
      label: "Circunferência",
      percentage: 100,
    },
    sent: {
      previous: "circumference",
      next: "sent",
      activator: function activator() {
        setSentScreen(true);
      },
      deactivator: function deactivator() {
        setSentScreen(false);
      },
      label: "Final",
      percentage: 0,
    },
  };
  const [currentPage, setCurrentPage] = useState("home");

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleChange = (value, name) => {
    const values = [...userData];
    values[0][`${name}`] = value;
    setuserData(values);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateEmail(userData[0].email)) {
      console.log("Email validado");
      console.log(userData);
      setSentScreen(true);
    } else {
      alert("Email Inválido");
      pages[`${currentPage}`].deactivator();
      setCurrentPage("profile");
      pages["profile"].activator();
    }
  };

  const goToPrevious = (currentPage) => {
    pages[`${currentPage}`].deactivator();
    const previousPage = pages[`${currentPage}`].previous;
    setCurrentPage(previousPage);
    pages[`${previousPage}`].activator();
  };

  const goToNext = (currentPage) => {
    pages[`${currentPage}`].deactivator();
    const nextPage = pages[`${currentPage}`].next;
    setCurrentPage(nextPage);
    pages[`${nextPage}`].activator();
  };

  useEffect(() => {
    const pageChange = () => {
      console.log("currentPage:", currentPage);
    };
    pageChange();
  }, [pages]);

  return (
    <div style={{ height: "100%", width: "100%" }}>
      {console.log({
        currentPage,
        userData,
      })}
      <div className='appHeader'>
        <div className='progressBar'>
          <div
            style={{
              width: `${pages[currentPage].percentage}%`,
              height: "5px",
              background: "#4F048C",
              transition: "1s cubic-bezier(0.075, 0.82, 0.165, 1)",
            }}
          ></div>
          {!["home", "submit", "sent"].includes(currentPage) && (
            <div
              className='progress-container'
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingInline: "1.5rem",
              }}
            >
              <div
                className='progressProfile'
                id='profile'
                style={{
                  textAlign: "center",
                  opacity: currentPage === "profile" ? "1" : "0.2",
                  transition: "1s cubic-bezier(0.075, 0.82, 0.165, 1)",
                }}
              >
                <svg height='32' width='32'>
                  <g id='profile'>
                    <circle
                      cx='16'
                      cy='16'
                      r='12'
                      stroke='black'
                      strokeWidth={1}
                      fill={currentPage === "profile" ? "#4F048C" : "none"}
                    ></circle>
                    <text
                      x='50%'
                      y='50%'
                      textAnchor='middle'
                      stroke={currentPage === "profile" ? "#47CB1C" : "#000"}
                      strokeWidth='1.5px'
                      dy='.3em'
                      style={{
                        fontFamily: "Montserrat",
                      }}
                    >
                      1
                    </text>
                  </g>
                </svg>
                <p
                  style={{
                    margin: 0,
                    padding: 0,
                    marginTop: "-0.5rem",
                    fontWeight: currentPage === "profile" ? "800" : "",
                    fontFamily: "Montserrat",
                    color: currentPage === "profile" ? "#47CB1C" : "black",
                  }}
                >
                  Perfil
                </p>
              </div>

              <div
                className='progressGender'
                id='gender'
                style={{
                  textAlign: "center",
                  opacity: currentPage === "gender" ? "1" : "0.2",
                  transition: "1s cubic-bezier(0.075, 0.82, 0.165, 1)",
                }}
              >
                <svg height='32' width='32'>
                  <g id='gender'>
                    <circle
                      cx='16'
                      cy='16'
                      r='12'
                      stroke='black'
                      strokeWidth={1}
                      fill={currentPage === "gender" ? "#4F048C" : "none"}
                    ></circle>
                    <text
                      x='50%'
                      y='50%'
                      textAnchor='middle'
                      stroke={currentPage === "gender" ? "#47CB1C" : "#000"}
                      strokeWidth='1.5px'
                      dy='.3em'
                      style={{
                        fontFamily: "Montserrat",
                      }}
                    >
                      2
                    </text>
                  </g>
                </svg>
                <p
                  style={{
                    margin: 0,
                    padding: 0,
                    marginTop: "-0.5rem",
                    fontWeight: currentPage === "gender" ? "800" : "",
                    fontFamily: "Montserrat",
                    color: currentPage === "gender" ? "#47CB1C" : "black",
                  }}
                >
                  Gênero
                </p>
              </div>

              <div
                className='progressHeight'
                id='height'
                style={{
                  textAlign: "center",
                  opacity: currentPage === "height" ? "1" : "0.2",
                  transition: "1s cubic-bezier(0.075, 0.82, 0.165, 1)",
                }}
              >
                <svg height='32' width='32'>
                  <g id='height'>
                    <circle
                      cx='16'
                      cy='16'
                      r='12'
                      stroke='black'
                      strokeWidth={1}
                      fill={currentPage === "height" ? "#4F048C" : "none"}
                    ></circle>
                    <text
                      x='50%'
                      y='50%'
                      textAnchor='middle'
                      stroke={currentPage === "height" ? "#47CB1C" : "#000"}
                      strokeWidth='1.5px'
                      dy='.3em'
                      style={{
                        fontFamily: "Montserrat",
                      }}
                    >
                      3
                    </text>
                  </g>
                </svg>
                <p
                  style={{
                    margin: 0,
                    padding: 0,
                    marginTop: "-0.5rem",
                    fontWeight: currentPage === "height" ? "800" : "",
                    fontFamily: "Montserrat",
                    color: currentPage === "height" ? "#47CB1C" : "black",
                  }}
                >
                  Altura
                </p>
              </div>

              <div
                className='progressWeight'
                id='weight'
                style={{
                  textAlign: "center",
                  opacity: currentPage === "weight" ? "1" : "0.2",
                  transition: "1s cubic-bezier(0.075, 0.82, 0.165, 1)",
                }}
              >
                <svg height='32' width='32'>
                  <g id='weight'>
                    <circle
                      cx='16'
                      cy='16'
                      r='12'
                      stroke='black'
                      strokeWidth={1}
                      fill={currentPage === "weight" ? "#4F048C" : "none"}
                    ></circle>
                    <text
                      x='50%'
                      y='50%'
                      textAnchor='middle'
                      stroke={currentPage === "weight" ? "#47CB1C" : "#000"}
                      strokeWidth='1.5px'
                      dy='.3em'
                      style={{
                        fontFamily: "Montserrat",
                      }}
                    >
                      4
                    </text>
                  </g>
                </svg>
                <p
                  style={{
                    margin: 0,
                    padding: 0,
                    marginTop: "-0.5rem",
                    fontWeight: currentPage === "weight" ? "800" : "",
                    fontFamily: "Montserrat",
                    color: currentPage === "weight" ? "#47CB1C" : "black",
                  }}
                >
                  Peso
                </p>
              </div>

              <div
                className='progressCircumference'
                id='circumference'
                style={{
                  textAlign: "center",
                  opacity: currentPage === "circumference" ? "1" : "0.2",
                  transition: "1s cubic-bezier(0.075, 0.82, 0.165, 1)",
                }}
              >
                <svg height='32' width='32'>
                  <g id='profile'>
                    <circle
                      cx='16'
                      cy='16'
                      r='12'
                      stroke='black'
                      strokeWidth={1}
                      fill={
                        currentPage === "circumference" ? "#4F048C" : "none"
                      }
                    ></circle>
                    <text
                      x='50%'
                      y='50%'
                      textAnchor='middle'
                      stroke={
                        currentPage === "circumference" ? "#47CB1C" : "#000"
                      }
                      strokeWidth='1.5px'
                      dy='.3em'
                      style={{
                        fontFamily: "Montserrat",
                      }}
                    >
                      5
                    </text>
                  </g>
                </svg>
                <p
                  style={{
                    margin: 0,
                    padding: 0,
                    marginTop: "-0.5rem",
                    fontWeight: currentPage === "circumference" ? "800" : "",
                    fontFamily: "Montserrat",
                    color:
                      currentPage === "circumference" ? "#47CB1C" : "black",
                  }}
                >
                  Circunf.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      <form
        className='myForm'
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          height: "80vh",
        }}
      >
        <section className='mySection' style={{ height: "90%" }}>
          {homeScreen && <Home />}
          {profileScreen && <Profile data={userData} modifier={setuserData} />}
          {genderScreen && <Gender data={userData} modifier={setuserData} />}
          {heightScreen && <Height data={userData} modifier={setuserData} />}
          {weightScreen && <Weight data={userData} modifier={setuserData} />}
          {circumferenceScreen && (
            <Circumference data={userData} modifier={setuserData} />
          )}
          {sentScreen && <Sent data={userData} />}
        </section>

        {homeScreen && (
          <div
            className='startButton'
            style={{
              height: "10%",
              display: "flex",
              justifyContent: "center",
              alignItems: "start",
            }}
          >
            <button
              onClick={(e) => {
                e.preventDefault();
                goToNext("home");
              }}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(54, 44, 134, 0.6)",
                width: "20%",
                height: "80%",
                borderRadius: "10%",
                border: "none",
                textDecoration: "none",
                cursor: "pointer",
                boxShadow: "0px 0px 7px -5px #000000",
              }}
            >
              <StartArrow
                style={{
                  transform: "rotate(90deg)",
                }}
              />
            </button>
          </div>
        )}

        {!sentScreen && !homeScreen && !circumferenceScreen && (
          <div
            className='buttons-div'
            style={{
              zIndex: "999",
              height: "10%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "start",
              marginInline: "2em",
            }}
          >
            <ButtonWithArrow
              direction={"backwards"}
              goTo={goToPrevious}
              currentPage={currentPage}
            />
            <ButtonWithArrow
              direction={"forward"}
              goTo={goToNext}
              currentPage={currentPage}
            />
          </div>
        )}

        {circumferenceScreen && (
          <div
            className='buttons-div'
            style={{
              zIndex: "999",
              height: "10%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginInline: "2em",
            }}
          >
            <ButtonWithArrow
              direction={"backwards"}
              goTo={goToPrevious}
              currentPage={currentPage}
            />
            <button
              style={{
                backgroundColor: "rgba(54, 44, 134, 0.6)",
                border: "none",
                width: "30%",
                color: "#fff",
                fontWeight: "800",
                fontFamily: "Montserrat",
                fontSize: "1rem",
                height: "70%",
                padding: "0",
                margin: 0,
                borderRadius: "10%",
                border: "none",
                textDecoration: "none",
                cursor: "pointer",
                boxShadow: "0px 0px 7px -5px #000000",
                textAlign: "center",
              }}
              className='buttonSubmit'
              type='button'
              onClick={(e) => goToNext(currentPage)}
            >
              Enviar
            </button>
          </div>
        )}
      </form>
    </div>
  );
}

export default App;
