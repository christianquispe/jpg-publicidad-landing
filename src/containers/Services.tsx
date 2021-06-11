const Services = () => {
  return (
    <section className="bg-white">
      <div className="max-w-5xl px-6 py-16 mx-auto">
        <h2 className="text-3xl font-semibold text-gray-800">
          Servicios
        </h2>
        <p className="max-w-lg mt-4 text-gray-600">
	  Vitae nulla euismod velpretium tellus accumsan nulla nunc
          euismod ve semper. Vitae nulla euismod velpretium tellus
          accumsan nulla nunc euismod ve semper.
	</p>
        <div className="grid gap-8 mt-10 md:mt-20 md:grid-cols-2">
          <div className="flex space-x-4">
            <span>Icon</span>

            <div>
              <h4 className="text-xl font-medium text-gray-800">Publicidad</h4>
              <p className="max-w-lg mt-4 text-gray-600">
                Podemos producirte gigantofrías que primocionen tu marca,
                viniles decorativos y cuadros modernos con los que puedes
                decorar tu local.
              </p>
            </div>
          </div>

          <div className="flex space-x-4">
            <span>Icon</span>

            <div>
              <h4 className="text-xl font-medium text-gray-800">
                Developing websites
              </h4>
              <p className="max-w-lg mt-4 text-gray-600">
                Vitae nulla euismod velpretium tellus accumsan nulla nunc
                euismod ve semper. Vitae nulla euismod velpretium tellus
                accumsan nulla nunc euismod ve semper. Vitae nulla euismod
                velpretium tellus accumsan nulla nunc euismod ve semper.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services
