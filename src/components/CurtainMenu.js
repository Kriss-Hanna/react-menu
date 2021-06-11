import React, { useState, useEffect} from 'react';
import Menu from "./liste.svg"
import "./CurtainMenu.css";

export default function CurtainMenu() {

  const [checkWidth, setCheckWidth] = useState(window.innerWidth);
  const [toggleNav, setToggleNav] = useState(false);

  const toggleNavFunc = () => {
    setToggleNav(!toggleNav)
  }

  const checkFunc = () => {
    setCheckWidth(window.innerWidth)
  }
  
  useEffect(()=> {
    window.addEventListener("resize", checkFunc)

    return() => {
      window.removeEventListener("resize", checkFunc)
    }
  }, [])


  return (
    <>
      {checkWidth < 900 && (
      <button onClick={toggleNavFunc} className="floating-btn">
        <img src={Menu}/>
      </button>
      )}

      <nav className={toggleNav ? "active" : ""}>
      {checkWidth < 900 && (
        <button onClick={toggleNavFunc} className="close-menu">X</button>
  )}
        <a href="#">Home</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
      </nav>
    </>
  )
}
