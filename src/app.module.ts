import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { PrismaService } from './database/prisma.service'
import { RocketTeamMemberRepository } from './repositories/rocket-members-repository'
import { PrismaRocketMembersRepository } from './repositories/prisma/prisma-rocket-members'

@Module({
    imports: [],
    controllers: [AppController],
    providers: [
        PrismaService,
        {
            provide: RocketTeamMemberRepository,
            useClass: PrismaRocketMembersRepository,
        },
    ],
})
export class AppModule {}
