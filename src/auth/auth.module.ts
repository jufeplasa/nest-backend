import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { User, UserSchema } from './entities/user.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [

    ConfigModule.forRoot(),

    MongooseModule.forFeature([
    {
      name: User.name,
      schema: UserSchema
    }
  ]),

  JwtModule.register({
    global: true,
    secret: process.env.JWT_SEED,
    signOptions: { expiresIn: '4h' },
  }),
  
  ]
})
export class AuthModule {}