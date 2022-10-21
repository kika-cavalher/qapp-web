import bus from "../utils/bus";

export default function UseMessage() {
    function setMessage (msg: string, type: string) {
        bus.emit('flash', {
            message: msg,
            type: type,
        })
    }

    return { setMessage }
}