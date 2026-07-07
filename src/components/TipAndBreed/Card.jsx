import qurbaniData from "@/data/qurbani.json"


const Card = async () => {
    const data = await qurbaniData;
    const qurbani_tips = data.qurbani_tips;
    const top_breeds = data.top_breeds;
    console.log(qurbani_tips, top_breeds);

    return (
        <div className="w-11/12 mx-auto">
            {/* // Tips section */}
            <h2 className="font-bold text-2xl text-[#315648]">Qurbani Tips..</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-5">

                {qurbani_tips.map((tip) => (
                    <div key={tip.id} className="p-5 rounded-xl  bg-white shadow-xl">
                        <div className="text-3xl mb-3">{tip.icon}</div>
                        <h3 className="font-semibold text-[#315648] mb-2">{tip.title}</h3>
                        <p className="text-sm text-gray-500">{tip.description}</p>
                    </div>
                ))}
            </div>

            {/* // Breeds section */}
            <h2 className="font-bold text-2xl text-[#315648]">This Are Some Top Breeds</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-5">
                {top_breeds.map((breed) => (
                    <div key={breed.id} className="p-4 rounded-xl  bg-white text-center shadow-xl">
                        <div className="text-4xl mb-2">{breed.emoji}</div>
                        <h3 className="font-semibold text-[#315648]">{breed.name}</h3>
                        <p className="text-xs text-green-700">{breed.type}</p>
                        <p className="text-sm font-semibold text-green-800 mt-1">
                            ৳{breed.avg_price.toLocaleString()}
                        </p>
                        <p className="text-xs text-gray-400 mt-1">{breed.suitable_for}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Card;