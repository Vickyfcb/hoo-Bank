import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div
        className={`${styles.flexStart} md:flex-row flex-col justify-start mb-8 w-full`}
      >
        <div className="flex-1 flex flex-col justify-start mr-10">
          <img src={logo} alt="logo" className="w-[150px] object-contain" />
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        <div className="flex-[1.5] w-full flex flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((footerLink) => (
            <div
              key={footerLink.key}
              className="flex flex-col ss:my-0 my-4 min-w-[150px]"
            >
              <h4 className="font-poppins font-medium text-[16px] leading-[23px] text-white">
                {footerLink.title}
              </h4>
              <ul className="list-none mt-4 flex flex-col gap-4">
                {footerLink.links.map((link, index) => (
                  <li
                    key={link.name}
                    className="font-poppins font-normal text-[14px] leading-[20px] text-dimWhite hover:text-secondary cursor-pointer "
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45]">
        <p className="font-poppins font-normal text-center text-[16px] leading-[23px] text-white">
          2023 Okokon Victor. All Rights Reserved
        </p>

        <div className="flex flex-row md:mt-0 mt-6 gap-6">
          {socialMedia.map((social, index) => (
            <img
              src={social.icon}
              alt="social"
              key={social.id}
              className={`w-[21px] object-contain cursor-pointer `}
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
