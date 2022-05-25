import { MailerService } from '@nestjs-modules/mailer';
import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import { AuthDto } from 'src/auth/dto';

@Processor('sendMail-queue')
export class SendMailConsumer {
  constructor(private mailService: MailerService) {}

  @Process('sendMail-job')
  async sendMailJob(job: Job<AuthDto>) {
    const { data } = job;

    this.mailService.sendMail({
      to: data.email,
      from: 'POC of Bullmq',
      subject: 'NestJS Mailer',
      text: 'Seu cadastro foi concluído',
    });
  }
}
