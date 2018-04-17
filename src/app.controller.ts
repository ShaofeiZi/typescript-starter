import {Get, Controller, Res} from '@nestjs/common';
import {HttpCode} from '@nestjs/common/utils/decorators/http-code.decorator';

@Controller()
export class AppController {
    @Get()
    // @HttpCode(208)
    root(): string {
        return `Hello World!`;
    }
}
