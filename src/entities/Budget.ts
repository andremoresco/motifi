export class Budget {
    
    public description: string;
    public value: number;
    public userIdentityId: string;

    constructor(props: Budget) {
        Object.assign(this, props);
    }

}
