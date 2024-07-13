import { Lato } from "next/font/google";

const lato = Lato({ weight: ['100', '300', '400', '700', '900'], subsets: ["latin"], variable: '--font-lato' });

export default function Paragraph({ text="", args="" }) {
  return (
    <p className={`text-[12px] lg:text-base ${lato.variable} ${args}`}>
      {text}
    </p>
  );
}