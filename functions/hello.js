export function onRequest(context) {
    console.log("Function called")
    return new Response("Hello, world!")
}