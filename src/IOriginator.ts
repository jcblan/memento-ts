import { ConcreteMemento } from "./ConcreteMemento";



export interface IOriginator{

    guardar(): ConcreteMemento;

}