'use client'

export default function ErrorPage() {
  return (
    <div className="min-h-screen bg-pink-500 flex flex-col justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-extrabold text-gray-900">Oops, something went wrong!</h1>
        {/* <p className="mt-4 text-xl text-gray-500">We apologize for the inconvenience, but it seems that our site is experiencing some technical difficulties at the moment. Please try again later.</p> */}
      </div>
    </div>
  );
}