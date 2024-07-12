import { Component, OnInit } from '@angular/core';
import { LastfmService } from 'src/app/lastfm.service';
import { Router } from '@angular/router';
import { ZevraForPigsService } from 'src/app/zevraForPigs.service';

@Component({
  selector: 'app-dia1',
  templateUrl: './dia1.page.html',
  styleUrls: ['./dia1.page.scss'],
})
export class Dia1Page implements OnInit {
  topTracks: any[] = [];
  showTrackList: boolean = false;

  constructor(private lastfmService: LastfmService,
              private ZevraForPigsService: ZevraForPigsService,
              private router: Router) { }

  ngOnInit() {
  }

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
     ];


  //Funcion para cambiar el valor del cantante al seleccionarlo para poderlo pasar por parámetro
  cambiarCantante(cantante: string){
    this.ZevraForPigsService.setStringValue(cantante);
    this.router.navigate(['/artista']);
  }

}
