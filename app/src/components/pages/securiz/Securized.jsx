import React from "react";

const Securized = ({ user }) => {
  return (
    <div className="">
      <div className="container text-center mt-5 text-xxxl uppercase">
        Bienvenue : {user.username}
      </div>
    </div>
  );
};

export default Securized;
