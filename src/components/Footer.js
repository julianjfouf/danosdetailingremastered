import Title from "./subcomponents/Text/Title";
import information from "./subcomponents/Information/FooterInformation";
import Paragraph from "./subcomponents/Text/Paragraph";
import Link from "next/link";
import FooterLink from "./subcomponents/FooterLink";

export default function Footer() {
  return (
    <section className="bg-black p-6 xl:pt-0 xl:pl-0 xl:pr-0 xl:pb-24 pb-36 text-white">
      <div className="flex flex-col gap-8 xl:max-w-7xl xl:mx-auto xl:p-12">
        <Title text="Dano's Detailing" args="font-medium" />
        <div className="flex flex-wrap gap-8 xl:gap-0 xl:justify-between xl:w-full">
          <div className="flex flex-col gap-2">
            <Paragraph text={"Services"} args="font-bold mb-1" />
            <FooterLink
              service="Ceramic Coating"
              serviceHref="/ceramic-coating"
            />
            <FooterLink
              service="Paint Correction"
              serviceHref="/paint-correction"
            />
            <FooterLink
              service="Exterior Detailing"
              serviceHref="/exterior-detailing"
            />
            <FooterLink
              service="Interior Detailing"
              serviceHref="/interior-detailing"
            />
          </div>
          {information.map((section, id) => (
            <div key={id} className="flex flex-col gap-2">
              <Paragraph text={section.title} args="font-bold mb-1" />
              {section.items.map((item, id) => {
                if (item.link) {
                  return (
                    <Link key={id} href={item.href}>
                      <Paragraph text={item.item} />
                    </Link>
                  );
                } else {
                  return <Paragraph key={id} text={item.item} />;
                }
              })}
            </div>
          ))}
          <div className="flex flex-col gap-4">
            <Paragraph text="Socials" args="font-bold" />
            <div className="flex gap-3">
              <a
                aria-label="Instagram Page"
                target="_blank"
                href="https://www.instagram.com/danosmobiledetailing/"
              >
                <svg
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  className="cursor-pointer fill-neutral-300 hover:fill-white duration-300"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                </svg>
              </a>
              <a
                aria-label="Facebook Page"
                target="_blank"
                href="https://www.facebook.com/nando.zepeda.31"
              >
                <svg
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  className="cursor-pointer fill-neutral-300 hover:fill-white duration-300"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
                </svg>
              </a>
              <a
                aria-label="Tiktok Page"
                target="_blank"
                href="https://www.tiktok.com/@danosdetailing"
              >
                <svg
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  className="cursor-pointer fill-neutral-300 hover:fill-white duration-300"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"></path>
                </svg>
              </a>
              <a
                className="flex w-full h-full justify-start items-start"
                target="_blank"
                aria-label="Google Page"
                href="https://g.co/kgs/1Fvj87H"
              >
                <svg
                  strokeWidth="0"
                  viewBox="0 0 488 512"
                  className="cursor-pointer fill-neutral-300 hover:fill-white duration-300"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
