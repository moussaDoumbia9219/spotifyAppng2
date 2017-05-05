import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';
import { Artist } from '../../classes/artist';
import { Album } from '../../classes/album';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  id: string;
  album: Album[];

  constructor(private _spotifyService: SpotifyService, private _route: ActivatedRoute, private _router:Router) { }

  ngOnInit() {
    this._route.params
      .map(params => params['id'])
      .subscribe((id) => {
        this._spotifyService.getAlbum(id)
          .subscribe(artist => {
            this.album = artist;
          });

      })
  }

}
