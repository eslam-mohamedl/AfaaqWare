"use client";
import "./[locale]/globals.css";
import dynamic from "next/dynamic";
import Link from "next/link";

// Player هيشتغل بس على الـ Client لتجنب خطأ document
const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  { ssr: false }
);

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 bg-white">
      {/* Animation */}
      <Player
        autoplay
        loop
        src="/assets/lottie/No-Data.json" // لازم يكون موجود في public/assets/lottie
        className="w-72 h-72 mb-8"
      />

      {/* العنوان */}
      <h1 className="text-4xl font-bold mb-4">404 - الصفحة غير موجودة</h1>

      {/* وصف مختصر */}
      <p className="text-gray-500 mb-6">يبدو أنك دخلت على مسار غير موجود</p>

      {/* رابط العودة */}
      <Link
        href="/"
        className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-600 transition"
      >
        العودة إلى الرئيسية
      </Link>
    </div>
  );
}
