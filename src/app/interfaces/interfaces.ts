export interface GridMenu {
    title: string;
    url: string;
    icon: string;
    color: string;
    colordark: string;
}

export interface RespuestaVideosYoutube {
    items: Array<any>[];
    nextPageToken: string;
}

export interface NuevosProductos {
    producto_id: number;
    nombre: string;
    precio: any;
    url_foto: string;
    precio_promocion: any;
    tipo_producto_id: any;
}

export interface Productos {
    producto_id: number;
    nombre: string;
    precio: any;
    url_foto: string;
    precio_promocion: any;
}

export interface MenuList {
    tipo_curso_id: number;
    nombre: string;
    descripcion: string;
    imagen: string;
}

export interface User {
    nombreusuario: string;
    correo: string;
    access_token: string;
}

export interface Blog {
    innovacion_tecnologia_id: number;
    nombre: string;
    descripcion: string;
    url_foto: string;
    url_noticia: string;
}

export interface TipoAsociacion {
    tipo_asociacion_id: number;
    nombre: string;
}

export interface Departamento {
    departamento_id: number;
    nombre: string;
}

export interface Municipio {
    municipio_id: number;
    departamento_id: number;
    nombre: string;
}

export interface CIIU {
    ciiu_id: number;
    nombre: string;
    codigo: string;
    padre: number;
    raiz_id: number;
}

export interface AuthUser {
    p_id: string;
    nombre: string;
    correo: string;
    access_token: string;
    empresa_id: string;
}

export interface Marca {
    marca_id: number;
    nombre: string;
}

export interface TipoProducto {
    tipo_producto_id: number;
    nombre: string;
    descipcion: string;
}

export interface Producto {
    producto_id: number;
    tipo_producto_id: string;
    nombre_tipo_producto: string;
    marca_id: string;
    nombre_marca: string;
    nombre: string;
    descripcion: string;
    precio: number;
    precio_promocion: number;
    url_foto: string;
}
