
export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-extrabold text-gray-900">404 Not Found</h1>
        <p className="mt-4 text-xl text-gray-500">Sorry, the page you requested could not be found.</p>
      </div>
    </div>
  );
}