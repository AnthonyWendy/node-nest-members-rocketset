import { PrismaService } from 'src/database/prisma.service'
import { RocketTeamMemberRepository } from '../rocket-members-repository'
import { randomUUID } from 'crypto'
import { Injectable } from '@nestjs/common'

@Injectable()
export class PrismaRocketMembersRepository
    implements RocketTeamMemberRepository
{
    constructor(private prisma: PrismaService) {}

    async create(name: string, memberFunction: string): Promise<void> {
        await this.prisma.rocketTeamMember.create({
            data: {
                id: randomUUID(),
                name,
                function: memberFunction,
            },
        })
    }
}
