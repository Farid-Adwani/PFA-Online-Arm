import { Move } from "./move";


export class Serie {
    constructor(
        public name: string = "New Serie",
        public date: Date = new Date(),
        public playing: boolean = false,
        public color: string = "black",
        public moves : Move[]= []
    ) {}

}