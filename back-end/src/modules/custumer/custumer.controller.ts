import {
  Body,
  Controller,
  Post,
  Put,
  Get,
  Param,
  Delete,
} from '@nestjs/common';
import { CustumerDTO } from './custumer.dto';
import { CustumerService } from './custumer.service';

@Controller('custumer')
export class CustumerController {
  constructor(private readonly custumerService: CustumerService) {}
  @Post()
  async create(@Body() data: CustumerDTO) {
    return this.custumerService.create(data);
  }

  @Get()
  async findAll() {
    return this.custumerService.findAll();
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: CustumerDTO) {
    return this.custumerService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.custumerService.delete(id);
  }
}
