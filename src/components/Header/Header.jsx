import React, { useState } from "react";
import CloseIcon from "../../assets/CloseIcon";
import MenuIcon from "../../assets/MenuIcon";


function Header() {
  const [menu, setMenu] = useState(false);

    const TitlesWideScreenStyle = " text-sky font-title text-lg font-bold text-md hover:text-text3 hover:transition-all";
    const TitlesMobileStyles = `${TitlesWideScreenStyle} font-bold  pr-20 h-[3.8rem] flex justify-end items-center  hover:text-primary `
    const menuItems = ["Home","Get to know me!","Projects"]


  return (
      <header className="w-screen h-[5rem]  flex items-center gap-3 bg-primary  shadow-lg   ">
        <div className="flex ml-5 flex-1  gap-6">
          
        </div>
         <button onClick={()=>setMenu(!menu)} type="button" className="flex mr-20 md:hidden" data-te-dropdown-toggle-ref>
         {menu ? (<CloseIcon/>): (<MenuIcon/>)}
        </button> 
        
        <div className="md:flex md:mr-16 hidden ">
          <ul className="flex gap-16 ">
            {menuItems.map((item,i) =>(<li key={i} className={TitlesWideScreenStyle}><a href={`#${item}`}>{item}</a></li>))}
          </ul>
        </div>
      {/* Dropdown menu */}
        <ul className={` ${menu ? "h-[12rem]":"hidden"} md:hidden  z-10 top-20   shadow-2xl bg-sky   absolute    divide-y-2 flex-col text-right  w-screen`}>
           {menuItems.map((item,i) =>(<li key={i} className={TitlesMobileStyles}><a className="transition-all text-dark1 hover:text-primary" onClick={()=>setMenu(!menu)} href={`#${item}`}>{item}</a></li>))}
        </ul>
      {/* Dropdown menu */}
      </header>
  );
}

export default Header;
