import Image from "next/image";
import { Link } from "react-scroll/modules";

const HeroSection = () => {
  return (
    <section id="home">
      <div>
        <div>
          <Image
            src="/Boy-Emoji-Avatar-PNG.png"
            alt=""
            width={300}
            height={300}
          />
        </div>
        <div>
          <h1>Hi, I'm Aabhas</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel nihil
            beatae et dolorem cum. Nemo consequatur quasi architecto, id fugiat
            ea! Cupiditate dolorem consequatur harum suscipit molestiae
            voluptate nihil maxime?
          </p>
          <Link
            to="projects"
            className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          ></Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
