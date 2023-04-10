import axios from "axios";

const RAW_URI = window.location.href;
const URI = RAW_URI.split('/');
const URI_REGION = URI[3];
const URI_SUMMONERNAME = URI[4];

const instance = axios.create({
  baseURL: `http://localhost:6969/summoners/${URI_REGION}/${URI_SUMMONERNAME}`,
  headers: {
    "Content-Type": "application/json"
  }
});

const getDelayConfig = () => ({
  params: {
    delay: 3,
  },
});

const UserAPI = {
  getAll: (config: any) => instance.get("", Object.assign(getDelayConfig(), config)),
};

export default UserAPI;
