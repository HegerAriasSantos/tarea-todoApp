
export class PendingTasks {

    public name:string;
    public ended:boolean;

    constructor( name:string, ended?: boolean ){
        this.ended = ended ? ended : false;
        this.name = name;
    }
}