import Image from "next/image";
import Link from "next/link";

const Card = ({ cardData }) => {
    console.log(cardData);

    return (
        <div>
            <div className="card  bg-green-100 shadow-sm">
                <figure className="px-10 pt-10">
                    <Image
                        src={cardData.image}
                        alt="animal image"
                        width={200}
                        height={250}
                    ></Image>
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{cardData.name}</h2>
                    <h3 className="text-[#86EFAC] font-bold text-2xl">৳{cardData.price}</h3>
                    <p className="text-gray-500">{cardData.location}</p>
                    <div className="card-actions">
                        <button
                            className="btn rounded-2xl
                        hover:bg-[#315648] hover:text-white">
                            <Link href={`/allAnimals/${cardData.id}`}>More Details</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;