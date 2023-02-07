import React, { useState } from "react";

function Header() {
  const [menu, setMenu] = useState(false);

    const Titles = "font-title font-bold text-md"



  return (
    <>
      <header className="w-screen h-[5rem]  flex items-center gap-3 bg-primary  ">
        <div className="flex ml-5 flex-1  gap-6">
          <span className="-lg:hidden ">Icon</span>
          <h1 className={Titles}>Mauricio murdoch</h1>
        </div>
        <button onClick={()=>setMenu(!menu)} type="button" className="invisible  -md:visible -md:mr-20  ">
         {menu ? (<p>X</p>): (<p className={Titles}>Menu</p>)}
        </button>
        <div className="flex mr-16 -md:hidden">
          <ul className="flex gap-16 ">
            <li className={`${Titles}`}>Home</li>
            <li className={`${Titles}`}>Get to know me!</li>
            <li className={`${Titles}`}>Projects</li>
            <li className={`${Titles}`}>Contact</li>
          </ul>
        </div>
      </header>
      {/* Dropdown menu */}
      <div className={`${menu ? " -lg:visible" : "hidden" }   w-screen  bg-gray2  absolute border flex justify-end `}>
        <ul className="flex flex-col gap-3  text-right">
          <li className={`${Titles} flex w-screen h-10 items-center justify-end pr-20`}>Home</li>
          <li className={`${Titles}`}>Get to know me!</li>
          <li className={`${Titles}`}>Projects</li>
          <li className={`${Titles}`}>Contact</li>
        </ul>
      </div>
      {/* Dropdown menu */}
    </>
  );
}

export default Header;
