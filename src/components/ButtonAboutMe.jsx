import React, { useState } from "react";

function ButtonAboutMe({ item }) {

const [press, setPress] = useState(false);

  return (
    <button onClick={()=>setPress(!press)} className={`relative font-bold text-lg m-1 hover:text-primary hover:transition-colors ${press ? "text-dark_shade hover:text-primary": "text-black"}`}>
      <div className="  bg-gray1 rounded-lg">
        <div className={`bg-sky px-5 py-2 -translate-y-1.5 -translate-x-1.5 rounded-lg ${press && "-translate-x-0 -translate-y-0 "}`}>
          {item}
        </div>
      </div>
    </button>
  );
}

export default ButtonAboutMe;
