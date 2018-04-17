import { Component } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';
import {Req} from '@nestjs/common/utils/decorators/route-params.decorator';

@Component()
export class CatsService {
    private readonly cats: Cat[] = [];

    create(cat: Cat) {
        this.cats.push(cat);
    }

    findAll(req): number {
        const httpvision = req.httpVersion;
        return httpvision;
        // return this.cats;
    }
}