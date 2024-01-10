import { Body, Controller, Post } from '@nestjs/common'
import { CreateTeamMemberDto } from './dtos/create-team-member'
import { RocketTeamMemberRepository } from './repositories/rocket-members-repository'

@Controller('app')
export class AppController {
    constructor(
        private rocketTeamMemberRepository: RocketTeamMemberRepository
    ) {}

    @Post('hello')
    async getHello(@Body() body: CreateTeamMemberDto) {
        const { name, function: memberFunction } = body

        await this.rocketTeamMemberRepository.create(name, memberFunction)
    }
}
