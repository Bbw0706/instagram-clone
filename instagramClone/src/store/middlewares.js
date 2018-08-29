import logger from "redux-logger"
import promiseMiddleware from "redux-promise-middleware"

const middlewares = [];

middlewares.push(logger);
middlewares.push(promiseMiddleware())


export default middlewares