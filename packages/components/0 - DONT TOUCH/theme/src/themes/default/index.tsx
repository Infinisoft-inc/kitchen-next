import type { Theme } from "../../types";
import './index.css';
import { dark } from "./tokens/dark";
import { light } from "./tokens/light";


const defaultTheme: Theme = {
    name: 'default',
    active: 'dark',
    dark,
    light
};

export default defaultTheme
