import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(private messageService: MessagesService) {}
  @Get()
  getAllMessages() {
    return this.messageService.getAllMessages();
  }

  @Post()
  createMessage(@Body() { content }: CreateMessageDto) {
    return this.messageService.createMessage(content);
  }

  @Get('/:id')
  async getMessage(@Param('id') id: any) {
    return this.messageService.getMessage(id);
  }
}
