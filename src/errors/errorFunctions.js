export default function errorHandling(err) {
    if (err.code === 'ENOENT') {
        throw new Error("Cannot find your file") //complete stack trace
        //return "Cannot find your file" -> just message
    } else {
        return 'Unexpected error'
    }
}
