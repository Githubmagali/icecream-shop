"use client"
import { useState} from "react"
import CustomAlert from '@/components/alert';
import Footer from "@/components/footer";


const customers=[
  {
  id:1,
  name:"name"
},
{
  id:2,
  name:"name2"
},
{
  id:3,
  name:"name3"
},
{
  id:4,
  name:"name4"
},
]




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

      <section className="flex  flex-col items-center justify-center sm:text-center px-5 " id="contact">
        <p className="text-yellow-600 md:text-5xl pt-20">Send us</p>
        <form className="py-10">
        <div className="rounded-md bg-gray-50 p-4 md:p-6">
        </div>
          <input type="text" id="fullname" className="border py-2 mb-4 w-1/2 rounded" placeholder="Full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)} />
          <input type="email" id="email" placeholder="Email" className="border p-2 mb-4 w-1/2 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
          <textarea id="description" className="border p-8 mb-4 w-full resize-none rounded"
            value={message}
            onChange={(e) => setMessage(e.target.value)}></textarea>
          <button className="border border-gray-600 hover:bg-gray-200 px-5 py-2 rounded-md"
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
      <Footer />
    </>
  )
}

export default ResendPage
