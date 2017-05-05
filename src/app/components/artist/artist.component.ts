import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';
import { Artist } from '../../classes/artist';
import { Album } from '../../classes/album';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  id: string;
  artist: Artist[];
  albums: Album[];


  constructor(private _spotifyService: SpotifyService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this._route.params
      .map(params => params['id'])
      .subscribe((id) => {
        this._spotifyService.getArtist(id)
          .subscribe(artist => {
            this.artist = artist;
          });

          this._spotifyService.getAlbums(id)
          .subscribe(albums => {
            this.albums = albums.items;
          });
      })
  }

}