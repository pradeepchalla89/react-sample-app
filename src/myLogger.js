import winston from 'winston';


const myLogger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.Console({
            format: winston.format.simple()
        })
    ]
});

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV !== 'production') {
    myLogger.add(
        new winston.transports.Console({
            format: winston.format.simple(),
            level: 'debug'
        })
    );
}

export default myLogger;