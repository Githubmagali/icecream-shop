"use client"
import { useState } from "react"
import CustomAlert from "@/components/alert"


function DeliveryShipping(){

    const [alertMessage, setAlertMessage] = useState("");
    const [isAlertVisible, setIsAlertVisible] = useState(false);
    const [alertType, setAlertType] = useState("");

    const [formData, setFormData] =useState({
        email: '',
        fullname: '',
        phone:'',
        address:'',
        depto:'',
        observations:''
    })

    const handleChange = (e) =>{
        setFormData({...formData, [e.target.id]: e.target.value})
    }
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setIsAlertVisible(true)

        if(formData.email === '' || formData.fullname === '' || formData.phone === '' || formData.address === '' || formData.depto === '' || formData.observations === ''){
            setAlertMessage("Complete todos los campos");
            setIsAlertVisible(true);
            setAlertType("error");
            setIsAlertVisible(true);

            return;
        }

        try
        {
            const response =await fetch('/api/submitFormData', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
            if (response.ok) {
                const result = await response.json();
                console.log('Respuesta del servidor:', result);



                setAlertMessage("Pedido enviado con éxito");
                setAlertType("success");
                setFormData({
                    email: '',
                    name: '',
                    dni: '',
                    phone: '',
                    date: '',
                });

            } else {
                setAlertMessage("Error al enviar el mensaje");
                setAlertType("error");
            }
        } catch (error) {
            console.error("Error sending email:", error);
            setAlertMessage("Error al enviar el mensaje");
            setAlertType("error");
        }


        setTimeout(() => {
            setIsAlertVisible(false);
            setAlertMessage("");
            setAlertType("");
        }, 2000);
    }


    return(
    <div className="flex flex-col items-center justify-center gap-y-4">
        <form  onSubmit={handleSubmit}
         className="flex flex-col items-center justify-center gap-y-3">
            <label>Email</label>
            <input
            type="email"
             id="email"
             className=" border border-fuchsia-950"
             placeholder="Email"
             value={formData.email}
             onChange={handleChange}
             />

             <label>Fullname *</label>
             <input
              type="text"
              id="fullName"
              className="border border-fuchsia-950"
              placeholder="Fullname"
              value={formData.fullname}
              onChange={handleChange}
              />

               <label>Phone *</label>
             <input
              type="text"
              id="phone"
              className="border border-fuchsia-950"
              placeholder="phone"
              value={formData.phone}
              onChange={handleChange}
              />

               <label>Address *</label>
               <input
              type="text"
              id="address"
              className="border border-fuchsia-950"
              placeholder="Address"
              value={formData.email}
              onChange={handleChange}
              />

               <label>Depto </label>
               <input
              type="text"
              id="depto"
              className="border border-fuchsia-950"
              placeholder="depto"
              value={formData.depto}
              onChange={handleChange}
              />
               <label>Observations </label>
               <input
              type="text"
              id="observations"
              className="border border-fuchsia-950"
              placeholder="observations"
              value={formData.observations}
              onChange={handleChange}
              />
              <button className="bg-slate-500 text-white hover:bg-slate-800 px-3 my-4">Send</button>
              {isAlertVisible && (
                    <CustomAlert
                        message={alertMessage}
                        onClose={() => setIsAlertVisible(false)}
                        alertType={alertType}
                    />
                )}
       
        </form>
    </div>

    )
}
export default DeliveryShipping