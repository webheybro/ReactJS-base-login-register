import { Button } from "@material-ui/core";
import { VpnKey } from "@material-ui/icons";
import React, { useRef } from "react";

import MyInputText from "../../../my/MyForm/MyInputText/MyInputText";
import WrapperLoginRegister from "../../../wrappers/WrapperLoginRegister/WrapperLoginRegister";

function Login() {
  // eslint-disable-next-line no-unused-vars
  const [state, setState] = React.useState({ email: "", password: "" });

  const onHandleSubmit = (e) => {
    e.preventDefault();
  };
  const onHandleChange = (e) => {
    const value = e.target.value;
    const nameChange = e.target.name;
    setState({ ...state, [nameChange]: value });
  };

  return (
    <WrapperLoginRegister>
      <div className="p-3 rounded">
        <h1 className="text-uppercase">Connexion</h1>
        <hr className="mb-2 bg-dark" />
        <form onSubmit={onHandleSubmit}>
          <MyInputText
            type="email"
            name="email"
            placeholder="Email"
            onChange={onHandleChange}
            value={state.email}
            label="Email"
            autoComplete="nope"
          />
          <MyInputText
            type="password"
            name="password"
            placeholder="Mot de passe"
            onChange={onHandleChange}
            value={state.password}
            label="Mot de passe"
            autoComplete="current-password"
          />
          <hr className="my-4" />
          <Button
            type="submit"
            fullWidth={true}
            className="w-100"
            color="secondary"
            variant="contained"
            startIcon={<VpnKey />}
          >
            Connexion
          </Button>
        </form>
      </div>
    </WrapperLoginRegister>
  );
}

export default Login;
