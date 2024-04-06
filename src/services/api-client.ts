import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f5bd5dc2edd94a32acef9ca09da3c055",
  },
});
