import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ChatService } from 'src/app/services/chat.service';
import {LocalNotifications, Schedule} from '@capacitor/local-notifications'
@Component({
  selector: 'app-chat4b',
  templateUrl: './chat4b.page.html',
  styleUrls: ['./chat4b.page.scss'],
})
export class Chat4bPage implements OnInit {
  mostrar?: boolean;
  mensajes: any[] = [];
  estilo: any[] = [];
  retorno?: any;
    constructor(private chatService: ChatService, private userService: AuthService,private router: Router){}
    mensaje?: string;

    enviarMensaje(){
      if(this.mensaje !=undefined){
        console.log(this.mensaje);
      const usuario= this.userService.retornarUsuario() || "";
      this.chatService.addChatMessage(this.mensaje, usuario, "ChatRoom4B");
      this.mensaje = undefined;
      }
    }
    ngOnInit() : void{
      this.mostrar= true;
      this.retorno= this.chatService.ObternerMensajes("ChatRoom4B");
      this.retorno.subscribe((message: any)=>{
        this.mensajes=[];
        message.forEach((message:any)=>
          this.mensajes.push(message));
          this.mensajes.sort((a,b) => a['id']-b['id']);
          this.estilo=[]
          this.mensajes.forEach((x)=>{
            if(x['usuario']==this.userService.retornarUsuario()){
              x['usuario']=""
              const datos= {
              div: "app-mensajes",
              clase:  "badge text-bg color"
              }
              this.estilo.push(datos);
            }else{
              const datos= {
                div: "app-mensajesL",
                clase:  "badge text-bg-success"
                }
                this.estilo.push(datos);
            }
        })
        if(this.mensajes[this.mensajes.length -1]['usuario']!=this.userService.retornarUsuario()){
          console.log(this.mensajes[this.mensajes.length -1]['usuario'])
          LocalNotifications.schedule({
            notifications: [
              {
                title: "Nuevo Mensaje!",
                body: this.mensajes[this.mensajes.length -1]['mensaje'],
                id:1,
                
              }
            ]
          })}
      })
  
    }
    @ViewChild('chatContainer') chatContainer?: any;

    scrollChatToBottom() {
      try {
        this.chatContainer.nativeElement.scrollTop = this.chatContainer.nativeElement.scrollHeight;
      } catch (err) {
      }
    }

    ngOnDestroy() {
      this.retorno="";
    }
    ngAfterViewChecked() {
      this.scrollChatToBottom();
    }

  volver(){
    this.router.navigateByUrl('/home',{replaceUrl:true});
  }

}
