import { Tema } from "./Tema"
import { Usuario } from "./Usuario"

export class Postagem
{
    public id: number
    public foto: string
    public titulo: string
    public texto: string
    public data: Date
    public usuario: Usuario
    public tema: Tema
}
