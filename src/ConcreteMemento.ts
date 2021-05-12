import { IMemento } from "./IMemento";


export class ConcreteMemento implements IMemento{
    
    private _state: string;

    constructor(state: string){
        this.state = state;
    }

    private set state(valor: string){
        this._state = valor;
    }
    
    private get state(){
        return this._state;
    }

    public getState(){
        return this.state;
    }
    
}