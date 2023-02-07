import React, { useState } from "react";

function Header() {
  const [menu, setMenu] = useState(false);

    const TitlesWideScreenStyle = "font-title font-bold text-md";
    const TitlesMobileStyles = `${TitlesWideScreenStyle} font-normal  flex w-screen h-12 items-center justify-end pr-20 hover:text-primary transition-all`
    const menuItems = ["Home","Get to know me!","Projects","Contact"]


  return (
    <>
      <header className="w-screen h-[5rem]  flex items-center gap-3 bg-primary  ">
        <div className="flex ml-5 flex-1  gap-6">
          <span className="-lg:hidden ">Icon</span>
          <h1 className={TitlesWideScreenStyle}>Mauricio murdoch</h1>
        </div>
        <button onClick={()=>setMenu(!menu)} type="button" className="flex mr-20 md:hidden">
         {menu ? (<p>X</p>): (<p className={TitlesWideScreenStyle}>Menu</p>)}
        </button>
        <div className="md:flex md:mr-16 hidden ">
          <ul className="flex gap-16 ">
            {menuItems.map((item,i) =>(<li key={i} className={TitlesWideScreenStyle}><a href={`#${item}`}>{item}</a></li>))}
          </ul>
        </div>
      </header>
      {/* Dropdown menu */}
     {menu && (<div className={`md:invisible z-10  w-screen shadow-2xl bg-sky  absolute border  justify-end `}>
        <ul className="flex flex-col   text-right">
           {menuItems.map((item,i) =>(<li key={i} className={TitlesMobileStyles}><a href={`#${item}`}>{item}</a></li>))}
        </ul>
      </div>)} 
      {/* Dropdown menu */}
    </>
  );
}

export default Header;
