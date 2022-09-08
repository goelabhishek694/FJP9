//person.js 
const person = {
    name:"Abhi"
}

export default person;
export const age = 23;

//utility.js
export const clean = () => { }
export const baseData = 0;

//app.js

import person from './person.js'
import hathi from './person.js'
import {clean} from './utility.js'
import { baseData} from "./utility.js";