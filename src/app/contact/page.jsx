"use client"
import { useState } from "react"
import CustomAlert from '@/components/alert';
import Footer from "@/components/footer";





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
      setAlertMessage("Complete all fields");
      setIsAlertVisible(true);
      setAlertType("error");


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
        setAlertMessage("Message sent succesfully");
        setAlertType("success");
      } else {
        setAlertMessage("Error sending message");
        setAlertType("error");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setAlertMessage("Error sending message");
      setAlertType("error");
    }



    setFullName("");
    setEmail("");
    setMessage("");

    setTimeout(() => {
      setIsAlertVisible(false);
      setAlertMessage("");
      setAlertType("");
    }, 2000);

  };

  return (
    <>
      <section className="flex flex-col items-center justify-center sm:text-center px-5" id="contact">
        <p className="md:text-5xl text-3xl pt-20 text-title">Talk to us</p>

        <form className="w-full max-w-2xl py-10 flex flex-col gap-4">
          <input
            type="text"
            id="fullname"
            className="border p-2 w-full rounded"
            placeholder="Full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="border p-2 w-full rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            id="description"
            rows={6}
            placeholder="Message"
            className="border p-2 w-full resize-none rounded"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          <button
            type="submit"
            className="self-center px-8 py-2.5 rounded-md border border-gray-800 text-gray-800 font-medium
             transition-all duration-300
             hover:bg-gray-900 hover:text-white hover:shadow-md
             active:scale-95
             focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
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
