import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Logo from "./Assets/Images/TerapiniSec_Blue_Transparent.png";

export default function Home() {
  return (
    <div className="w-full h-[100vh] backdrop-blur-md">
      <div className="flex flex-col items-center justify-center ">
        <Image src={Logo} alt="logo" className="w-[30%] h-[30%]" />
        <h1 className="text-accentLight font-extrabold text-4xl m-5">
          TerapiniSeç Çok Yakında!
        </h1>
        <h2 className="text-accentLight font-medium text-2xl m-5">
          Ruhsal sağlığınız için hazırladığımız yeni platformla kısa süre içinde
          buluşacaksınız.
        </h2>
      </div>
      <div className="flex items-center justify-center bottom-0">
        <h1 className="text-accentLight text-lg">
          © 2024 TerapiniSeç. Tüm Hakları Saklıdır.
        </h1>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            className="text-2xl text-accentLight"
          />
        </a>
      </div>
    </div>
  );
}
