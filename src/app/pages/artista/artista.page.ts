import { Component, OnInit } from '@angular/core';
import { LastfmService } from 'src/app/lastfm.service';
import { Router } from '@angular/router';
import { ZevraForPigsService } from 'src/app/zevraForPigs.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.page.html',
  styleUrls: ['./artista.page.scss'],
})
export class ArtistaPage implements OnInit {
  topTracks: any[] = [];
  showTrackList: boolean = false;
  cantante: string = "";
  artista: any;
  topYT: any[] = [];
  youtubeLink: string = 'https://www.youtube.com/watch?v=FRthkpJ_NFo&ab_channel=Duki';
  previewUrl: string[] = [];
  indice = 0;
  youtubeID: any[] = [];

  //Array cantantes
  cantantes = [
    { title: 'Manuel Turizo', image: 'https://cdn.wegow.com/media/artists/manuel-turizo/manuel-turizo-1712507936.1429634.jpg' },
    { title: 'Beret', image: 'https://estaticos-cdn.prensaiberica.es/clip/4a3b45c0-8a3a-42e0-9843-ba56de1e0546_16-9-discover-aspect-ratio_default_0.jpg' },
    { title: 'Dei V', image: 'https://akamai.sscdn.co/uploadfile/letras/fotos/9/2/2/0/9220342451de0f34a1be2e2a97a51fcd.jpg' },
    { title: 'Juan Magan', image: 'https://www.elconfidencialdigital.com/media/elconfidencialdigital/images/2023/04/14/2023041412162050946.jpg' },
    { title: 'Hard Gz', image: 'https://www.salarazzmatazz.com/storage/concerts/bolosabril/hardgzweb.jpg' },
    { title: 'Maikel Delacalle', image: 'https://portal.cajadeburgos.com/images/Foto%20portal%20Maikel.PNG' },
    { title: 'Marlon', image: 'https://www.getin.es/wp-content/uploads/2022/05/Foto-oficial-2022-2-scaled-e1662647101466.jpg' },
    { title: 'Dj Nano', image: 'https://img.europapress.es/fotoweb/fotonoticia_20190613085942_1200.jpg' },
    { title: 'Lucho Rk', image: 'https://photos.bandsintown.com/large/16427591.jpeg' },
    { title: 'Pol 3.14', image: 'https://static.wixstatic.com/media/c5417b_798a6f0c7f3341b6ad30816e476c9e52~mv2.jpeg/v1/fill/w_560,h_472,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Cartel.jpeg' },
    { title: 'Raul Clyde', image: 'https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2024/04/18/17134339450667.jpg' },
    { title: 'Vicco', image: 'https://image.europafm.com/clipping/cmsimages02/2023/01/26/94E2DE18-6586-42B2-ADF7-3CB129179697/vicco_104.jpg?crop=1277,1277,x324,y0&width=1200&height=1200&optimize=low&format=webply' },
    { title: 'Myke Towers', image: 'https://concertmusicfestival.com/wp-content/uploads/2023/12/Myke_Towers_CMF24_1000x1000px.jpg' },
    { title: 'Rels B', image: 'https://www.cruillabarcelona.com/wp-content/uploads/2021/04/Rels-B-quadrada.jpeg' },
    { title: 'Yandel', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh2MaX7cuULlnGl03pVkGvtP634tI5s5Mk1g&s' },
    { title: 'Omar Montes', image: 'https://yt3.googleusercontent.com/t1BhIHJIbxS8BtZE9nqfJdmS2LEpwNA1h2ytrA9e4y5f9jDkBTXMy8_jTEjG3EsilZEZVQmt=s900-c-k-c0x00ffffff-no-rj' },
    { title: 'La Oreja de Van Gogh', image: 'https://i.scdn.co/image/ab6761610000e5ebc9ea82332c05d870ce3cfe6e' },
    { title: 'Kidd Keo', image: 'https://lastfm.freetls.fastly.net/i/u/avatar170s/9ea61a703767dc5d75c916d1cb61f149' },
    { title: 'Lit Killah', image: 'https://yt3.googleusercontent.com/C9swZfBiSSz4lqOzobB2RDbedvNLlgwZALgyX6-EVZEpzi6q0IsypCFgiwSqcLWAPS1VTNa_=s900-c-k-c0x00ffffff-no-rj' },
    { title: 'Rayden', image: 'https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2023/07/07/16887090465204.jpg' },
    { title: 'Aissa', image: 'https://cdns-images.dzcdn.net/images/artist/3c6288409c1908d0de2c1a26c2ee7aca/1900x1900-000000-80-0-0.jpg'},
    { title: 'Amygdala', image: 'https://i.scdn.co/image/ab6761610000e5eb11ef90af4a0e3e1a04a14ecd' },
    { title: 'Buxxi', image: 'https://www.theaudiodb.com/images/media/artist/thumb/urqwyr1547545644.jpg' },
    { title: 'Henry Mendez', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Henry_mendez1_%28cropped%29.jpg/220px-Henry_mendez1_%28cropped%29.jpg' },
    { title: 'Lorna', image: 'https://i.scdn.co/image/ab6761610000e5eb5026600e4b3c3ea56461e677' },
    { title: 'Maluma', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Maluma_-_Espa%C3%A7o_das_Am%C3%A9ricas_%2837591053894%29.jpg/640px-Maluma_-_Espa%C3%A7o_das_Am%C3%A9ricas_%2837591053894%29.jpg' },
    { title: 'Saiko', image: 'https://album.mediaset.es/eimg/2024/01/15/saiko_6f67.jpg?w=1200&h=900' },
    { title: 'JC Reyes', image: 'https://www.diarioarea.com/wp-content/uploads/2023/08/d9514a_112eae0e27b04d109757a3c8a44bc3a0mv2-480x500.webp' },
    { title: 'Nicki Nicole', image: 'https://www.cmtv.com.ar/imagenes_artistas/2571.webp?Nicki%20Nicole' },
    { title: 'Funzo & Baby Loud', image: 'https://www.lavozdegalicia.es/default/2022/07/14/00121657821062282182547/Foto/H14L2057.jpg' },
    { title: 'La Pegatina', image: 'https://yt3.googleusercontent.com/UD-Tic3lCKL9LzGdkJM-IawjcNlq-aUuEZbg07Z3VsbkVLnRa3pMBrluUpb7-Uh4jKZfqPJGVw=s900-c-k-c0x00ffffff-no-rj' },
    { title: 'Recycled J', image: 'https://images.ecestaticos.com/SX5kmGJx8yKtlSSXlHmT_xvcnic=/0x0:1829x1268/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fc4b%2F424%2F1bb%2Fc4b4241bbf9440998cbd597e762ed11a.jpg' },
    { title: 'José de Rico', image: 'https://yt3.googleusercontent.com/wgNNzeR-hDo5R_7UM-N1UCwvDvtZXCSIoZ1qC5Wr1o7XCeZZ3UhiKeD41qDGKvzdVM9LhiXrcg=s900-c-k-c0x00ffffff-no-rj' },
    { title: 'Lírico en la Casa', image: 'https://cdns-images.dzcdn.net/images/artist/238ae789bc5df33d9a92ed39365e8e46/500x500.jpg' },
    { title: 'Malmö 040', image: 'https://applications-media.feverup.com/image/upload/f_auto,w_550,h_550/fever2/plan/photo/0a554f60-4eaa-11ec-9fe9-deae6e3fa2a3.jpg' },
    { title: 'Nil Moliner', image: 'https://eurovision-spain.com/wp-content/uploads/fly-images/48850/03092019_115034_Nil-2_grande-3200x1680-c.jpg' },
    { title: 'Reality', image: 'https://i.scdn.co/image/ab6761610000e5ebcf3993ec9397b9307a6b5abf' },
   ];

  visibilidad =[
    {visible: "Mostrar"},
    {visible: "Mostrar"},
    {visible: "Mostrar"},
    {visible: "Mostrar"},
    {visible: "Mostrar"}
  ]


  constructor(private lastfmService: LastfmService,
              private ZevraForPigsService: ZevraForPigsService,
              private router: Router,
              private sanitizer: DomSanitizer,
              private http: HttpClient) { }

  //Booleano para cargar los contenidos solo 1 vez
  dataLoaded = false;

  ngOnInit() {
    if (!this.dataLoaded) {
      //Coger nombre y foto artista
      this.cantante = this.ZevraForPigsService.getStringValue();
      console.log('Entra en artista con: ', this.cantante);

      this.artista = this.cantantes.find(
        (item) => item.title === this.cantante
      );
      console.log('Artista encontrado: ', this.artista);

      //Llamadas servicios
      this.lastfmService
        .getTopTracks(this.cantante)
        .then((tracks) => (this.topTracks = tracks))
        .then(() => {
          console.log("Top tracks al entrar: ", this.topTracks);

          for(let i=0; i<this.topTracks.length;i++){
            // Funcion Deezer (comentamos para prod por las CORS)
            // this.lastfmService
            //   .getTrack(this.topTracks[i].name)
            //   .then((trackData) => this.previewUrl[i]=trackData.data[0].preview)
            //   .catch((error) => console.error(error));


            // Funcion YT
            this.lastfmService
              .getYT(this.cantante + this.topTracks[i].name)
              .then((track) => this.topYT[i] = track)
              .then(() => {
                this.youtubeID[i] =this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + this.topYT[i].items[0].id.videoId);
              })
              .catch((error) => console.error(error));
          }


          //console.log("Preview array :", this.previewUrl);
          console.log('Top YT: ', this.topYT);
          console.log('Enlaces de VideosId: ', this.youtubeID);
        })
        .catch((error) => console.error(error));

      this.dataLoaded = true;
    }
  }

  videoVisible: boolean = false;
  buttonLabel: string = 'Mostrar Video';

  toggleVideo(event: any) {
    const idBotonClicado = event.target.id;
    console.log("Boton clickado: ", idBotonClicado);
    if(this.visibilidad[idBotonClicado].visible== "Ocultar"){
      this.visibilidad[idBotonClicado].visible = "Mostrar";
    }
    else this.visibilidad[idBotonClicado].visible = "Ocultar";
    console.log("Estado visibilidad boton ", idBotonClicado, " es : ", this.visibilidad[idBotonClicado].visible);
  }
}
