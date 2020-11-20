import Axios from "axios";
const { REACT_APP_API } = process.env;

export async function logMePlease(username, password) {
  const uri = `${REACT_APP_API}/user/login`;
  const data = {
    username: username,
    password: password,
  };
  const atempt = await Axios.post(uri, data);
  if (atempt.data.error) {
    return {
      error: atempt.data.error,
      data: null,
    };
  }

  return {
    error: null,
    data: atempt.data,
  };
}
