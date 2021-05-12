import { ConcreteMemento } from "./ConcreteMemento";
import { PaginaOriginator } from "./PaginaOriginator";


export class EditorCaretaker{
    private mementos: Array<ConcreteMemento> = new Array<ConcreteMemento>();

    private _pagina: PaginaOriginator;

    constructor(pagina: PaginaOriginator){
        this.pagina = pagina;
    }


    public set pagina(valor: PaginaOriginator){
        this._pagina = valor;
    }

    public get pagina(){
        return this._pagina;
    }

    public crearMemento(){
        this.mementos.push(this.pagina.guardar());
    }

    public deshacer(){
        if (this.mementos.length == 0){
            return null;
        }

        this.pagina.restaurar(this.mementos.pop());
    }
}