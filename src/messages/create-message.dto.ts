import { Contains, IsString, validateOrReject } from 'class-validator';
export class CreateMessageDto {
  @IsString()
  //   @Contains('content')
  content: string;
}
