import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { PiTiktokLogoLight } from "react-icons/pi";
import { AiFillInstagram } from "react-icons/ai";
import { BiLogoTiktok } from "react-icons/bi";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Figma Web",
  description: "this is made for figma layout practice",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html>
        <body>
          {children}

          <footer
            className="h-[814.87px] bg-black flex flex-col items-center gap-y-[32px] px-[32px] py-[48px]">
            <div className="fdiv w-[311px]  h-[662.87px] flex flex-col gap-y-[32px] ">
              <div className="topdiv   w-[311px] h-[86.87px] flex flex-col gap-y-[16px] items-center justify-center font-bold">
                <h1 className="text-white text-[25px]">cyber</h1>
                <p className="font-semibold text-[white] leading-[20px] text-[13px] text-center ">
                  We are a residential interior design firm located in <br />
                  Portland. Our boutique-studio offers more than
                </p>{" "}
              </div>
              <div className="bdiv w-[311px] h-[544px] flex flex-col gap-y-[32px] ">
                <div className="div1 h-[256px] w-[311px] flex flex-col items-center gap-y-[8px] text-center  ">
                  <h1 className="text-white text-[16px] font-semibold leading-[16px] ">
                    Services
                  </h1>
                  <h2 className="text-[#CFCFCF] leading-[32px] text-[14px] ">
                    Bonus program
                  </h2>
                  <h2 className="text-[#CFCFCF] leading-[32px] text-[14px] ">
                    Gift cards
                  </h2>
                  <h2 className="text-[#CFCFCF] leading-[32px] text-[14px] ">
                    Credit and payment
                  </h2>
                  <h2 className="text-[#CFCFCF] leading-[32px] text-[14px] ">
                    Service contracts
                  </h2>
                  <h2 className="text-[#CFCFCF] leading-[32px] text-[14px] ">
                    Non-cash account
                  </h2>
                  <h2 className="text-[#CFCFCF] leading-[32px] text-[14px] ">
                    Payment
                  </h2>
                </div>

                <div className="div2 h-[256px] w-[311px] flex flex-col items-center gap-y-[8px] text-center ">
                  <h1 className="text-white text-[16px] font-semibold leading-[16px] ">
                    Assistance to the buyer
                  </h1>
                  <h2 className="text-[#CFCFCF] leading-[32px] text-[14px] ">
                    Find an order
                  </h2>
                  <h2 className="text-[#CFCFCF] leading-[32px] text-[14px] ">
                    Terms of delivery
                  </h2>
                  <h2 className="text-[#CFCFCF] leading-[32px] text-[14px] ">
                    Exchange and return of goodst
                  </h2>
                  <h2 className="text-[#CFCFCF] leading-[32px] text-[14px] ">
                    Guarantee
                  </h2>
                  <h2 className="text-[#CFCFCF] leading-[32px] text-[14px] ">
                    Frequently asked questions
                  </h2>
                  <h2 className="text-[#CFCFCF] leading-[32px] text-[14px] ">
                    Terms of use of the site
                  </h2>
                </div>
              </div>
            </div>
            <div className="lastdiv w-[200px] h-[24px] flex justify-evenly text-[20px] text-white "><a href="#"><FaTwitter /></a>
            <a href="#" ><FaFacebookF /></a>
            <a href="#"><BiLogoTiktok /></a>
            <a href="#"><AiFillInstagram  className="text-white"/></a></div>  
          </footer>
        </body>
      </html>
    </>
  );
}
