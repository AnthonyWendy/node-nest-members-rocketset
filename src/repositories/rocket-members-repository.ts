export abstract class RocketTeamMemberRepository {
    abstract create(name: string, memberFunction: string): Promise<void>
}
