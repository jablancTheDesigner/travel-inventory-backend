import serverless from "serverless-http";
import app from "../../app";
const handler = serverless(app);
module.exports.handler = async(event,context)=> {
    const result = await handler(event, context);
    return result;
}