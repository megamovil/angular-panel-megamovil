import { Component, OnInit } from "@angular/core";

export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  {
    path: "/Perfil",
    title: "Perfil",
    icon: "nc-icon nc-album-2",
    class: "",
  },
  {
    path: "/Recargas",
    title: "Proveedores de Recargas",
    icon: "nc-icon nc-album-2",
    class: "",
  },
  {
    path: "/Servicios",
    title: "Proveedores de Servicios",
    icon: "nc-icon nc-album-2",
    class: "",
  },
  // { path: "/modelos", title: "Modelos", icon: "nc-tile-56", class: "" },
  {
    path: "/Clientes",
    title: "Clientes",
    icon: "nc-icon nc-album-2",
    class: "",
  },
  {
    path: "/Empleados",
    title: "Empleados",
    icon: "nc-icon nc-album-2",
    class: "",
  },
  {
    path: "/Distribuidores",
    title: "Distribuidores",
    icon: "nc-bell-55",
    class: "",
  },
  {
    path: "/Tienda",
    title: "Tienda",
    icon: "nc-bell-55",
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
