import {Controller, Get, Post} from '@nestjs/common';
import {Body, Param, Req} from '@nestjs/common/utils/decorators/route-params.decorator';
import {CreateCatDto} from './dto/create-cat.dto';
import {CatsService} from 'cats.service';

@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService) {
    }

    @Get()
    findAll(@Req() req) {
        return this.catsService.findAll(req);
    }

    @Get(':id')
    findOne(@Param() param) {
        return param.id;
    }

    @Post()
    /**
     * body 示例
     */
    // {
    //     "name": "test",
    //     "breed": "breedTest",
    //     "age": 88
    // }
    async create(@Body() createCatDto: CreateCatDto) {
        console.log(createCatDto);
        return createCatDto;
    }

}