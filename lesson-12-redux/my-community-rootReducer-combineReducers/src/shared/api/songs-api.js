import axios from "axios";

import requestDecorator from "../lib/request-decorator";

const songsInstance = axios.create({
  baseURL: "https://67e3b7b52ae442db76d13e6a.mockapi.io/api/songs",
});

export const getSongsApi = requestDecorator((params = {}) => {
  const { page = 1, limit = 10 } = params;
  return songsInstance.get("/", {
    params: {
      page,
      limit,
    },
  });
});

export const getSongByIdApi = requestDecorator(id => songsInstance.get(`/${id}`));
