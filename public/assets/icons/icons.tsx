import { Icon } from "@iconify/react";
import type { ComponentProps } from "react";

type IconProps = Omit<ComponentProps<typeof Icon>, "icon">;
const FaFacebookF = (props: IconProps) => (
  <Icon icon="fa-brands:facebook-f" {...props} />
);
const FaLinkedinIn = (props: IconProps) => (
  <Icon icon="mdi:linkedin" {...props} />
);
const FaWhatsapp = (props: IconProps) => (
  <Icon icon="fa-brands:whatsapp" {...props} />
);

export { FaFacebookF, FaLinkedinIn, FaWhatsapp };
