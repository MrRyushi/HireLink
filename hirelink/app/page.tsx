import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="bg-gray-100 h-screen overflow-hidden">
      <Navbar />
      <div className="grid grid-cols-2 p-10 montserrat items-center justify-center border h-full mb-5">
        <div className="space-y-3 border">
          <h2 className="text-7xl font-bold">Find your next big role at HireLink</h2>
          <p className="text-2xl text-zinc-800">HireLink is the #1 place to find roles in the Philippines!</p>
          <div className="flex space-x-5">
            <button className="border rounded-full py-2 px-6">Browse Jobs</button>
            <button className="border rounded-full py-2 px-6">Create An Account</button>
          </div>

          </div>
          <div>
            <div>
              <h1>What</h1>
            </div>
          </div>

      </div>
    </div>
  );
}
