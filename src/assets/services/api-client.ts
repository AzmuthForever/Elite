import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",

  params: {
    key: "f41dedd6862b491286c29f14d7f66883",
  },
});
