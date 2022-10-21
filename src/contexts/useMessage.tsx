import bus from "../utils/bus";

export default function UseMessage() {
    function setMessage (msg: string) {
        bus.emit('flash', {
            message: msg,
        })
    }

    return { setMessage }
}