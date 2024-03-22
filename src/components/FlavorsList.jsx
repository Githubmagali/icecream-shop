function FlavorsList() {
  return (
    <div>
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
          <h1 className="text-3xl font-bold text-yellow-500 pt-10">
            Recommendations
          </h1>
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
          <h1 className="text-3xl font-bold text-yellow-500">
            Sweet Oleasures
          </h1>
          {sweetOleasures.map((item, index) => (
            <p key={index}>{item.name}</p>
          ))}
        </div>
        <div className="col-span-1 sm:py-10">
          <h1 className="text-3xl font-bold text-yellow-500">Clasic</h1>
          {clasic.map((item, index) => (
            <p key={index}>{item.name}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FlavorsList;
