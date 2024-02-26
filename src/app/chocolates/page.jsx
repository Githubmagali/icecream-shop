
const items = [{
    id: 1,
    name: "Chocolate 100%",
    img: "/chocolate-100.jpg",
    price: 5.99,
    soldOut: false,
    desription: "Chocolate 100%"
},
{
    id: 2,
    name: "Chocolate black and white",
    img: "/chocolate-blackandwhite.png",
    price: 12,
    soldOut: false,
    description: "Chocolate black and milk"
}, {
    id: 3,
    name: "Chocolate milk",
    price: 23,
    soldOut: false,
    img: "/chocolate-milk.jpg",
    description: "Chocolate with milk"
}, {
    id: 4,
    name: "Chocolate white",
    img: "/chocolate-white.jpg",
    price: 3,
    soldOut: true,
    description: "Chocolate white"
},
{
    id: 5,
    name: "Bombon",
    img: "/bombon-milk.jpg",
    price: 3,
    soldOut: false,
    description: "Bombon milk"
},
{
    id:6,
    name:"Bombon mix",
    img:"/swiper-bombon.jpg",
    price:4,
    soldOut: false,
    description: "Bombon mix"
}
]

function Chocolates() {




    return (<>
                <h1 className="text-center text-5xl py-10">Chocolates</h1>
        <div className="flex items-center justify-center ">
            <div className="grid sm:gap-y-5 lg:grid-cols-8 text-center lg:px-20">
                {items.map((item, index) => (<>
                    <img src={item.img}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-md lg:col-span-1 lg:4 "
                    />
                    <div className='lg:col-span-1 lg:p-4' >
                        <p className='text-center text-green-800'>{item.name}</p>
                        <p className='text-xs py-2'> $ {item.price}</p>
                    </div>

                </>))}

            </div>
        </div>
        </>  )
}

export default Chocolates