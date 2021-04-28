import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Language } from './entities/language.entity';
import { CreateLanguageDto } from './dto/create-language.dto';
import { UpdateLanguageDto } from './dto/update-language.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class LanguagesService {
  constructor(
    @InjectRepository(Language)
    private languagesRepository: Repository<Language>,
  ) {}
  create(createLanguageDto: CreateLanguageDto) {
    return 'This action adds a new language';
  }

  findAll() {
    return this.languagesRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} language`;
  }

  update(id: number, updateLanguageDto: UpdateLanguageDto) {
    return `This action updates a #${id} language`;
  }

  remove(id: number) {
    return `This action removes a #${id} language`;
  }
}
