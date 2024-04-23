import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Anasayfa",
    path: "/",
    newTab: false,
  },
  {
    id: 4,
    title: "BMW",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "1 Serisi",
        path: "/bmw/1-serisi",
        newTab: false,
      },
      {
        id: 42,
        title: "2 Serisi",
        path: "/bmw/2-serisi",
        newTab: false,
      },
      {
        id: 43,
        title: "3 Serisi",
        path: "/bmw/3-serisi",
        newTab: false,
      },
      {
        id: 44,
        title: "4 Serisi",
        path: "/bmw/4-serisi",
        newTab: false,
      },
      {
        id: 45,
        title: "5 Serisi",
        path: "/bmw/5-serisi",
        newTab: false,
      },
      {
        id: 46,
        title: "6 Serisi",
        path: "/bmw/6-serisi",
        newTab: false,
      },
      {
        id: 47,
        title: "7 Serisi",
        path: "/bmw/7-serisi",
        newTab: false,
      },
      {
        id: 48,
        title: "8 Serisi",
        path: "/bmw/8-serisi",
        newTab: false,
      },
    ],
  },
  {
    id: 34,
    title: "VAG",
    newTab: false,
    submenu: [
      {
        id: 51,
        title: "Audi",
        path: "/audi",
        newTab: false,
      },
      {
        id: 52,
        title: "Volkswagen",
        path: "/volkswagen",
        newTab: false,
      },
      {
        id: 53,
        title: "Cupra",
        path: "/cupra",
        newTab: false,
      },
      {
        id: 54,
        title: "Skoda",
        path: "/skoda",
        newTab: false,
      },
      {
        id: 55,
        title: "Seat",
        path: "/seat",
        newTab: false,
      },
    ],
  },
  {
    id: 33,
    title: "MERCEDES",
    path: "/mercedes",
    newTab: false,
  },
  {
    id: 3,
    title: "İletişim",
    path: "/iletisim",
    newTab: false,
  },
];
export default menuData;
