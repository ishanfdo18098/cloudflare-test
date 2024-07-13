export function onRequest(context) {
    console.log("hi how are you?")
    return new Response("Hello, world!")
}