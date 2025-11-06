import Image from "next/image";

function WhyUs() {
  return (
    <section className="px-8 md:px-12 py-20">
      <div className="flex items-center justify-center flex-col md:flex-row md:gap-8 lg:gap-16">
        <div className="flex-1 p-8 py-16 md:p-8 flex flex-col justify-center max-w-2xl">
          <h3 className="text-2xl parag">Why Us?</h3>
          <p className="text-4xl mt-2 max-w-[40ch] leading-11">
            <span className="gotham-light-italic">The </span>
            <span className="gotham-bold grad-text">
              PERFECT COMBINATION
            </span>{" "}
            <span className="gotham-light-italic">
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

export default WhyUs;
