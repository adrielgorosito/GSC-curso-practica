export class Suscripcion {
  constructor(
    public nombre: string,
    public apellido: string,
    public email: string,
    public telefono: number,
    public password: string,
    public notificaciones: boolean
  ) {}
}
