export default function Home() {

  return (
    <div className="bg-white py-10 lg:py-32 xl:py-52 overflow-hidden">
      <div className="flex flex-col sm:flex-row px-5 sm:px-10 lg:px-20 xl:px-32 montserrat items-center justify-center space-y-10 md:space-y-10 space-x-15 h-full">
      {/* Left Section, Text */}
        <div className="space-y-3">
          <h2 className="text-4xl lg:text-5xl xl:text-7xl font-bold">Find your next big role at HireLink</h2>
          <p className="text-xl xl:text-2xl text-zinc-800">HireLink is the #1 place to find roles in the Philippines!</p>
          <div className="flex space-x-5">
            <button className="border rounded-full text-sm md:text-lg py-2 px-6 bg-blue-800 text-white hover:bg-blue-700">Browse Jobs</button>
            <button className="border rounded-full text-sm md:text-lg py-2 px-6 hover:underline underline-offset-4">Create An Account</button>
          </div>

        </div>

        {/* Right Section, Job Search */}
        <div>
          <form className="bg-white p-8 rounded-lg shadow-2xl drop-shadow-2xl space-y-6">
            {/* What */}
            <div className="space-y-2">
              <h1 className="font-bold">What</h1>
              <input type="text" placeholder="Enter keywords" className="border rounded-full py-2 px-4 w-full" />
              <select className="border rounded-full py-2 px-4 w-full mt-4">
                <option value="">Any Classification</option>
                <option value="it">Information Technology</option>
                <option value="engineering">Engineering</option>
                <option value="healthcare">Healthcare</option>
                <option value="education">Education & Training</option>
                <option value="finance">Finance & Accounting</option>
                <option value="sales">Sales & Marketing</option>
                <option value="customer_service">Customer Service</option>
                <option value="hr">Human Resources</option>
                <option value="hospitality">Hospitality & Tourism</option>
                <option value="construction">Construction & Trades</option>
                <option value="manufacturing">Manufacturing</option>
                <option value="transport">Transport & Logistics</option>
                <option value="admin">Administration & Office Support</option>
                <option value="arts">Arts, Media & Design</option>
                <option value="legal">Legal</option>
              </select>
            </div>

            {/* Where */}
            <div className="space-y-2">
              <h1 className="font-bold">Where</h1>
              <input type="text" placeholder="Enter location" className="border rounded-full py-2 px-4 w-full" />
            </div>

            {/* Job Type */}
            <div className="space-y-2">
              <h1 className="font-bold">Job Type</h1>
              <select className="border rounded-full py-2 px-4 w-full">
                <option value="">Any Job Type</option>
                <option value="full_time">Full-Time</option>
                <option value="part_time">Part-Time</option>
                <option value="contract">Contract</option>
                <option value="temporary">Temporary</option>
                <option value="internship">Internship</option>
                <option value="freelance">Freelance</option>
              </select>
            </div>
            
            <button className="border rounded-full py-2 px-4 bg-blue-800 text-white hover:bg-blue-700 w-full mt-4">Search</button>
          </form>
        </div>

      </div>
    </div>
  );
}
