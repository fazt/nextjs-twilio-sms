"use client"
import axios from "axios";
import { toast } from "sonner";

function Page() {
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const data = {
      phone: formData.get("phone"),
      message: formData.get("message"),
    };

    const res = await axios.post("/api/sms", data);
    if (res.status === 200) {
      toast.success("Message sent");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form action="" className="bg-slate-950 p-10" onSubmit={onSubmit}>
        <h1 className="text-white text-3xl font-bold">Send an SMS</h1>
        <label htmlFor="phone" className="text-white block my-4">
          Write your phone number
        </label>
        <input
          name="phone"
          type="tel"
          placeholder="+123456789"
          className="px-3 py-1 rounded-md"
        />

        <label htmlFor="message" className="text-white block my-4">
          Write your Message
        </label>
        <textarea
          name="message"
          placeholder="Hello World ..."
          className="px-3 py-1 rounded-md w-full"
        />
        <button className="bg-blue-500 text-white px-3 py-1 rounded-md mt-4 block">
          Send
        </button>
      </form>
    </div>
  );
}

export default Page;
