import { Email, FooterData, Slogan, Socials } from "@/data";

function Footer() {
  return (
    <footer className="bg-[#031B34] mt-20">
      {/* Desktop footer */}
      <div className="text-white relative w-full justify-center hidden xl:flex flex-col">
        <div className="w-[90%] pt-12 lg:w-[96%] 2xl:w-[90%] mx-auto">
          <div className="grid items-start md:gap-6 grid-cols-[0.5fr_7fr_1fr] 2xl:gap-12">
            <div>
              <img src={"./logo.png"} width={60} height={60} />
            </div>

            <div className="grid grid-cols-5 md:gap-2 xl:gap-10 2xl:gap-14">
              {FooterData.map((item) => (
                <div key={item.title}>
                  <h4 className="font-bold">{item.title}</h4>
                  <ul className="mt-4 space-y-2">
                    {item.url.map((link) => (
                      <li key={link.text}>
                        <a
                          href={link.link}
                          className="text-gray-400 hover:underline"
                        >
                          {link.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4 ml-14">
              {Socials.map((social) => (
                <div key={social.title} className="flex items-center space-x-2">
                  <social.icon
                    size={25}
                    className="text-gray-400 hover:text-white"
                  />
                  <a
                    href={social.link}
                    className="text-gray-400 hover:underline"
                  >
                    {social.title}
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-x-32 mt-20">
            {Email.map((email, index) => (
              <div
                key={`desktop-${email.title}-${index}`}
                className="flex flex-col justify-between"
              >
                <h4 className="font-bold">{email.title}</h4>
                <p className="text-gray-400">{email.email}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center animation-slide-through pb-2 border-b overflow-hidden">
          <div className="slide-through">
            <div
              className="gotham-bold text-white"
              style={{
                whiteSpace: "nowrap",
                opacity: 0.3,
                WebkitTextStrokeWidth: "1px",
                WebkitTextStrokeColor: "#fff",
                fontSize: "118px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "normal",
                textTransform: "uppercase",
                color: "#fff",
              }}
            >
              {Slogan.text}
            </div>
          </div>
        </div>
        <p className="text-gray-400 py-2 px-6">
          &copy; {new Date().getFullYear()} TechBuddy. All rights reserved.
        </p>
      </div>

      {/* Mobile responsive footer */}
      <div className="xl:hidden p-4">
        <div className="flex flex-col">
          <div className="flex justify-between items-center border-b pb-4">
            <img src={"./logo.png"} width={60} height={60} />

            <div className="flex gap-4 ml-4">
              {Socials.map((social) => (
                <a
                  key={social.title}
                  href={social.link}
                  className="text-gray-400 hover:text-white"
                >
                  <social.icon size={35} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-rows-4 space-y-6 my-6">
          {Email.map((email, index) => (
            <div
              key={`mobile-${email.title}-${index}`}
              className="flex flex-col justify-between nth-[4]:justify-start"
            >
              <h4 className="font-bold">{email.title}</h4>
              <p className="text-gray-400">{email.email}</p>
            </div>
          ))}
        </div>

        <p className="text-gray-400 border-t py-1 text-center">
          &copy; {new Date().getFullYear()} TechBuddy. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
export default Footer;
