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
    { title: 'Bon Calso', image: 'https://www.mondosonoro.com/wp-content/uploads/2022/03/bon-calso.jpg' },
    { title: 'Depol', image: 'https://static.wixstatic.com/media/839e94_7c802ad259ed4d7aaa4789fd5da8a30a~mv2.jpg/v1/fill/w_1000,h_1000,al_c,q_85,usm_0.66_1.00_0.01/839e94_7c802ad259ed4d7aaa4789fd5da8a30a~mv2.jpg' },
    { title: 'Paula Cendejas', image: 'https://cdn.industriaworks.com/wp-content/uploads/sites/2/2021/06/PaulaCendejas.webp' },
    { title: 'Acereda', image: 'https://i.scdn.co/image/ab6761610000e5eb6a02112f479e2be2eeeb6431' },
    { title: 'Izan Llunas', image: 'https://s2.abcstatics.com/abc/www/multimedia/espana/2022/12/29/Izan_20221229182802-R3Z1ruVLvIPegZhGw0op2cO-1200x840@abc.jpg' },
    { title: 'Almacor', image: 'https://i0.wp.com/loblanc.info/wp-content/uploads/2021/03/almacor.jpg?fit=300%2C200&ssl=1' },
    { title: 'Trueno', image: 'data:image/jpeg;base64,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' },
    { title: 'Ayax y Prok', image: 'https://conciertos.club/doc/a/2017/a_ayaxyprok.jpg' },
    { title: 'Saiko', image: 'https://static.tomaticket.es/img/artista_imagen/39886-desc-saiko.jpg' },
    { title: 'Juancho Marqués', image: 'https://www.hhgroups.com/imagenes/artistas/juancho-marques-suite-soprano.jpg' },
    { title: 'Marlon', image: 'data:image/jpeg;base64,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' },
    { title: 'Dillom', image: 'https://indiehoy.com/wp-content/uploads/2021/02/dillom.jpg' },
    { title: 'Álvaro de Luna', image: 'https://imagenes.heraldo.es/files/og_thumbnail/uploads/imagenes/2022/11/02/alvaro-de-luna-en-uno-de-sus-videoclips.jpeg' },
    { title: 'Leo Rizzi', image: 'https://i.scdn.co/image/ab6761610000e5ebb5ccecbed9f9d17c1ef6b54a' },
    { title: 'Bely Basarte', image: 'https://d3iln1l77n73l7.cloudfront.net/couch_images/attachments/000/084/232/original/belybasarte.jpg?2020' },
    { title: 'Walls', image: 'https://highxtar.com/wp-content/uploads/2022/05/highxtar-walls-una-de-las-propuestas-musicales-mas-interesantes-destacada.jpg' },
    { title: 'Sofía Ellar', image: 'https://www.lavanguardia.com/files/og_thumbnail/uploads/2019/03/25/5fa5177308b04.jpeg' },
    { title: 'Juseph', image: 'https://i.scdn.co/image/ab6761610000e5eb437935a9e64f1d58139e279d' },
    { title: 'Jedet', image: 'https://cdn.industriaworks.com/wp-content/uploads/sites/2/2021/06/PaulaCendejas.webp' },
    { title: 'Fabbio', image: 'https://img2.rtve.es/imagenes/fabbio-presenta-se-parezca-playz/1647962108002.jpg' },
    { title: 'Yarea', image: 'https://yt3.googleusercontent.com/P9perG8WAf6gONR8Mq2mHjJMjBJ1IS7oR6J1VAUGFuPztVyfIvXBBlbkgQ9Agdnx-sG0fbBB=s900-c-k-c0x00ffffff-no-rj' },
    { title: 'Safree', image: 'https://resources.tidal.com/images/f169e763/e41f/473b/bdab/a611a06cd542/750x750.jpg' },
    { title: 'Blvck Seal', image: 'https://i.scdn.co/image/ab67706c0000da84967b4af1f896da1217ff6dbc' },
    { title: 'Bizarrap', image: 'https://s1.abcstatics.com/abc/www/multimedia/play/2023/06/29/bizarrap_20230629173008-RUAgdAY413moo3US70riTQM-366x256@abc.jpg' },
    { title: 'Bad Gyal', image: 'https://phantom-marca.unidadeditorial.es/9062d6960dfb85ac020e3f4acdac1ff6/resize/828/f/jpg/assets/multimedia/imagenes/2023/06/08/16862266762736.jpg' },
    { title: 'Danny Ocean', image: 'https://www.getin.es/wp-content/uploads/2022/02/Danny01981-scaled-2-e1662648675739.jpg' },
    { title: 'Funzo & Baby Loud', image: 'https://www.lavozdegalicia.es/default/2022/07/14/00121657821062282182547/Foto/H14L2057.jpg' },
    { title: 'Lali', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Lali_47st_2021.jpg/640px-Lali_47st_2021.jpg' },
    { title: 'Ptazeta', image: 'https://dynamicmedia.livenationinternational.com/Media/i/x/l/b6c199be-ecca-4f85-8b95-12d9cdee049c.jpg' },
    { title: 'Taburete', image: 'https://imagenes.elpais.com/resizer/ovuYzKAC9ak6EE_G-isyqYqPYAY=/414x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/SM62HQKL652RYH4AHIPJQTHWVA.jpg' },
    { title: 'Jaime Lorente', image: 'https://imagenes.20minutos.es/files/og_thumbnail_1900/uploads/imagenes/2021/09/01/jaime-lorente-6.jpeg' },
    { title: 'Maikel Delacalle', image: 'https://elapuron.com/media/2020/02/post/Progama-los-Indianos-crop.jpg' },
    { title: 'Pole', image: 'https://www.encastillalamancha.es/wp-content/uploads/2022/02/pole.-portada.jpg' },
    { title: 'Daviles de Novelda', image: 'https://album.mediaset.es/eimg/10000/2022/02/18/clipping_714NGd_44a9.jpg?w=1200&h=900' },
    { title: 'Rojuu', image: 'https://www.beatburguer.com/wp-content/uploads/2019/12/rojuu__1920x964-1024x737.jpg' },
    { title: 'Ly Raine', image: 'https://s3.ppllstatics.com/lasprovincias/www/multimedia/202208/31/media/cortadas/DSC_0349%20-%202-R3HnAWU6fUn7Wa0k50gn2QL-1248x770@Las%20Provincias.jpg' },
    { title: 'Meler', image: 'https://s3.ppllstatics.com/lasprovincias/www/multimedia/202212/20/media/cortadas/meler-kmDB-U19019339036R6B-1248x770@Las%20Provincias.jpg' },
    { title: 'The Otter Gang', image: 'https://houseandujar.files.wordpress.com/2018/03/the-otter-gang-poster.jpg?w=1070&h=747&crop=1' },
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
