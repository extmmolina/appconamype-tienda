import {
  Component,
  OnInit
} from '@angular/core';

import {
  Geolocation,
  Geoposition
} from '@ionic-native/geolocation/ngx'; // Importando la Geolocation native

import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  Environment,
  GoogleMapsAnimation,
  MyLocation
} from '@ionic-native/google-maps';
import { ModalController, ToastController } from '@ionic/angular';
import { ModalserviciosPage } from '../modalservicios/modalservicios.page';
import { HttpService } from 'src/app/services/http.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-index-servicios-mype',
  templateUrl: './index-servicios-mype.page.html',
  styleUrls: ['./index-servicios-mype.page.scss'],
})

export class IndexServiciosMypePage implements OnInit {

  titulo: string;
  map: GoogleMap;
  cedes: any[] = [];

  // tslint:disable-next-line: max-line-length
  constructor(
    public geolocation: Geolocation,
    public modalCtrl: ModalController,
    private toastService: ToastService,
    private httpService: HttpService,
    private toastCtrl: ToastController
  ) {
    this.getData();
  }

  // funcion al iniciar la pagina
  ngOnInit() {
    this.titulo = 'Servicios MYPE';
    this.geoLocationNative();
    this.loadMap();
  }

  // funcion que trae la localizacion del dispositivo
  geoLocationNative() {
    this.geolocation.getCurrentPosition().then((geoposition: Geoposition) => {
      console.log(geoposition);
    });
  }

  loadMap() {
    this.map = GoogleMaps.create('map', {
      camera: {
              target: {
                lat: 13.710567,
                lng: -89.2110524
              },
        zoom: 9,
        tilt: 30,
      },
      controls: {
        compass: false,
        zoom: true,
        myLocationButton: true,
        myLocation: true
      }
    });
    this.goToMyLocation();
  }

  goToMyLocation(){
    this.map.clear();

    // Get the location of you
    this.map.getMyLocation().then((location: MyLocation) => {
      console.log(JSON.stringify(location, null ,2));

      // Move the map camera to the location with animation
      this.map.animateCamera({
        target: location.latLng,
        zoom: 17,
        duration: 5000
      });

      //add a marker
      let marker: Marker = this.map.addMarkerSync({
        title: 'Tu ubicación actual',
        // snippet: 'sub titulo',
        position: location.latLng,
        animation: GoogleMapsAnimation.BOUNCE,
        controls: {
          compass: false,
          zoom: true,
          myLocationButton: true,
          myLocation: true
        }
      });

      //show the infoWindow
      marker.showInfoWindow();

      // If clicked it, display the alert
      marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
        this.showToast('Esta es su ubicación actual');
      });

      this.map.on(GoogleMapsEvent.MAP_READY).subscribe(
        (data) => {
            console.log("Click MAP",data);
        }
      );
    })
    .catch(err => {
      //this.loading.dismiss();
      this.showToast(err.error_message);
    });
  }

  async showToast(message: string) {
    let toast = await this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: 'middle'
    });
    toast.present();
  }

  // loadMap1() {
  //   // This code is necessary for browser
  //   Environment.setEnv({
  //     API_KEY_FOR_BROWSER_RELEASE: 'AIzaSyBXqY6w5PPsgGCR_HmyMFAcu_Hp_gOeZq8',
  //     API_KEY_FOR_BROWSER_DEBUG: 'AIzaSyBXqY6w5PPsgGCR_HmyMFAcu_Hp_gOeZq8'
  //   });

  //   marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
  //     alert('Este edificio es el de CONAMYPE Buenos Aires');
  //   });
  // }

  add() {
    this.cedes.forEach(element => {
      this.addMarket(element);
    });
  }

  getData() {
    this.httpService.get('serviciosmype').subscribe(
      (res: any) => {
        if (res.items) {
          this.cedes = res.items;
        } else {
          this.toastService.presentToast(res.message, 'danger');
        }
      },
      (error: any) => {
        this.toastService.presentToast(error.message, 'danger');
      }
    );
  }

  addMarket(cede) {
    this.map.clear();
    let marker1: Marker;

    console.log("lugar: "+ JSON.stringify(this.cedes.length));
    for (let i = 0; i < this.cedes.length; i++) {
      this.map.animateCamera({
        target: {
          lat: this.cedes[i].pos_x,
          lng: this.cedes[i].pos_y
        },
        zoom: 9,
        duration: 5000
      });
      marker1 = this.map.addMarkerSync({
        title: this.cedes[i].nombre,
        snippet: this.cedes[i].direccion,
        icon: 'red',
        position: {
          lat: this.cedes[i].pos_x,
          lng: this.cedes[i].pos_y
        },
        animation: GoogleMapsAnimation.DROP,
        controls: {
          compass: false,
          zoom: true,
          myLocationButton: true,
          myLocation: true
        }
      });
      //show the infoWindow
      marker1.showInfoWindow();
      //If clicked it, display the alert
      marker1.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
        this.showToast('Descripción del lugar - ' + this.cedes[i].nombre);
      });
  
      // this.map.on(GoogleMapsEvent.MAP_READY).subscribe(
      //   (data) => {
      //       console.log("Click MAP",data);
      //   }
      // );
    }
  }

}
