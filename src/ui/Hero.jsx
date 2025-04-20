"use client";
import { useEffect, useState } from "react";

import "./styles/SchoolchildrenBanner.css";
import HighlightedTextWithDots from "./styledComponents/HighlightedTextWithDots";

export default function Hero() {
  const links = [
    {
      text: "Чат-боти",
      textMobile: "Чат-боти",
      href: "#portfolio",
    },
    {
      text: "Веб-сайти",
      textMobile: "Веб-сайти",
      href: "#portfolio",
    },
    {
      text: "Інтеграції",
      textMobile: "Інтеграції",
      href: "#portfolio",
    },
    {
      text: "Інтернет-магазини",
      textMobile: "Інтернет-магазини",
      href: "#portfolio",
    },
    
  ];
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const checkScreenSize = () => setIsMobile(window.innerWidth < 768);
      checkScreenSize();
      window.addEventListener("resize", checkScreenSize);
      return () => window.removeEventListener("resize", checkScreenSize);
    }
  }, []);

  const linksContainer = (
    <div className="schoolchildren-banner-content-text-links">
      {links.map((link, index) => {
        return (
          <div
            key={index}
            className="schoolchildren-banner-content-text-link"
            onClick={(e) => {
              e.preventDefault();
              const target = document.querySelector(link.href);
              target?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
          >
            {link.textMobile}
          </div>
        );
      })}
    </div>
  );

  const bannerRightText = (
    <div className="schoolchildren-banner-right-text-container">
      <div className="schoolchildren-banner-right-text">
        <div className="schoolchildren-banner-right-text-item">
		  Налаштовуйте автовідповіді,
        </div>
        <div className="schoolchildren-banner-right-text-item">
		  Запускайте розсилки
        </div>
        <div className="schoolchildren-banner-right-text-item">
		  І автоматизуйте бізнес-процеси
		за допомогою ботів
        </div>
      </div>
      <button
        className="schoolchildren-banner-right-text-btn"
        onClick={() => {
          window.open('https://t.me/nowayrm', '_blank');
        }}
      >
        Дізнатися більше
      </button>
    </div>
  );

  const bannerBottomText = (
    <div className="schoolchildren-banner-right-text-bottom">
      chatbots · websites · integrations
    </div>
  );

  return (
    <div className="schoolchildren-banner-container" style={{ marginTop: '100px' }}>
      <div className="schoolchildren-banner-content">
        <div className="schoolchildren-banner-content-text-header">
          розробка {isMobile ? null : <br />}
          <HighlightedTextWithDots
            colorText="#ffffff"
            colorBackground="#4a4a4a"
            colorDots="#333333"
            widthDots={isMobile ? 8 : 10}
            widthBorder={isMobile ? 3 : 4}
          >
            чат-ботів та сайтів
          </HighlightedTextWithDots>
        </div>
        {isMobile ? null : linksContainer}
        {isMobile ? null : bannerRightText}
      </div>
      <div className="schoolchildren-banner-right">
        <div className="schoolchildren-banner-right-img">
          <img
            loading="lazy"
            src="/public/Product.png"
            alt=""
          />
        </div>
        {!isMobile ? null : linksContainer}
        {isMobile ? bannerRightText : null}
        {!isMobile ? bannerBottomText : null}
      </div>
    </div>
  );
}

