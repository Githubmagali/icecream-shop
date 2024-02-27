import data from "../../assets/slider.json"



function IceCream() {
    const chocolateData = data.chocolate;
    const dulce = data.dulce;
    const creams = data.creams;
    const fruits = data.fruits;
    const recomends = data.recomends;
    const sweetOleasures = data.sweetOleasures;
    const light = data.light;



    return (
        <div className="flex  justify-center h-screen pt-10">
            <div className="lg:grid lg:grid-cols-3  justify-center text-center gap-x-20">

                <div className="col-span-1  sm:py-10">
                    <h1 className="text-3xl font-bold text-yellow-500">Chocolate</h1>
                    {chocolateData.map((item, index) => (
                        <p key={index}>{item.name}</p>

                    ))}
                </div>
                <div className="col-span-1  sm:py-10">
                    <h1 className="text-3xl font-bold text-yellow-500">Dulce de leche</h1>
                    {dulce.map((item, index) => (
                        <p key={index}>{item.name}</p>

                    ))}
                    <h1 className="text-3xl font-bold text-yellow-500 pt-10">Recomends</h1>
                    {recomends.map((item, index) => (
                        <p key={index}>{item.name}</p>

                    ))}
                </div>
                <div className="col-span-1 sm:py-10 ">
                    <h1 className="text-3xl font-bold text-yellow-500 pt-20 ">Creams</h1>
                    {creams.map((item, index) => (
                        <p key={index}>{item.name}</p>

                    ))}
                </div>
                <div className="col-span-1 sm:py-10 ">
                    <h1 className="text-3xl font-bold text-yellow-500">Fruits</h1>
                    {fruits.map((item, index) => (
                        <p key={index}>{item.name}</p>

                    ))}
                </div>

                <div className="col-span-1 sm:py-10">
                    <h1 className="text-3xl font-bold text-yellow-500">Sweet Oleasures</h1>
                    {sweetOleasures.map((item, index) => (
                        <p key={index}>{item.name}</p>

                    ))}
                </div>
                <div className="col-span-1 sm:py-10">
                    <h1 className="text-3xl font-bold text-yellow-500">Light</h1>
                    {light.map((item, index) => (
                        <p key={index}>{item.name}</p>

                    ))}
                </div>
                <div className="col-span-3 pb-4 ">
                    <button className="bg-yellow-500 hover:bg-yellow-800 hover:text-white py-1 px-2">Buy now</button>


                </div>
                <div className="flex gap-x-2 pb-20">
                    <p className="">1 kilo</p>
                    <button className="bg-yellow-500 px-1">+</button>
                    <button className="bg-yellow-500 px-1">-</button>
                </div>
                <div className="flex gap-x-2 pb-20">
                    <p className="">1/2</p>
                    <button className="bg-yellow-500 px-1">+</button>
                    <button className="bg-yellow-500 px-1">-</button>
                </div>
                <div className="flex gap-x-2 pb-20">
                    <p className="">1/4</p>
                    <button className="bg-yellow-500 px-1">+</button>
                    <button className="bg-yellow-500 px-1">-</button>
                </div>
            </div>



        </div>
    )
}

export default IceCream