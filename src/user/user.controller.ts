import { Body, Controller, Get, Patch, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from '@prisma/client';
import { GetUser } from '../auth/decorator/get-user.decorator';
import { JwtGuard } from '../auth/guard/jwt.guard';
import { EditUserDto } from './dto';
import { UserService } from './user.service';

@UseGuards(JwtGuard)
@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}
  @Get('me')
  @ApiOperation({ summary: 'Get user' })
  @ApiResponse({ status: 200, description: 'Success' })
  getMe(@GetUser() user: User) {
    return user;
  }

  @Patch()
  @ApiOperation({ summary: 'Edit user' })
  @ApiResponse({ status: 200, description: 'User edited successfully' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  editUser(@GetUser('id') userId: number, @Body() dto: EditUserDto) {
    return this.userService.editUser(userId, dto);
  }
}
