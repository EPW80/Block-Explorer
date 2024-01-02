import { AiFillTwitterSquare, AiFillLinkedin, AiFillGithub } from "react-icons/ai";

function Footer() {
  return (
    <footer className="flex px-24 py-6 bg-white text-center items-center border-t">
      <p className="mr-auto text-lg">2023 Erik Williams</p>
      <div className="flex items-center w-1/6 justify-between">
        <p className="text-xl"></p>
        {/* Updated color codes */}
        <a href="https://twitter.com/EPWillz" target="_blank" rel="noopener noreferrer">
          <AiFillTwitterSquare size="36" color="#1DA1F2" /> {/* Twitter: Lighter Blue */}
        </a>
        <a href="https://www.linkedin.com/in/erik-parra-williams/" target="_blank" rel="noopener noreferrer">
          <AiFillLinkedin size="36" color="#0077B5" /> {/* LinkedIn: Standard Blue */}
        </a>
        <a href="https://www.github.com/EPW80" target="_blank" rel="noopener noreferrer">
          <AiFillGithub size="36" color="#000000" /> {/* GitHub: Black */}
        </a>
      </div>
    </footer>
  );
}

export default Footer;
