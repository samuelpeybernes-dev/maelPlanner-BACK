import { createLogger, format, transports } from 'winston'

const logLevels = {
  fatal: 0,
  error: 1,
  warn: 2,
  info: 3,
  debug: 4,
  trace: 5,
}

const logger = createLogger({
  level: 'debug',
  levels: logLevels,
  format: format.combine(
    format.colorize(),
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    format.errors({ stack: true }),
    format.printf(({ timestamp, level, message }) => {
      if (message instanceof Object) {
        return `[${timestamp}] ${level}: ${JSON.stringify(message, null, 4)}`
      }
      return `[${timestamp}] ${level}: ${message}`
    })
  ),
  // transports: [new transports.File({ filename: './logs/error.log', level: 'error' }), new transports.Console()],
})

export default logger
