export class Pila<T> {
  protected elementos: T[] = [];

  public agregarElemento(elemento: T): void {
    this.elementos.push(elemento);
  }

  public quitarElemento() {
    this.elementos.pop();
  }

  public getCantidadElementos(): number {
    return this.elementos.length;
  }
}
