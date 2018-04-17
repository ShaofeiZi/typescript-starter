import {Controller, Get, Post} from '@nestjs/common';
import {Body, Param, Req} from '@nestjs/common/utils/decorators/route-params.decorator';
import {CreateCatDto} from './dto/create-cat.dto';

@Controller('cats')
export class CatsController {

    @Get()
    findAll(@Req() req) {
        const httpvision = req.httpVersion;
        return httpvision;
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