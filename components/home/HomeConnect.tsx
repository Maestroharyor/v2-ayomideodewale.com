// Components
import {
  FaCloudSun,
  FaMoon,
  FaGithub,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { Tooltip } from "antd";

type Props = {};

const HomeConnect = (props: Props) => {
  const socials = [
    {
      title: "Github",
      icon: <FaGithub />,
      link: "https://github.com/MaestroHaryor",
    },
    {
      title: "LinkedIn",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/ayomide-odewale/",
    },
    {
      title: "Twitter",
      icon: <FaTwitter />,
      link: "https://twitter.com/MaestroHaryor",
    },
    {
      title: "Facebook",
      icon: <FaFacebook />,
      link: "https://web.facebook.com/ayomide.odewale.125",
    },
    {
      title: "Instagram",
      icon: <FaInstagram />,
      link: "https://instagram.com/maestroharyorjoshua",
    },
  ];

  return (
    <div className="pt-20 relative max-w-[1200px] mx-auto">
      <img
        className="w-30 m-auto mb-2"
        src="/static/doodles/lineBreak.svg"
        alt="doodle-line"
      />
      <div className="pt-14 pb-28 flex flex-col justify-center items-center">
        <div className="max-w-[600px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-3 text-primary dark:text-warning">
            Connect With Me
          </h2>
          <p className="text-xl mb-8">
            Got a question or proposal, or just want to say hello? You can
            connect with me on Social:
          </p>
          <div className="flex gap-5 text-white dark:text-dark text-3xl mb-8 justify-center flex-wrap">
            {socials.map((social) => (
              <Tooltip key={social.link} title={social.title} className="">
                <a
                  key={social.title}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  className="block text-primary hover:text-primary-hov dark:text-white dark:hover:text-warning"
                  aria-label={social.title}
                >
                  <span>{social.icon}</span>
                </a>
              </Tooltip>
            ))}
          </div>
        </div>

        <p className="mb-4 text-lg text-gray-400 dark:text-gray-600">OR</p>

        <button className="border-2 rounded-full px-20 py-2 border-primary dark:border-white text-lg font-medium text-primary dark:text-white  hover:text-dark-theme hover:border-dark-theme transition duration-400 ease-in-out dark:text-gray-200 dark:hover:text-warning dark:hover:border-warning">
          Get in Touch
        </button>
      </div>
    </div>
  );
};

export default HomeConnect;
