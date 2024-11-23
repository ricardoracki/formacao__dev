import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(Error)
export default class ErrorFilter implements ExceptionFilter {
  catch(exception: Error, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const request = ctx.getRequest<Request>();
    const response = ctx.getResponse<Response>();

    const status = (exception as any).getStatus?.() || 500;

    console.error(exception);

    response.status(status).json({
      message: exception.message || 'Internal Server Error',
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}
