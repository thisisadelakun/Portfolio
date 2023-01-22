import React from 'react'
import { useEffect } from 'react'
import '../Styles/DarkModeToggle.css'

const DarkModeToggle = () => {
  useEffect(() => {
    if (localStorage.getItem("light")) {
      document.body.classList.add("dark");
    }
  }, []);

  return (
    <div>
      <label class="switch">
        <input className='inputting' type="checkbox" onClick={handleToggled} />
        {/* <span className="switch"> <span className="handle" /> </span> */}
            <span class="slider"></span>
      </label>
    </div>
  )
}
const handleToggled = () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("dark", document.body.className);
};


export default DarkModeToggle