import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="bg-gray-100 h-screen overflow-hidden">
      <Navbar />
      <div className="grid grid-cols-2 py-10 px-32 montserrat items-center justify-center h-10/12 space-x-10">
      {/* Left Section, Text */}
        <div className="space-y-3">
          <h2 className="text-7xl font-bold">Find your next big role at HireLink</h2>
          <p className="text-2xl text-zinc-800">HireLink is the #1 place to find roles in the Philippines!</p>
          <div className="flex space-x-5">
            <button className="border rounded-full py-2 px-6 bg-blue-800 text-white hover:bg-blue-700">Browse Jobs</button>
            <button className="border rounded-full py-2 px-6 hover:underline underline-offset-4">Create An Account</button>
          </div>

        </div>

        {/* Right Section, Job Search */}
        <div>
          <div>
            <form>
              <h1>What</h1>
              <input type="text" placeholder="Enter keywords" className="border rounded-full py-2 px-4 w-full" />
              <select className="border rounded-full py-2 px-4 w-full mt-4">
                <option value="">Any Classification</option>
                <option value="manila">Manila</option>
                <option value="cebu">Cebu</option>
                <option value="davao">Davao</option>
              </select>
              <button className="border rounded-full py-2 px-4 bg-blue-800 text-white hover:bg-blue-700 w-full mt-4">Search</button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}
