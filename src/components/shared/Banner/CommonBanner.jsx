import Link from "next/link";
import { FaRegMoon } from "react-icons/fa";
import 'animate.css';

const CommonBanner = () => {
    return (
        <div>
            <div className="hero  min-h-1/2 bg-[#1B4333] rounded-2xl w-11/12 mx-auto ">
                <div className="hero-content text-center ">
                    <div className="w-xl p-6 ">
                        <div className="flex justify-center items-center">
                            <p className="text-xs text-[#86EFAC] flex gap-2 items-center  bg-[#315648] rounded-3xl p-1 w-2xs mb-3.5 ">
                                <FaRegMoon />
                                Eid ul-Adha 2026 — booking now open

                            </p></div>
                        <h1 className="text-4xl font-bold text-white animate__animated animate__fadeInLeft">
                            Book your
                            <br />
                            <span className="text-[#86EFAC]">Qurbani animal</span> online
                        </h1>
                        <p className="py-6 text-[.9rem] text-[#8CA199]">
                            Verified livestock from trusted sellers across Bangladesh

                        </p>
                        <button className="btn bg-[#52B788] border-0 text-white rounded-ful">
                            <Link href={"/"}>Book Now</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommonBanner;