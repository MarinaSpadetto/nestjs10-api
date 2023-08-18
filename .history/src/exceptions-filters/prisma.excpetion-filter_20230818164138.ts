import { ArgumentsHost, ExceptionFilter } from "@nestjs/common";

@Catch()
export class PrismaExceptionFilter implements ExceptionFilter {

  catch(exception, host) {

  }

}
