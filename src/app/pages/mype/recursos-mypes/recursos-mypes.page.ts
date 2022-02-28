import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recursos-mypes',
  templateUrl: './recursos-mypes.page.html',
  styleUrls: ['./recursos-mypes.page.scss'],
})
export class RecursosMypesPage implements OnInit {

  titulo: string;
  menu: any;
  menu_loggedOut = [
    {
      title: 'Innovación y tecnología',
      url: '/innovacion-tecnologia',
      icon: 'developer_board',
      color: 'red',
      colordark: 'reddark'
    },
    {
      title: 'Cursos y capacitaciones',
      url: '/cursos',
      icon: 'live_tv',
      color: 'orange',
      colordark: 'orangedark'
    },
    {
      title: 'Ferias y congresos',
      url: '/ferias-congresos',
      icon: 'business_center',
      color: 'purple',
      colordark: 'purpledark'
    },
    /* {
      title: 'Medio Ambiente',
      url: '/medio-ambiente',
      icon: 'eco',
      color: 'green',
      colordark: 'greendark'
    }, */
    // {
    //   title: 'Registro MyPE',
    //   url: '/registro-mype',
    //   icon: 'insert_drive_file',
    //   color: 'green',
    //   colordark: 'greendark'
    // },
    {
      title: 'Ubicaciones',
      url: '/servicios-mype',
      icon: 'map',
      color: 'yellow',
      colordark: 'yellowdark'
    },
    /* {
      title: 'Tramites MYPE',
      url: '/tramites-mype',
      icon: 'insert_drive_file',
      color: 'pink',
      colordark: 'pinkdark'
    } */
  ];

  menu_loggedIn = [
    {
      title: 'Innovación y tecnología',
      url: '/innovacion-tecnologia',
      icon: 'developer_board',
      color: 'red',
      colordark: 'reddark'
    },
    {
      title: 'Cursos y capacitaciones',
      url: '/cursos',
      icon: 'live_tv',
      color: 'orange',
      colordark: 'orangedark'
    },
    {
      title: 'Ferias y congresos',
      url: '/ferias-congresos',
      icon: 'business_center',
      color: 'purple',
      colordark: 'purpledark'
    },
    /* {
      title: 'Medio Ambiente',
      url: '/medio-ambiente',
      icon: 'eco',
      color: 'green',
      colordark: 'greendark'
    }, */
    {
      title: 'Registro MyPE',
      url: '/registro-mype',
      icon: 'insert_drive_file',
      color: 'green',
      colordark: 'greendark'
    },
    {
      title: 'Ubicaciones',
      url: '/servicios-mype',
      icon: 'map',
      color: 'yellow',
      colordark: 'yellowdark'
    },
    /* {
      title: 'Tramites MYPE',
      url: '/tramites-mype',
      icon: 'insert_drive_file',
      color: 'pink',
      colordark: 'pinkdark'
    } */
  ];

  constructor() { }

  ngOnInit() {
    this.titulo = 'Recursos para la MYPE';
    console.log(localStorage.getItem('login'));

    if (localStorage.getItem('login') != null) { 
      this.menu = this.menu_loggedIn;
    }else if (localStorage.getItem('login') === null) {
      this.menu = this.menu_loggedOut;
    }
  }

}
