import { ConcreteMemento } from "./ConcreteMemento";
import { IOriginator } from "./IOriginator";


export class PaginaOriginator implements IOriginator{

    private _texto: string;

    constructor(){
        this.texto = "";
    }

    private set texto(valor: string){
        this._texto = valor;
    }

    private get texto(){
        return this._texto;
    }

    public escribir(texto: string){
        this.texto = texto;
    }

    public leer(){
        return this.texto;
    }

    public guardar(): ConcreteMemento{
        return new ConcreteMemento(this.texto);
    }

    public restaurar(memento: ConcreteMemento){
        this.texto = memento.getState();
    }
    
}