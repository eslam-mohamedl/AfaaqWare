// type for card pricing components
import { StaticImageData } from "next/image";
export interface CardPricingProps {
  title?: string;
  description?: string;
  pricing?: number;
  features?: string[];
  highlighted?: boolean;
  period?: string;
  center?: boolean;
  btn?: string;
}
// type fro from components
export interface FormProps {
  label: string;
  placeholder?: string;
}
// type for card components
export type BgColor = "pink" | "purple" | "yellow" | "green";
export type BgBtnColor = BgColor | "primary";

export interface CardProps {
  title: string;
  description: string;
  buttonText: string;
  img: string | StaticImageData;
  bg: BgColor;
  bgBtn: BgBtnColor;
}

// type for serviceCard components
export interface ServiceCard {
  id: number;
  title: string;
  text: string;
  btn: string;
  img: StaticImageData;
  bg: BgColor;
  bgBtn: BgBtnColor;
}

// type for title section components
export interface TitleSectionProps {
  title: string;
  text: string;
  titleVariant: "primary" | "white";
  TextVariant: "primary" | "secondary";
  highlightWord?: string;
}
// type for hero section components
export interface HeroSectionProps {
  title1?: string;
  title2?: string;
  title3?: string;
  title4?: string;
  title5?: string;
  subTitle?: string;
  primaryButton?: string;
  secondaryButton?: string;
  image?: string;
  reverse?: boolean;
  className?: string;
  center?: boolean;
}
