"use client"
import { useState } from "react";

function SelectSucursal(){
    const [mostrarElementos, setMostrarElementos] = useState(false);
    const [sucursalSeleccionada, setSucursalSeleccionada] = useState('');
  
    const toggleElementos = () => {
      setMostrarElementos(!mostrarElementos);
    };
  
    const seleccionarSucursal = (sucursal) => {
      setSucursalSeleccionada(sucursal);
      setMostrarElementos(false);
    };
    return(
        <div className='pb-3'>
        <div className="hover:text-gray-500 text-base flex items-center cursor-pointer text-gray-800 border border-gray-700 px-5" onClick={toggleElementos}>
          {sucursalSeleccionada || 'Sucursal'} <i className="bx bx-chevron-down"></i>
        </div>
        {mostrarElementos && (
          <div className="grid grid-col-1 w-full h-2">
            <div className="grid  py-9 px-5 bg-white gap-y-6 z-20 border border-black">
              <div className="text-gray-800 cursor-pointer" onClick={() => seleccionarSucursal('Lomas')}>
                Lomas De Zamora
              </div>
              <div className="text-gray-800 cursor-pointer" onClick={() => seleccionarSucursal('Recoleta')}>
                Recoleta
              </div>
              <div className="text-gray-800 cursor-pointer" onClick={() => seleccionarSucursal('VillaCrespo')}>
                Villa Crespo
              </div>
            </div>
          </div>
        )}
      </div>

    )
}

export default SelectSucursal