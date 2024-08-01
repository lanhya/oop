export class Work {
    subject: string;
    time: string;
    isTeam: boolean;
    constructor(subject: string, time: string, isTeam: boolean) {
        this.subject = subject
        this.time = time
        this.isTeam = isTeam
    }
}