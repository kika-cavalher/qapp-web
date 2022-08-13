import { FlashMessage } from "../types/user";
import bus from "../utils/bus";


export default function useFlasMessage(){

    function setFlashMessage({msg, type}: FlashMessage){
        bus.emit('flash', {
            message: msg,
            type: type,
        })
    }

    return { setFlashMessage }
}