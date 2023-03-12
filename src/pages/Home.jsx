import React from 'react'

import { Link } from "react-router-dom";

 function Main (props) {
  const Main = [
    { name: "About"},
    { name: "Education"},
    { name: "Experience" },
   
   
  ];

  return (
    <div className="Main">
        <h1>Sections</h1> 
      {Main.map((section,key) => {
        const { name } = section;

        return (
          <Link key={key}to={`/About/Education/Experience`}>
            <h2>{name}</h2>
          </Link>
        );
      })}
   


</div>
  );
};
export default Main