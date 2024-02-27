function DeliveryShipping(){
    return(
    <div className="flex flex-col items-center justify-center gap-y-4">
        <form className="flex flex-col items-center justify-center gap-y-3">
            <label>Email</label>
            <input
            type="email"
             id="email"
             className=" border border-fuchsia-950"
             placeholder="Email"
             required/>
             <label>Fullname *</label>
             <input
              type="text"
              id="fullName"
              className="border border-fuchsia-950"
              placeholder="Fullname"
              required/>
               <label>Phone *</label>
             <input
              type="text"
              id="phone"
              className="border border-fuchsia-950"
              placeholder="phone"
              required/>
               <label>Address *</label>
               <input
              type="text"
              id="address"
              className="border border-fuchsia-950"
              placeholder="Address"
              required/>
               <label>Depto </label>
               <input
              type="text"
              id="depto"
              className="border border-fuchsia-950"
              placeholder="depto"
              required/>
               <label>Observations </label>
               <input
              type="text"
              id="observations"
              className="border border-fuchsia-950"
              placeholder="observations"
              required/>
              <button className="bg-slate-500 text-white hover:bg-slate-800 px-3 my-4">Send</button>
        </form>
    </div>

    )
}
export default DeliveryShipping