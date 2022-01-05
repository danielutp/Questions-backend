import { IsNotEmpty,  } from 'class-validator';

export class UpdateQuestionDto {
  @IsNotEmpty()
  name: string;
}