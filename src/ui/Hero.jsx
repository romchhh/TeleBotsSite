"use client";
import React, { useEffect, useState } from "react";
import "./styles/SchoolchildrenBanner.css";
import HighlightedTextWithDots from "./styledComponents/HighlightedTextWithDots";
import "./Hero.css";

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const socialIcons = [
    { icon: "fab fa-telegram-plane", link: "https://t.me/nowayrm" },
    { icon: "fab fa-instagram", link: "#" },
    { icon: "fab fa-whatsapp", link: "#" },
    { icon: "fab fa-facebook-f", link: "#" },
    { icon: "fab fa-x-twitter", link: "#" },
  ];

  const links = [
    { text: "Чат-боти", textMobile: "Чат-боти", href: "#portfolio" },
    { text: "Веб-сайти", textMobile: "Веб-сайти", href: "#portfolio" },
    { text: "Інтеграції", textMobile: "Інтеграції", href: "#portfolio" },
    { text: "Інтернет-магазини", textMobile: "Інтернет-магазини", href: "#portfolio" },
  ];

  const linksContainer = (
    <div className="schoolchildren-banner-content-text-links">
      {links.map((link, index) => (
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
      ))}
    </div>
  );

  const bannerRightText = (
    <div className="schoolchildren-banner-right-text-container">
      <div className="schoolchildren-banner-right-text">
        <div className="schoolchildren-banner-right-text-item">Налаштовуйте автовідповіді,</div>
        <div className="schoolchildren-banner-right-text-item">Запускайте розсилки</div>
        <div className="schoolchildren-banner-right-text-item">
          І автоматизуйте бізнес-процеси за допомогою ботів
        </div>
      </div>
      <button
        className="schoolchildren-banner-right-text-btn"
        onClick={() => {
          window.open("https://t.me/nowayrm", "_blank");
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
    <div className="hero-container">
      <div className="hero-content">
        <div className="hero-left">
          <div className="social-icons-container">
            <div className="social-icons">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-wrapper"
                  data-social={social.icon.split(" ")[1]}
                >
                  <i className={`${social.icon} social-icon`}></i>
                </a>
              ))}
            </div>
          </div>

          <div className="text-content">
            <h1 className="hero-title">
              Чат-боти, сайти,<br />
              e-commerce
            </h1>
            <p className="hero-subtitle">
              Розробка телеграм ботів, сайтів,<br />
              лендінгів інтернет магазинів,<br />
              парсерів та ботів з AI на замовлення<br />
              під ключ
            </p>
            <div className="company-logo">
              <img src="/telebots.png" alt="TeleBots Logo" />
            </div>
          </div>
        </div>

        <div className="hero-right">
          <img src="/laptop.png" alt="Laptop Mockup" className="laptop-image" />
        </div>
      </div>
    </div>
  );
}