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
    { title: 'Bon Calso', image: 'https://www.mondosonoro.com/wp-content/uploads/2022/03/bon-calso.jpg' },
    { title: 'Depol', image: 'https://static.wixstatic.com/media/839e94_7c802ad259ed4d7aaa4789fd5da8a30a~mv2.jpg/v1/fill/w_1000,h_1000,al_c,q_85,usm_0.66_1.00_0.01/839e94_7c802ad259ed4d7aaa4789fd5da8a30a~mv2.jpg' },
    { title: 'Paula Cendejas', image: 'https://cdn.industriaworks.com/wp-content/uploads/sites/2/2021/06/PaulaCendejas.webp' },
    { title: 'Acereda', image: 'https://i.scdn.co/image/ab6761610000e5eb6a02112f479e2be2eeeb6431' },
    { title: 'Izan Llunas', image: 'https://s2.abcstatics.com/abc/www/multimedia/espana/2022/12/29/Izan_20221229182802-R3Z1ruVLvIPegZhGw0op2cO-1200x840@abc.jpg' },
    { title: 'Almacor', image: 'https://i0.wp.com/loblanc.info/wp-content/uploads/2021/03/almacor.jpg?fit=300%2C200&ssl=1' },
  ];


  //Funcion para cambiar el valor del cantante al seleccionarlo para poderlo pasar por parámetro
  cambiarCantante(cantante: string){
    this.ZevraForPigsService.setStringValue(cantante);
    this.router.navigate(['/artista']);
  }

}
