import { BiSolidDownload } from "react-icons/bi";
import { cv } from "../assets";
import MainImg from "../assets/profile-pic (11).png";
import { styles } from "../styles";
import { BiLogoFacebookCircle, BiLogoLinkedin, BiLogoInstagram, BiLogoGithub } from "react-icons/bi";
import { Link } from "react-router-dom";

const Hero = () => {

  const downloadConfirmation = () => {
    const confirmed = window.confirm('Are you sure you want to download this file?');
    return confirmed;
  };

  const handleDownload = (event) => {
    if (!downloadConfirmation()) {
      event.preventDefault(); // Prevent the default download behavior
      console.log('Download canceled.');
    } else {
      console.log('Downloading file...');
    }
  };

  return (
    <section className='relative w-full h-screen-3/4 mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]"></div>
          <div className="w-1 sm:h-80 h-40 violet-gradient"></div>
        </div>
        <div className="flex w-full justify-between flex-wrap">
          <div>
            <h1 className={`${styles.heroHeadText}`}>Hi, I am <span className='text-[#915eff]'>Sanyog</span></h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>Sculpting Digital Experiences <br className='sm:block hidden' /><br className='sm:hidden block' />| Frontend Developer | UI/UX Designer</p>
            <a href={cv} onClick={handleDownload} download="curriculum-vitae.pdf"   className="inline-flex  gap-2 items-center bg-[#915eff] mt-12 ps-4 pe-5 py-3 rounded"><BiSolidDownload />Download CV</a>
          </div>
          <div className="max-lg:w-full">
            <img className="max-lg:w-48 max-sm:mt-10 mx-auto w-full max-w-xs  sm:mt-12" src={MainImg} alt={MainImg} />
          </div>
        </div>
        <div className="max-sm:text-2xl max-sm:bottom-1 start-18 bottom-0 absolute socials flex flex-col gap-y-5 text-4xl">
          <Link to="https://www.linkedin.com/in/sanyog-rajbhandari/" target="_blank">
            <BiLogoLinkedin className='text-secondary hover:text-white' />
          </Link>
          <Link to="https://github.com/sanyog-senpai" target="_blank">
            <BiLogoGithub className='text-secondary hover:text-white' />
          </Link>
          <Link to="https://www.facebook.com/sanyog.rajbhandari" target="_blank">
            <BiLogoFacebookCircle className='text-secondary hover:text-white' />
          </Link>
          <Link to="https://www.instagram.com/sanyog.senpai" target="_blank">
            <BiLogoInstagram className='text-secondary hover:text-white' />
          </Link>
        </div>
      </div>

    </section>

  )
}

export default Hero