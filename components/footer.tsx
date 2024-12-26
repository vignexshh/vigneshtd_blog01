import { GithubIcon, LinkedinIcon, TwitterIcon } from "./icon";

const Footer = () => {
  return (
    <div className="text-center flex items-center justify-center flex-col mt-8 text-sm">
      <div className="flex space-x-4 py-5">
        <a href="https://github.com/vignexshh">
          <GithubIcon />
        </a>
        <a href="https://x.com/vvgnsh">
          <TwitterIcon />
        </a>
        <a href="https://www.linkedin.com/in/vigneshtd/">
          <LinkedinIcon />
        </a>
      </div>
      <div>
        {`© 2024  `}
        <a href="https://github.com/vignexshh" className="text-blue-500">
          Vignesh T D
        </a>
      </div>
      
    </div>
  );
};

export default Footer;
