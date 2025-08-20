export default function ConnectPage() {
  return (
    <div className=" min-h-[75dvh] bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
        Let&apos;s Connect
      </h1>
      <p className="text-xl text-gray-600 text-center max-w-2xl mb-8">
        This is where visitors can get in touch with you and learn more about
        collaboration opportunities.
      </p>
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          Contact Information
        </h2>
        <p className="text-gray-600 text-center">
          Add your contact details, social links, and preferred communication
          methods here.
        </p>
      </div>
    </div>
  )
}
