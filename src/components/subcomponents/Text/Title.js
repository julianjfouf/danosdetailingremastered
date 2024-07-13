import { Oswald } from "next/font/google";

const oswald = Oswald({ subsets: ["latin"] });

export default function Title({ text="", args="" }) {
    return (
        <h1 className={`${oswald.className} text-[36px] lg:text-6xl lg:mb-4 ${args}`}>
            {text}
        </h1>
    );
}