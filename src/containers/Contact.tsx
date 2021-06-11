const Contact = () => {
  return (
	  <section className="bg-white">      
	    <div className="max-w-5xl max-w-5xl px-6 py-16 mx-auto">
	      <div>
		<h2 className="text-3xl font-semibold text-gray-800">
		  Contacto
		</h2>
		<br/>
		<p></p>
	      </div>
	      <div className="grid grid-cols-2 gap-10">
		<form className="w-full">
		  <div className="flex flex-col bg-white space-y-6">
		    <div className="flex flex-col space-y-1">
		      <input type="text" name="username" id="username" className="border-2 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-400 focus:shadow" placeholder="Email" />
		    </div>

		    <div className="flex flex-col space-y-1">
		     <textarea name="password" id="password" className="border-2 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-400 focus:shadow" placeholder="Escriba un mensaje o descripción" />
		    </div>

		    <div className="flex flex-col-reverse sm:flex-row sm:justify-between items-center">
		     <button type="submit" className="bg-blue-500 text-white font-bold px-5 py-2 rounded focus:outline-none shadow hover:bg-blue-700 transition-colors">Enviar</button>
		    </div>
		  </div>
		</form>
		<div>
		  <p className="text-gray-600">Si desea tambien puede comunicarse al siguiente WhatsApp</p>
		</div>
	      </div>
	    </div>
	  </section>
  );
};

export default Contact
