export class Proyecto {
    constructor(
        public nombre: string,
        public descripcion: string,
        public link: string,
        public tecnologias: object,
        public ventanas?: object,
        public _id?: string

    ) {  }
}