export default function (context: any) {
    context.userAgent = context.isServer ? context.req.headers['user-agent'] : navigator.userAgent
}
