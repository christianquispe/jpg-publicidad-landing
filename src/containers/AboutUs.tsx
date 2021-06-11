const AboutUs = () => {
  return (
        <section className="bg-white">
	   <div className="max-w-5xl px-6 py-16 mx-auto">
	       <div className="items-center md:flex md:space-x-6">
	           <div className="md:w-1/2">
		      <h3 className="text-2xl font-semibold text-gray-800">Lorem ipsum dolor sit <br /> amet, consectetur</h3>
		      <p className="max-w-md mt-4 text-gray-600">Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.</p>
		      <a href="#" className="block mt-8 text-indigo-700 underline">Experienced team</a>
		   </div>
    
		   <div className="mt-8 md:mt-0 md:w-1/2">
                   <div className="flex items-center justify-center">
                      <div className="max-w-md">
			<img className="object-cover object-center w-full rounded-md shadow" style={{ height: "500px" }} src="https://images.unsplash.com/photo-1618346136472-090de27fe8b4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=673&q=80"  />
                      </div>
                  </div>
              </div>
	    </div>
	  </div>
	</section>
  );
};

export default AboutUs
