import { Component, OnInit } from '@angular/core';
import { LastfmService } from 'src/app/lastfm.service';
import { Router } from '@angular/router';
import { ZevraForPigsService } from 'src/app/zevraForPigs.service';

@Component({
  selector: 'app-dia2',
  templateUrl: './dia2.page.html',
  styleUrls: ['./dia2.page.scss'],
})
export class Dia2Page implements OnInit {
  topTracks: any[] = [];
  showTrackList: boolean = false;

  constructor(private lastfmService: LastfmService,
              private ZevraForPigsService: ZevraForPigsService,
              private router: Router) { }

  ngOnInit() {
  }

  cantantes = [
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
    ];


  //Funcion para cambiar el valor del cantante al seleccionarlo para poderlo pasar por parámetro
  cambiarCantante(cantante: string){
    this.ZevraForPigsService.setStringValue(cantante);
    this.router.navigate(['/artista']);
  }

}
