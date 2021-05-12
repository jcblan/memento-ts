import { expect } from 'chai';
import { PaginaOriginator } from '../src/PaginaOriginator';


describe('PaginaOriginator', () => {
   it('new PaginaOriginator debera crear PaginaOriginator sin texto', () => {
      var pagina = new PaginaOriginator();

      expect(pagina.leer()).to.equal("");
   });
   it('escribir() debera añadir el argumento a texto', () => {
      var pagina = new PaginaOriginator();

      pagina.escribir("Esto es una oración.");

      expect(pagina.leer()).to.equal("Esto es una oración.");
   });
   it('guardar() debera devolver un memento cuyo estado sea el valor de texto', () => {
      var pagina = new PaginaOriginator();

      pagina.escribir("Esto es una oración.");
      var memento = pagina.guardar();

      expect(memento.getState()).to.equal("Esto es una oración.");
   });
   it('restaurar() debera cambiar el valor de texto por el state del memento', () => {
      var pagina = new PaginaOriginator();

      pagina.escribir("Esto es una oración.");
      var memento = pagina.guardar();
      pagina.escribir("Esto es otra oración.");
      pagina.restaurar(memento);

      expect(memento.getState()).to.equal("Esto es una oración.");
      expect(pagina.leer()).to.equal("Esto es una oración.");
   });
});