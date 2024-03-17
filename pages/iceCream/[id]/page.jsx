import { useRouter } from 'next/router';
import data from '@/assets/slider.json';

function IceCreamPage() {
  const router = useRouter();
  const { id } = router.query;


  // Verifica si data y quantityIceCream son objetos antes de intentar acceder a ellos
  const iceCream = data && data.quantityIceCream && Array.isArray(data.quantityIceCream)
    ? data.quantityIceCream.find(iceCream => iceCream.id === parseInt(id))
    : null;

  // Si no se encuentra el helado, puedes manejarlo según tu necesidad
  if (!iceCream) {
    return <div>Helado no encontrado</div>;
  }

 
  return (

      <div className='flex flex-col '>
        <h1>{iceCream.name}</h1>
        <p>Precio: ${iceCream.price}</p>
        <img src={iceCream.img} alt={iceCream.name} className='w-20 h-20 object-cover'/>
      </div>
 
  );
}

export default IceCreamPage;
