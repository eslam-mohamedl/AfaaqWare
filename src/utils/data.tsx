import {
  service1,
  service2,
  service3,
  service4,
} from "../../public/assets/images/images";
import { ServiceCard } from "@/types/api.d";
export const dataServices: ServiceCard[] = [
  {
    id: 1,
    title: "servicesSection.card1.title",
    text: "servicesSection.card1.text",
    btn: "servicesSection.card1.btn",
    img: service1,
    bg: "purple",
    bgBtn: "purple",
  },
  {
    id: 2,
    title: "servicesSection.card2.title",
    text: "servicesSection.card2.text",
    btn: "servicesSection.card2.btn",
    img: service2,
    bg: "green",
    bgBtn: "green",
  },
  {
    id: 3,
    title: "servicesSection.card3.title",
    text: "servicesSection.card3.text",
    btn: "servicesSection.card3.btn",
    img: service3,
    bg: "pink",
    bgBtn: "pink",
  },
  {
    id: 4,
    title: "servicesSection.card4.title",
    text: "servicesSection.card4.text",
    btn: "servicesSection.card4.btn",
    img: service4,
    bg: "yellow",
    bgBtn: "yellow",
  },
];
