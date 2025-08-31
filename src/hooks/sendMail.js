import {useMutation} from "@tanstack/react-query"
import { sendMailToAdmin } from "../api/api"


export const useSendMail = () =>{
    return useMutation({
        mutationFn:sendMailToAdmin
    })
}