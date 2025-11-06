import Image from "next/image";

function HowItWorks() {
  return (
    <section id="how-it-works" className="text-white py-20">
      <div className="flex items-center justify-center flex-col md:flex-row-reverse md:gap-8 lg:gap-16">
        <div className="flex-1 p-8 py-16 md:p-8 flex flex-col justify-center max-w-2xl">
          <h2 className="text-2xl font-bold parag">How It Works</h2>
          <p className="mt-2 text-4xl max-w-[25ch] leading-11">
            <span className="gotham-bold grad-text">SEAMLESS INTEGRATION</span>{" "}
            <span className="merriweather-light-italic">for Your Workflow</span>
          </p>
          <p className="max-w-[50ch] mt-4 text-[#81afdd]">
            Our platform is designed to integrate seamlessly into your existing
            workflow, providing you with the tools and resources you need to
            succeed.
          </p>
        </div>

        <div className="flex-1 hidden md:flex items-center justify-center max-w-2xl">
          <Image
            src="/possibilities.png"
            alt="How It Works"
            className="w-auto h-auto"
            width={400}
            height={400}
          />
        </div>
      </div>

      <div className="mx-8 my-20 bg-zinc-900 rounded-xl text-black grad-bar">
        <div className="p-8 py-10 flex flex-col md:flex-row items-center justify-between">
          <div>
            <h4 className="font-semibold mb-6">
              Request Early Access to Get Started
            </h4>
            <p className="capitalize font-bold text-2xl">
              Register today & start exploring the Endless Possibilities.
            </p>
          </div>
          <div>
            <button className="px-12 py-3 rounded-full font-medium text-white bg-[#000]">
              Get Started
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center flex-col md:flex-row md:gap-8 lg:gap-16">
        <div className="flex-1 p-8 py-16 md:p-8 flex flex-col justify-center max-w-2xl">
          <h3 className="text-2xl parag">Why Us?</h3>
          <p className="text-4xl mt-2 max-w-[40ch] leading-11">
            <span className="merriweather-light-italic">The </span>
            <span className="gotham-bold grad-text">
              PERFECT COMBINATION
            </span>{" "}
            <span className="merriweather-light-italic">
              of Technology, Product, Talent, and Resources
            </span>
          </p>
        </div>

        <div className="flex-1 hidden md:flex items-center justify-center max-w-2xl">
          <Image src="/ball.png" alt="How It Works" width={400} height={400} />
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
