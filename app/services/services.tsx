import './services.css'
const features = [
  {
    name: 'Send a Distress signal',
    description:
      'gain a lifeline to immediate assistance. Whether you find yourself in an emergency or witness someone else in need, our app empowers you to take swift action.',
    icon:'ArrowPathIcon',
  },
  {
    name: 'Report a crime',
    description:
      'you hold the power to contribute actively to the well-being of your neighborhood. ',
      icon:'',
  },
  {
    name: 'Safe Home',
    description:
      'Gain a comprehensive understanding of the safety landscape around your residence through our advanced data analysis',
      icon:'',
  },
]

export default function Services() {
  return (
    <div className='text-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:40px_40px]'>
          <div className="overflow-y-scroll  pb-36 w-screen  sm:py-32 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Experience a world where safety meets innovation.</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Embark on a journey where your safety and well-being take center stage.
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          No more navigating through uncertainty alone. Whether you need to send a distress signal or report a crime, the Distress App is here for you. Our commitment is to create a safer world where help is just a click away.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <a
              href="#"
              key={feature.name}
              className="relative block overflow-hidden bg-gray-200 rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
            >
              <span
                className="absolute inset-x-0 bottom-0 h-2 bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-slate-500 via-slate-600 to-slate-900"
              ></span>
              <div className="sm:flex sm:justify-between sm:gap-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                  {feature.name}
                  </h3>
                </div>
            
                <div className="hidden sm:block sm:shrink-0 ">
                <iframe className='h-10 w-10' src="https://lottie.host/embed/2fd3a6bb-f21f-47f8-8e04-0e1c8775db0d/pmmQgzWtze.json"></iframe>
                </div>
              </div>
            
              <div className="mt-4">
                <p className="max-w-[40ch] text-sm text-gray-500">
                {feature.description}
                </p>
              </div>
            </a>
            ))}
          </dl>
        </div>
      </div>
    </div>
    </div>

  )
}
