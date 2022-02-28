import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { YoutubeVideoPlayer } from '@awesome-cordova-plugins/youtube-video-player/ngx';
import { RespuestaVideosYoutube } from '../../../interfaces/interfaces';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.page.html',
  styleUrls: ['./videos.page.scss'],
})
export class VideosPage implements OnInit {

  posts: Array<any>[] = [];
  headers = new HttpHeaders();

  // tslint:disable-next-line:max-line-length
  public url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&order=date&channelId=UCayWkMYPXwMTvMMcXxDWUlw&key=AIzaSyDaFQJi6ZzLegEkyeOYKNMi71EFFaEj-kg';
  pageToken: string;

  constructor(private http: HttpClient, private youtube: YoutubeVideoPlayer) { }

  ngOnInit() {
    this.pageToken = '';
    this.fetchData();
  }

  openMyVideo(video) {
    this.youtube.openVideo(video);
  }

  fetchData<T>(event?) {
    this.headers = new HttpHeaders();

    let options = { headers: this.headers, withCredentials: false };

    this.http.get<RespuestaVideosYoutube>(this.url + '&pageToken=' + this.pageToken, options).subscribe(resp => {
      // console.log(resp);
      if (resp.items.length === 0) {
        event.target.disabled = true;
        event.target.complete();
        return;
      }

      this.posts.push(...resp.items);
      this.pageToken = resp.nextPageToken;

      if (event) {
        event.target.complete();
      }

    });
  }

  loadData(event) {
    this.fetchData(event);
  }

}
