import { Recarga } from "./recarga";
import { Servicio } from "./servicio";

export interface Distribuidor {
    id?: string;    
    name?: string;
    nameOfBusiness?: string;
    email?: string;
    phone?: string;
      
    password?:string;
    photo?:string;
    estado?:string;
    pServicio?: string[];
    pRecarga?: Recarga[];
    active?: boolean;
}
