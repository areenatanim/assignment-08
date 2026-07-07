
import Form from '@/components/shared/Form';
import 'animate.css';
import Image from "next/image";
import allAnimals from "@/data/data.json";


const AnimalsDetails = async ({ params }) => {
    const { id } = await params;
    const data = await allAnimals;

    const animals = data.find((animal) => animal.id === Number(id));
    console.log(animals);

    return (
        <div className="w-11/12 mx-auto my-11 flex flex-col justify-center items-center">
            <div className="my-3 flex flex-col justify-center items-center bg-[#315648] p-2.5 rounded-2xl">
                <h2 className="font-bold text-2xl text-white animate__animated animate__fadeInLeft">{animals.name}</h2>
                <p className="text-xs text-gray-400">{animals.description}</p>
                <h3 className="font-bold text-xl text-[#86EFAC]">৳{animals.price}</h3>
            </div>
            <div className="card lg:card-side bg-base-100 shadow-sm">
                <div>
                    <figure>
                        <Image
                            src={animals.image}
                            alt="a animal pic"
                            width={200}
                            height={400}
                            className="rounded-xl mx-5"
                        ></Image>

                    </figure>
                    <div>
                        <h2 className="font-bold text-2xl text-center">{animals.name}</h2>

                    </div>
                </div>

                <div className="card-body">

                    <Form animals={animals}></Form>
                </div>

            </div>

        </div>
    );
};

export default AnimalsDetails;