import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { ContainerPages } from "../components/ContainerPages";
import { HomeHeader } from "../components/HomeComponents/HomeHeader";
import { FaDiscord, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { HomeSocial } from "../components/HomeComponents/HomeSocial";
import { HomeSkills } from "../components/HomeComponents/HomeSkills";
import { useEffect } from "react";

export const Home = () => {
  useEffect(() => {
    document.title = "Maulana Personal | Home";
  }, []);
  const socialLinks = [
    {
      name: "Github",
      link: "https://github.com/MuhammadNurMaulana",
      icon: <AiFillGithub />,
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/muhammad-nur-maulana-a13a92290",
      icon: <AiFillLinkedin />,
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/ctizz4/",
      icon: <AiFillInstagram />,
    },
    {
      name: "Telegram",
      link: "https://t.me/uqs64maul",
      icon: <FaTelegram />,
    },
    {
      name: "E-Mail",
      link: "mailto:muhammadnrmaulana@gmail.com",
      icon: <AiFillMail />,
    },
    {
      name: "Discord",
      link: "https://discord.gg/pST7m8WC",
      icon: <FaDiscord />,
    },
    {
      name: "Whatsapp",
      link: "https://wa.me/+6283137446693",
      icon: <FaWhatsapp />,
    },
  ];
  return (
    <ContainerPages>
      <HomeHeader />

      <h1 className="mt-10 mb-4 font-mono text-lg font-sem">Let's Connect</h1>
      <HomeSocial items={socialLinks} />

      <HomeSkills />
    </ContainerPages>
  );
};
