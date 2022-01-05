import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';
  import { Question } from './question.entity';
  import { QuestionService } from './question.service';
  import { CreateQuestionDto } from './dto/create-question.dto';
  import { UpdateQuestionDto } from './dto/update-question.dto';
  
  @Controller('question')
  export class QuestionController {
    constructor(private questionService: QuestionService) {}
  
    @Get()
    get(): Promise<Question[]> {
      return this.questionService.get();
    }
  
    @Post()
    create(
      @Body() createQuestionDto: CreateQuestionDto,
    ): Promise<Question> {
      return this.questionService.create(createQuestionDto);
    }
  
    @Put(':id')
    update(
      @Param('id') id: string,
      @Body() updateQuestionDto: UpdateQuestionDto,
    ) {
      return this.questionService.update(id, updateQuestionDto);
    }
  
    @Delete(':id')
    delete(@Param('id') id: string): Promise<Question> {
      return this.questionService.delete(id);
    }
  }
  