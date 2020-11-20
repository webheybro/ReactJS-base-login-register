import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const MyNavBarBtnAccess = () => {
  const loggedIn = false;
  const btnClasses = " mr-2  text-white bold";
  const minsize = useMediaQuery("(max-width:600px)");
  const size = minsize ? "small" : "medium";

  return (
    <div
      className={`d-flex content-justify-right justify-content-end mr-3 ml-auto mt-3 pt-1 text-l ${
        minsize && "pt-2"
      }`}
    >
      {loggedIn ? (
        <Link to="/login">
          <Button className={btnClasses} size={size}>
            Déconnexion
          </Button>
        </Link>
      ) : (
        <>
          <Link to="/login">
            <Button className={btnClasses} size={size}>
              Connexion
            </Button>
          </Link>
          <Link to="/register">
            <Button className={btnClasses} size={size}>
              Inscription
            </Button>
          </Link>
        </>
      )}
    </div>
  );
};

export default MyNavBarBtnAccess;
