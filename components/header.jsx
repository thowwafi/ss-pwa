import React, { useState, useRef, useEffect } from "react";
import Sidebar from '../components/sidebar'

export default function Header() {
    const [openSidebar, setopenSidebar] = useState(false);
    const wrapperRef = useRef(null);
    useEffect(() => {
        function handleClickOutside(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setopenSidebar(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wrapperRef]);
    return(
        <>
            <Sidebar ref={wrapperRef} isOpen={openSidebar}/>
            <div className='p-3 bg-white border-b-2 border-black w-100 flex justify-between'>
                <button onClick={() => setopenSidebar(true)}>
                    =
                </button>
                <h5>SS</h5>
                <h5>SS</h5>
            </div>
        </>
    )
}