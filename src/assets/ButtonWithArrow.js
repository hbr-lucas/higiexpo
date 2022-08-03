import React from "react";
import { ReactComponent as Arrow } from "../assets/SVG/arrow.svg";

function ButtonWithArrow({ direction, goTo, currentPage }) {
  return (
    <button
      style={{
        height: "3em",
        background: "none",
        border: "none",
        width: "10%",
        height: "100%",
        padding: 0,
        margin: 0,
      }}
      className='buttonWithArrow'
      type='button'
      onClick={(e) => goTo(currentPage)}
    >
      <div className='arrow' style={{ margin: 0, padding: 0 }}>
        <Arrow
          style={{
            transform:
              direction === "forward" ? "rotate(135deg)" : "rotate(-45deg)",
          }}
        />
      </div>
    </button>
  );
}

export default ButtonWithArrow;
