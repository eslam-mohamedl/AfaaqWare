// للصور العادية
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.gif";
declare module "*.webp";

// لل json
declare module "*.json" {
  const value: unknown;
  export default value;
}
// globals.css
declare module "*.css";

declare module "swiper/css";
declare module "swiper/css/navigation";
declare module "swiper/css/pagination";
