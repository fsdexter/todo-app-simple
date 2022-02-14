import { Guid } from "guid-typescript";

export class Todo{
    constructor(
        public id:Guid,
        public task:string,
        public isCompleted:boolean
    ){}
}