import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';

@Injectable()
export class MessagesService {
  constructor(private messageRepo: MessagesRepository) {}
  getAllMessages() {
    return this.messageRepo.getAll();
  }

  createMessage(message: string) {
    return this.messageRepo.createMessage(message);
  }

  getMessage(id: number) {
    return this.messageRepo.getMessage(id);
  }
}
