const Grocery = () => {
        const groceryItems = [
                { id: 1, name: 'Apples', price: 1.99 },
                { id: 2, name: 'Bananas', price: 0.99 },
                { id: 3, name: 'Bread', price: 2.49 },
                // Add more grocery items as needed
              ];
            
              return (
                <div className="container mx-auto my-8 p-8 bg-white shadow-md rounded-md max-w-2xl border border-black">
                  <h1 className="text-2xl font-bold mb-4">Grocery Page</h1>
            
                  {/* Display grocery items in cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {groceryItems.map((item) => (
                      <div key={item.id} className="bg-white p-4 rounded-md shadow-md border border-black">
                        <h2 className="text-lg font-semibold mb-2">{item.name}</h2>
                        <p className="text-gray-600">${item.price.toFixed(2)}</p>
                      </div>
                    ))}
                  </div>
            
                  {/* Additional features message */}
                  <div className="mt-8 p-4 bg-gray-100 rounded-md ">
                    <p className="text-gray-700">
                      We're working on adding more features to enhance your grocery shopping experience. Stay tuned for updates!
                    </p>
                  </div>
                </div>
              );
            };
            

export default Grocery;