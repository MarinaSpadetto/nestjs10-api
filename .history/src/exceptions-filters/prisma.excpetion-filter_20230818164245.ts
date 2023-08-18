import { ArgumentsHost, ExceptionFilter } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

@Catch(PrismaClientKnownRequestError)
export class PrismaExceptionFilter implements ExceptionFilter {

  catch(exception: PrismaClientKnownRequestError, host: ArgumentsHost) {

  }

}
