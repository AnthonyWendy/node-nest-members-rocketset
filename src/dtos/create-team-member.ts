import { IsNotEmpty } from 'class-validator'

export class CreateTeamMemberDto {
    @IsNotEmpty()
    name: string

    @IsNotEmpty({
        message: 'ta faltando coisa ai',
    })
    function: string
}
