import { Component, OnInit } from "@angular/core";

export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  {
    path: "/recargas",
    title: "Recargas",
    icon: "nc-icon nc-album-2",
    class: "",
  },
  {
    path: "/servicios",
    title: "Servicios",
    icon: "nc-icon nc-album-2",
    class: "",
  },
  // { path: "/modelos", title: "Modelos", icon: "nc-tile-56", class: "" },
  {
    path: "/sliderInicio",
    title: "Slider inicio",
    icon: "nc-icon nc-album-2",
    class: "",
  },
  {
    path: "/slidersEvento",
    title: "Slider Eventos",
    icon: "nc-icon nc-album-2",
    class: "",
  },
  {
    path: "/categoriaInicio",
    title: "Categoria Inicio",
    icon: "nc-bell-55",
    class: "",
  },
  {
    path: "/categoriaEventos",
    title: "Categoria Eventos",
    icon: "nc-single-02",
    class: "",
  },
  {
    path: "/notificaciones",
    title: "Notificaciones",
    icon: "nc-single-02",
    class: "",
  },
  {
    path: "/terminosycondiciones",
    title: "Terminos y condiciones",
    icon: "nc-single-02",
    class: "",
  },
  {
    path: "/privilegios",
    title: "Privilegios",
    icon: "nc-single-02",
    class: "",
  },
];

@Component({
  moduleId: module.id,
  selector: "sidebar-cmp",
  templateUrl: "sidebar.component.html",
})
export class SidebarComponent implements OnInit {
  public menuItems: any[];
  ngOnInit() {
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
  }
}
