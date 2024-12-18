import { Link } from "react-router-dom";

function ThankYouPage() {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md text-center">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
            Thank You!
          </h1>
          <p className="text-lg text-gray-600">
            We have received your application and will get back to you soon.
          </p>
          <div className="mt-6">
            <button
              className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition duration-200"
              
            >
              <Link to="/">Back to Home</Link>
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default ThankYouPage;
  