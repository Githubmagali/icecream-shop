"use client"
import { location } from '@/assets/offices'


function SelectSucursal(){

 

 
    return(
   
       <div className="mb-4">
    
       <div className="relative">
         <select
           className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
           defaultValue=""
         >
           <option value="" disabled>
            Selected
           </option>
         
           {location.map((office) => (
            <option key={office.id} value={office.id}>
              {office.name}
            </option>
          ))}
         </select>
        
       </div>
     </div>

    )
}

export default SelectSucursal