import { Module } from '@nestjs/common';
import { QuestionController } from './question.controller';
import { QuestionService } from './question.service';
import { QuestionRepository } from './question.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([QuestionRepository])],
  controllers: [QuestionController],
  providers: [QuestionService],
})
export class QuestionModule {}