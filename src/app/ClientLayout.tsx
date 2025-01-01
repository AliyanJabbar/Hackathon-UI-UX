"use client";

import { useState, useEffect, useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";
import TopHeader from "@/components/topHeader";
import Footer from "@/components/footer";
import { Suspense } from "react";
import { CartProvider } from "@/context/CartContext";
import { Inter } from "next/font/google";
import Loading from "./loading";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({ subsets: ["latin"] });

export default function ClientLayout({
  children,
}: React.PropsWithChildren<{}>) {
  const [animationClass, setAnimationClass] = useState("enter");
  const [isContentVisible, setContentVisible] = useState(true);
  const pathname = usePathname();
  const router = useRouter();
  const tileCount = 5;

  useEffect(() => {
    const handleRouteChange = () => {
      setContentVisible(false);
      setAnimationClass("exit");

      setTimeout(() => {
        router.push(pathname);

        setTimeout(() => {
          setAnimationClass("enter");
          setContentVisible(true);
        }, 1000);
      }, 1000);
    };

    handleRouteChange();
  }, [pathname, router]);

  return (
    <html lang="en">
      <body className={`${inter.className} ${animationClass} h-full bg-white`}>
        <Suspense fallback={<Loading />}>
          <CartProvider>
            {/* Tiles container */}
            <div className={`tiles-container ${animationClass}`}>
              {[...Array(tileCount)].map((_, index) => (
                <div key={index} className="tile"></div>
              ))}
            </div>

            {/* Content with conditional blur */}
            <div className={isContentVisible ? "" : "blurred"}>
              <TopHeader />
              {isContentVisible && children}
              <Footer />
            </div>

            <ScrollToTop />
          </CartProvider>
        </Suspense>
      </body>
    </html>
  );
}