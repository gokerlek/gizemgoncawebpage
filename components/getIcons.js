import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const getIcon = (icons) => {
  switch (icons) {
    case "twitter":
      return FaTwitter;
    case "instagram":
      return RiInstagramFill;
    case "linkedin":
      return FaLinkedinIn;
    case "youtube":
      return FaYoutube;
    case "facebook":
      return FaFacebookF;
  }
};

const Icon = ({ purpose, link }) => {
  const IconComponent = getIcon(purpose);
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <IconComponent className="text-ggz-100 hover:text-gray-700 w-6 h-6" />
    </a>
  );
};

export default Icon;
