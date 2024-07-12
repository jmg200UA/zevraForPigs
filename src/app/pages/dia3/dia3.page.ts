import { Component, OnInit } from '@angular/core';
import { LastfmService } from 'src/app/lastfm.service';
import { Router } from '@angular/router';
import { ZevraForPigsService } from 'src/app/zevraForPigs.service';

@Component({
  selector: 'app-dia3',
  templateUrl: './dia3.page.html',
  styleUrls: ['./dia3.page.scss'],
})
export class Dia3Page implements OnInit {
  topTracks: any[] = [];
  showTrackList: boolean = false;

  constructor(private lastfmService: LastfmService,
              private ZevraForPigsService: ZevraForPigsService,
              private router: Router) { }

  ngOnInit() {
  }

  cantantes = [
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


  //Funcion para cambiar el valor del cantante al seleccionarlo para poderlo pasar por parámetro
  cambiarCantante(cantante: string){
    this.ZevraForPigsService.setStringValue(cantante);
    this.router.navigate(['/artista']);
  }

}
