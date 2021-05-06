import React, { useState, useRef, useEffect } from "react";


const  Sidebar = React.forwardRef(({isOpen}, ref) => (
    <aside ref={ref} className={"transform top-0 left-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 " + 
        (isOpen ? "translate-x-0" : "-translate-x-full")}>
        <h1>AAA</h1>
    </aside>
  ));
export default Sidebar;