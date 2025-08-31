import {useMutation} from "@tanstack/react-query"
import { sendEnquery } from "../api/api"


export const useSendEnquery = () =>{
    return useMutation({
        mutationFn:sendEnquery
    })
}