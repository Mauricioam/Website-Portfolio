import React, { useState } from "react";

function ButtonAboutMe({ item }) {

const [press, setPress] = useState(false);

  return (
    <button onClick={()=>setPress(!press)} className={`relative font-bold text-lg m-1 hover:text-slate-300 hover:transition-colors ${press ? "text-slate-100": "text-black"}`}>
      <div className=" border bg-secondary rounded-lg">
        <div className={`bg-primary px-5 py-2 -translate-y-1.5 -translate-x-1.5 rounded-lg ${press && "-translate-x-0 -translate-y-0 "}`}>
          {item}
        </div>
      </div>{" "}
    </button>
  );
}

export default ButtonAboutMe;
