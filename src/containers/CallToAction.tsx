import Link from "next/link";
import { Button } from "../components/Button";

const CallToAction = () => {
  return (
    <section className="w-full bg-gray-800">
      <div
        className="max-w-6xl mr-auto ml-auto flex items-center justify-center px-4"
        style={{ height: "500px" }}
      >
        <div>
          <p className="text-xl font-medium tracking-wider text-gray-300">
            JPG Publicidad
          </p>
          <h2 className="mt-6 text-3xl font-bold text-white md:text-5xl">
            Encuentra todo lo que necesitas para publicitar tu empresa, negocio,
            proyecto, etc...
          </h2>
          <div className="flex justify-center mt-8">
            <Link href="#about-us">
              <a>
                <Button>Saber más</Button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction
