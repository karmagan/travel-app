import { submitHandler } from "./handlers";

export const listeners=()=>{
    document.querySelector('#travel-form').addEventListener('submit',submitHandler)
}