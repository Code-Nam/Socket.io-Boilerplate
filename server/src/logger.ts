import { createLogger, format, Logger, transports } from "winston";
import "winston-daily-rotate-file";
import DailyRotateFile from "winston-daily-rotate-file";

const { combine, printf, timestamp, errors, cli, prettyPrint } = format;
const { Console, File } = transports;

const printFormat = printf(({ timestamp, level, message }) => {
    return `${timestamp} [${level}]: ${message}`;
});

const dailyTransport = new DailyRotateFile({
    dirname: "logs",
    filename: "%DATE%.log",
    datePattern: "YYYY-MM-DD",
    zippedArchive: true,
    maxSize: "20m",
    maxFiles: "14d",
    level: "info",
});

const logger: Logger = createLogger({
    level: "info",
    format: combine(timestamp({ format: "YYYY-MM-DD HH:mm:ss" }), errors({ stack: true }), printFormat, prettyPrint()),
    transports: [
        new File({ filename: "logs/error.log", level: "error" }),
        new File({ filename: "logs/combined.log" }),
        dailyTransport,
    ],
});

dailyTransport.on("rotate", (oldFilename, newFilename) => {
    logger.info(`Rotated log file from ${oldFilename} to ${newFilename}`);
});
dailyTransport.on("error", (error) => {
    logger.error(`Error in daily rotate file transport: ${error.message}`);
});

if (process.env.NODE_ENV !== "production") {
    logger.add(
        new Console({
            format: combine(cli()),
        }),
    );
}

export { logger };
