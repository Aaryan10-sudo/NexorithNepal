import axios from "axios";
import { baseURL } from "../config/config.js";

export const hitApi = axios.create({
  baseURL: baseURL,
});
