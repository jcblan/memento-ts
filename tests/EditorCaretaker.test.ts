import { expect } from 'chai';
import { EditorCaretaker } from '../src/EditorCaretaker';
import { PaginaOriginator } from '../src/PaginaOriginator';


describe('EditorCaretaker', () => {
    it('new EditorCaretaker debera crear EditorCaretaker sin mementos y pagina vacia', () => {  
       var editor = new EditorCaretaker(new PaginaOriginator());

       expect(editor.pagina.leer()).to.equal("");
       expect(editor.deshacer()).to.equal(null);
    });
    it('crearMemento() debera crear un memento con el contenido de pagina', () => {  
        var pagina = new PaginaOriginator();
        var editor = new EditorCaretaker(pagina);

        editor.pagina.escribir("Esto es una oración. ");
        editor.crearMemento();
    
        editor.pagina.escribir("Esto es otra oración. ");
        editor.deshacer();

        expect(editor.pagina.leer()).to.equal("Esto es una oración. ");
     });
});