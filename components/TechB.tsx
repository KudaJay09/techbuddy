import Image from "next/image";

function TechB() {
  return (
    <section id="inspire" className="min-h-screen relative top-40 text-white">
      <div className="flex items-center justify-center flex-col md:flex-row md:gap-8 lg:gap-16">
        <div className="flex-1 p-8 py-16 md:p-8 flex flex-col justify-center max-w-2xl">
          <h2 className="text-2xl font-bold parag">TechBuddy</h2>
          <p className="mt-2 text-4xl max-w-[25ch] leading-11">
            <span className="gotham-bold grad-text">END-TO-END</span>{" "}
            <span className="merriweather-light-italic">Tool Chain for</span>{" "}
            <span className="gotham-bold">FULL-STACK SOLUTIONS.</span>
          </p>
          <p className="max-w-[50ch] mt-4 text-[#81afdd]">
            TechBuddy is your go-to platform for comprehensive tech solutions,
            offering a wide range of services from mentorship to full-stack
            development, all designed to empower your business and career in the
            tech industry.
          </p>
          <button className="px-8 w-32 mt-4  py-2 rounded-full bg-gradient-to-br from-[#040C18] to-[#040C7B] text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition border border-gray-300 duration-200">
            Contact
          </button>
        </div>

        <div className="flex-1 hidden md:flex items-center justify-center max-w-2xl">
          <Image
            src="/bot.png"
            alt="Chatbot"
            width={500}
            height={500}
            className="h-auto w-auto"
          />
        </div>
      </div>
    </section>
  );
}

export default TechB;
