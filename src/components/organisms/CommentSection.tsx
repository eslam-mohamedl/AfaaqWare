"use client";
import TitleSection from "../molecules/TitleSection";
import BoxComment from "../molecules/BoxComment";
import { dataComment } from "@/utils/data";
import { useTranslations } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
export default function CommentSection() {
  const t = useTranslations("commentSection");
  return (
    <section className="container mb-30">
      <TitleSection title={t("title")} text={t("subTitle")} isBlue={false} />
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        speed={3000}
        loop
        slidesPerView={4}
        spaceBetween={24}
        allowTouchMove={true}
        grabCursor={true}
        className="swiper-linear"
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {dataComment.map((box) => (
          <SwiperSlide key={box.id}>
            <BoxComment key={box.id} name={box.name} comment={box.comment} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
