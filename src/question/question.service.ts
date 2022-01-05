import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { QuestionRepository } from './question.repository';
import { Question } from './question.entity';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(QuestionRepository)
    private questionRepository: QuestionRepository,
  ) {}

  async get(): Promise<Question[]> {
    const categories = await this.questionRepository.find();
    return categories;
  }

  async create(createquestionDto: CreateQuestionDto): Promise<Question> {
    const question = await this.questionRepository.create(createquestionDto);
    return await this.questionRepository.save(question);
  }

  async update(
    id: string,
    updatequestionDto: UpdateQuestionDto,
  ): Promise<Question> {
    const question = await this.questionRepository.findOne(id);
    const editedQuestion = Object.assign(
      question,
      updatequestionDto,
    );
    return await this.questionRepository.save(editedQuestion);
  }

  async delete(id: string): Promise<Question> {
    const question = await this.questionRepository.findOne(id);
    return await this.questionRepository.softRemove(question);
  }
}
