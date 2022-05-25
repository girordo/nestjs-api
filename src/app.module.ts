import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { BullModule } from '@nestjs/bull';
import { MailerModule } from '@nestjs-modules/mailer';
import { SendMailProducerService } from './jobs/sendMail-producer-servicer';
import { MailBullModuleModule } from './mail-bull-module/mail-bull-module.module';

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
    MailerModule.forRoot({
      transport: {
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
          user: 'tiana.bechtelar49@ethereal.email',
          pass: 'qBVU6EJfyVZVHN9Xzu',
        },
      },
    }),
    UserModule,
    BookmarkModule,
    PrismaModule,
    MailBullModuleModule,
  ],
})
export class AppModule {}
