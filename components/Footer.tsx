import React from "react";
import Link from "next/link";
import { FaGithub, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: <FaGithub size={32} />, name: "GitHUB", username: "@GGx321", Image:"/img/github.png", link:'https://github.com/GGx321'},
    { icon: <FaInstagram size={32} />, name: "Instagram", username: "@_.shunya", Image:"/img/insta.jpg", link:'https://www.instagram.com/_.shunya?igsh=YmZucjE4NjUzZjd0&utm_source=qr'},
  ];

  return (
    <footer className="bg-purple-950 text-white py-6 px-4 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-lg font-bold">HomeWork V3</div>

        <nav className="mt-4 md:mt-0">
          <div>All Rights Reserved © 2025</div>
        </nav>

        <div className="flex space-x-10 mt-4 md:mt-0 relative">
          {socialLinks.map((item, index) => (
            <div key={index} className="relative group">
              <div className="absolute bottom-12 -left-16 bg-purple-900 text-white text-base rounded-lg px-8 py-3 items-center justify-center space-x-4 hidden group-hover:flex group-hover:animate-fade-up group-hover:animate-ease-out">
                {item.Image && <img src={item.Image} alt={item.name} className="w-12 h-12 rounded-full" />}
                <span>{item.username}</span>
              </div>
                  <Link
                    href={item.link}
                    target="_blank"
                    className="text-white hover:text-purple-300 transition-colors duration-300"
                  >
                      {item.icon}
                  </Link>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;