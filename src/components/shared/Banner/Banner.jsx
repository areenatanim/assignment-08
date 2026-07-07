import banner from "@/assets/cow-img.png"
import Image from "next/image";
import Link from "next/link";
import { FaRegMoon } from "react-icons/fa";
const Banner = () => {
    return (
        <div className="w-11/12 bg-slate-300 mx-auto my-10 rounded-2xl ">
            <div className="hero bg-[#1B4333] rounded-2xl min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <Image
                        src={banner}
                        alt="a cow image"
                        width={400}
                        height={400}
                        className="flex justify-center items-center"
                    >

                    </Image>
                    <div className="w-xl p-6">
                        <p className="text-xs text-[#86EFAC] flex gap-2 items-center bg-[#315648] rounded-3xl p-1 w-2xs mb-3.5">
                            <FaRegMoon />
                            Eid ul-Adha 2026 — booking now open

                        </p>
                        <h1 className="text-4xl font-bold text-white">
                            Bangladesh most trusted
                            <br />
                            <span className="text-[#86EFAC]">Qurbani livestock</span> platform
                        </h1>
                        <p className="py-6 text-[1rem] text-[#8CA199]">
                            Browse 2,400+ verified animals from local sellers. Book with a deposit, verify with photos, and complete your Qurbani with peace of mind.

                        </p>
                        <button className="btn bg-[#315648] border-0 text-[#86EFAC] ">
                            <Link href={"/allAnimals"}>All Animals</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;