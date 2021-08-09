import React from "react";
import Image from "next/image";
import Link from "next/link";

const FooterSitemapMenu = [
  {
    name: "Menu",
    url: "/menu",
  },
  {
    name: "Categories",
    url: "/categories",
  },
  {
    name: "Specials",
    url: "/specials",
  },
  {
    name: "Sign up",
    url: "/sign-up",
  },
  {
    name: "About Us",
    url: "/about-us",
  },
  {
    name: "Contact Us",
    url: "/contact-us",
  },
];

const FooterInformationMenu = [
  {
    name: "Help Center",
    url: "/help-center",
  },
  {
    name: "Terms and Conditions",
    url: "/terms-and-conditions",
  },
  {
    name: "Privacy Policy",
    url: "/privacy-policy",
  },
  {
    name: "Refunds and Returns",
    url: "/refunds-returns",
  },
];

const FooterSocialMedia = [
  {
    icon: "instagram",
    url: "https://www.instagram.com",
  },
  {
    icon: "twitter",
    url: "https://www.twitter.com",
  },
];

const Footer = () => {
  return (
    <div className="absolute flex flex-col flex-wrap w-full px-4 py-10 md:p-10 bg-whitesmoke">
      <div className="flex justify-start">
        {/* <Image
          src="/svg/logo.svg"
          alt="logo"
          className="object-contain h-10 p-1 cursor-pointer md:h-12"
          linkType="link"
          url="/"
        /> */}
      </div>
      <div className="flex">
        <div className="flex flex-col items-start w-5/12 p-2 md:p-5">
          <div>
            <p className="text-seagreen">About Us</p>
            <p className="text-xs sm:text-sm">
              Earp is the support portal for all Earpers worldwide! Get the
              exclusive chance to be updated with the latest news and events
              about the Wynnona Earp Cast! Catch them on our latest online and
              in-person events!
            </p>
          </div>
          <div className="py-2">
            <p className="text-seagreen">Contact Us</p>
            <p className="text-xs sm:text-sm">
              <i className="mr-1 fill-current fas fa-phone-alt text-seagreen" />{" "}
              +1245789993
            </p>
            <p className="text-xs sm:text-sm">
              <i className="mr-1 fill-current text-seagreen fas fa-envelope" />{" "}
              earpersunite@worldwide
            </p>
          </div>
        </div>

        <div className="flex flex-col w-1/3 p-2 md:w-2/12 md:p-5">
          <p className="text-seagreen">Sitemap</p>
          {FooterSitemapMenu.map((value, key) => {
            return (
              <a
                key={key}
                href={value?.url}
                className="text-xs sm:text-sm hover:text-seagreen hover:underline"
              >
                {value?.name}
              </a>
            );
          })}
        </div>
        <div className="flex flex-col w-1/3 md:flex-row md:w-5/12">
          <div className="flex flex-col w-full p-2 md:w-1/2 md:p-5">
            <p className="text-seagreen">Information</p>
            {FooterInformationMenu.map((value, key) => {
              return (
                <a
                  key={key}
                  href={value?.url}
                  className="text-xs sm:text-sm hover:text-seagreen hover:underline"
                >
                  {value?.name}
                </a>
              );
            })}
          </div>
          <div className="flex flex-col w-full p-2 md:w-1/2 md:p-5">
            <p className="text-base md:text-2xl text-seagreen">
              Stay connected with Earpers Worldwide
            </p>
            <div className="flex">
              {FooterSocialMedia.map((value, key) => {
                return (
                  <a
                    key={key}
                    href={value?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center m-1 transition duration-500 rounded-full cursor-pointer w-7 h-7 md:m-2 md:w-10 md:h-10 animate--button hover:bg-seagreen bg-gainsboro"
                  >
                    <i
                      className={`fab fa-${value?.icon} fill-current text-white`}
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="pt-5 text-xs border-t sm:text-base border-nero">
        <p>Copyright © 2021 Earp Worldwide. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
