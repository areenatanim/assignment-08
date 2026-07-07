
const allAnimals = async () => {
    const rest = await fetch("/data.json");
    const data = await rest.json();
    console.log(data);


}


