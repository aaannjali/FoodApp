const Contectus = () =>{
  return (
    
      <div className="container mx-auto my-8 p-8 bg-white shadow-lg rounded-md max-w-md border border-black">
        <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
  
        <form action="#" method="post" className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-600 ">
              Your Name
            </label>
            <input type="text" id="name" name="name" className="mt-1 p-2 w-full border rounded-md border-black" />
          </div>
  
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600 border-black">
              Your Email
            </label>
            <input type="email" id="email" name="email" className="mt-1 p-2 w-full border rounded-md border-black" />
          </div>
  
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-600 ">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="mt-1 p-2 w-full border rounded-md border-black"
            ></textarea>
          </div>
  
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    );
  };
export default Contectus;