import { application } from "express";
import config from "../config";

class APIInvoke{
    async invokeGET(resourse, queryParams) {
        queryParams= queryParams ||[]
        const queryString=queryParams.reduce((last,q,i) => last +`${i === 0 ? '?': "&" }${q}`,'')

        const token = localStorage.getItem("token")
        let bearer;
        if(token === ""){
            bearer = "";
        }else{
            bearer= `${token}`;
        }

        const data = {
            method: 'GET',
            headers:{
                'Content-Type':'application/json',
                'x-auth-token':bearer
            }
        }
        
    }
}