import Card from "@/components/Card/Card";
import CommonBanner from "@/components/shared/Banner/CommonBanner";




const AllAnimalsPage = async () => {
    const rest = await fetch("https://assignment-08-brown-theta.vercel.app/data.json");
    const data = await rest.json();
    console.log(data);

    console.log(data.length);

    return (
        <div>
            <CommonBanner></CommonBanner>

            <div className="w-11/12 mx-auto">
                <h2 className="font-bold text-2xl">Available animals near you</h2>
                <div className="flex gap-5 my-7">
                    <button className="btn rounded-2xl
                hover:bg-green-800 hover:text-white">All</button>
                    <button className="btn rounded-2xl
                hover:bg-green-800 hover:text-white">Under ৳30k</button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {
                        data.map(cardData =>
                            <Card
                                cardData={cardData}
                                key={cardData.id}></Card>)
                    }
                </div>
            </div>

        </div>
    );
};

export default AllAnimalsPage;