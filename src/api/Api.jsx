import Kitsu from "kitsu";
import { createContext } from "react";

const baseURL = process.env.REACT_APP_API_BASE_URL;

// TODO: Any better default?
export const ApiContext = createContext(new Kitsu({ baseURL }));
