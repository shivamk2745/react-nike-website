import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex items-start justify-between gap-20 max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} alt="footer" height={50} width={150} />
          </a>
          <p className="leading-7 font-montserrat mt-6 text-base sm:max-w-sm text-white-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam illo
            quaerat doloribus voluptates officiis quisquam!
          </p>
          <div className="flex items-center mt-8 gap-5">
            {socialMedia.map((icon, index) => (
              <div
                key={index}
                className="flex justify-center items-center bg-white rounded-full w-12 h-12"
              >
                <img src={icon.src} alt="icon" height={24} width={24} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 flex-wrap justify-between lg:gap-10 gap-20">
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-white font-semibold font-montserrat text-2xl mb-6 leading-normal">
                {section.title}
              </h3>
              <ul>
                {section.links.map((link) => (
                  <li
                    key={link.name}
                    className="text-white-400 mt-3 leading-normal text-base font-montserrat hover:text-slate-gray"
                  >
                    <a href="/">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between text-white-400 mt-24 sm:flex-col max-sm:items-center">
        <div className="font-montserrat flex flex-1 justify-start items-center gap-2 ">
          <img
            src={copyrightSign}
            alt="copy"
            width={20}
            height={20}
            className="rounded-full"
          />
          <p>Copyright. All Right Reserved</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
