import { useState } from "react";
import "../styling/NavBar.css"
function NavBar() {
  return (
    <div>
      <nav>
        <input type="text" className="search" placeholder="search" />
      </nav>
    </div>
  )
}
export default NavBar;