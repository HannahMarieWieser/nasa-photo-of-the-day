import React from "react";



const Header = ({title, date, author}) => {
  return (
    <>
      {/* display h1 title*/}
      <h1>{title} </h1>
      <h3>{date}</h3>
      <h3>{author}</h3>
    </>
  );
};

export default Header;