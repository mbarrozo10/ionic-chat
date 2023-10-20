import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, doc, getDocs, getFirestore, updateDoc } from '@angular/fire/firestore';
// import { AngularFirestore} from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  public chat: any[]= [];
  ultimoid: string= "";
 
  constructor(private firebase : Firestore) {
    this.conseguirUltimoId();
   }
  
   addChatMessage( mensaje : string, usuario: string, aula: string) { 
    this.conseguirUltimoId().then(async ()  => {
      const id= parseInt(this.ultimoid) +1
      const fecha = new Date().toString().split('G');
      const data={
        id: id,
        mensaje: mensaje,
        fecha: fecha[0],
        usuario: usuario 
      }
      const placeRef = collection(this.firebase, aula);
      await this.actualizarUltimoId(id.toString())
      addDoc(placeRef, data);
    });
  
  }
  


    ObternerMensajes(aula: string) {
    const placeRef =  collection(this.firebase, aula);
    const retorno=  collectionData(placeRef);
    return retorno;
  }

  private async actualizarUltimoId(id:string){
    const db= getFirestore();
    const docref= doc(db, "ultimoId4A", "GMenfHfYIoNk1COphOTW");
    const data={
     id: id
    }
    updateDoc(docref,data).then(docf =>{
     // console.log("ok");
    })
 }

 async conseguirUltimoId(){
  const placeRef= collection(this.firebase, 'ultimoId4A');
  const retorno = collectionData(placeRef)
  retorno.subscribe(data =>{
      for (const x in data){
          this.ultimoid= data[x]['id'];         
      }
  });
}
} 
