import React from 'react'

import { Link } from "react-router-dom";

 function Home (props) {
  const Home = [
    { name: "About"},
    { name: "Education"},
    { name: "Experience" },
   
   
  ];

  return (
    <div className="Home">
        <h1>Sections</h1> 
      {Home.map((section,key) => {
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
export default Home 