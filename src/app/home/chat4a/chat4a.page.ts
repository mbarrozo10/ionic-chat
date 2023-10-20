import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LocalNotifications } from '@capacitor/local-notifications';
import { AuthService } from 'src/app/services/auth.service';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat4a',
  templateUrl: './chat4a.page.html',
  styleUrls: ['./chat4a.page.scss'],
})
export class Chat4aPage implements OnInit {

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
      this.chatService.addChatMessage(this.mensaje, usuario, "ChatRoom4A");
      this.mensaje = undefined;
      }
    }
    ngOnInit() : void{
      this.mostrar= true;
      this.retorno= this.chatService.ObternerMensajes("ChatRoom4A");
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
        LocalNotifications.schedule({
          notifications: [
            {
              title: "Nuevo Mensaje!",
              body: this.mensajes[this.mensajes.length -1]['mensaje'],
              id:1,
              
            }
          ]
        })
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
