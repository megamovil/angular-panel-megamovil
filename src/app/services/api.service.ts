import { Injectable } from '@angular/core';
import {  } from '@angular/fire/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Modelo } from 'app/models/modelo';
import { AngularFireStorage } from '@angular/fire/compat/storage';
type DataInput = Object|Modelo;
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private api: AngularFirestore, private storage: AngularFireStorage) { }
  async getAll(collection: string) {
    return await this.api.collection(collection).get().toPromise();
  }
  
  async getOne(collection: string, id: string) {
    return await this.api.collection(collection).doc(id).get().toPromise();
  }

  async create(collection: string, data: DataInput) {
    try {
      
      await this.api.collection(collection).add(data);
      return true;
    } catch (error) {
      return false;
    }
  }

  async delete(collection: string, id: string) {
    try {
      await this.api.collection(collection).doc(id).delete();
      return true;
    } catch (error) {
      return false;
    }
  }

  async update(collection: string, id: string, data: DataInput) {
    return await this.api.collection(collection).doc(id).update(data);
  }
  public fileRef(fileName: string) {
    
    return this.storage.ref(fileName);
  }
  public urlRef(url:string){
    return this.storage.refFromURL(url);
  }
  public uploadFile(fileName: string, data: DataInput) {
    return this.storage.upload(fileName, data);
  }
  async updateFile(name:string,img:File,idafiliado:string,collection:string){
    var ref = this.storage.refFromURL(name);
    var task = ref.put(img);
    task.then((data)=>{
      data.ref.getDownloadURL().then(url=>{
        console.log("joel actualizado");
        this.api.collection(collection).doc(idafiliado).update({"link":url});
        // location.reload();
      })
    }).catch(e =>{console.log(e)})

    // const fileName = new Date().toISOString();
    // console.log(fileName);
    // let referencia = this.api.fileRef(fileName);
    // let tarea = await this.api.uploadFile(fileName, this.file);
    // this.afiliado.img = await referencia.getDownloadURL().toPromise();
  }
 
}
