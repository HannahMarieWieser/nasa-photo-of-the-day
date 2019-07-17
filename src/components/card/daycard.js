import React from "react";

const Cardinfo = ({imgurl, blurb}) => {
  return (
    <>
      {/* display h1 title*/}
      <img src={imgurl} alt="alttext" />;
      <p> {blurb} </p>
    </>
  );
};

export default Cardinfo;