"use client"
import { useState} from "react"
import CustomAlert from '@/components/alert';



function ResendPage() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [alertMessage, setAlertMessage] = useState("");
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const [alertType, setAlertType] = useState("");

  const handleSendEmail = async () => {
    setIsAlertVisible(true);


    if (fullName === '' || email === '' || message === '') {
      setAlertMessage("Complete todos los campos");
      setIsAlertVisible(true);


      return;

    }

    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName,
          email,
          message,
        }),
      });


      if (res.ok) {
        setAlertMessage("Mensaje enviado con éxito");
      } else {
        setAlertMessage("Error al enviar el mensaje");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setAlertMessage("Error al enviar el mensaje");
    }



    setFullName("");
    setEmail("");
    setMessage("");

    setTimeout(() => {
      setIsAlertVisible(false);
      setAlertMessage("");
    }, 2000);

  };

  return (
    <>

      <section className="flex  flex-col items-center justify-center sm:text-center " id="contact">
        <p className="font-bold text-yellow-600 md:text-5xl pt-20">Send us</p>
        <form className="py-10">
          <input type="text" id="fullname" className="border py-2 mb-4 w-1/2 rounded" placeholder="Full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)} />
          <input type="email" id="email" placeholder="Email" className="border p-2 mb-4 w-1/2 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
          <textarea id="description" className="border p-8 mb-4 w-full resize-none rounded"
            value={message}
            onChange={(e) => setMessage(e.target.value)}></textarea>
          <button className="bg-yellow-600 hover:bg-yellow-800 px-3 py-2 rounded-md"
            onClick={(e) => {
              e.preventDefault();
              handleSendEmail();
            }}
          >
            Send
          </button>
          {isAlertVisible && (
            <CustomAlert
              message={alertMessage}
              onClose={() => setIsAlertVisible(false)}
              alertType={alertType}
            />
          )}

        </form>
      </section>
    </>
  )
}

export default ResendPage
