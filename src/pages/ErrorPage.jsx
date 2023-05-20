import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="py-36 flex flex-col h-full items-center justify-center bg-gray-200">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKXW0c7tyEHvybH62wM0ytC9O5XfgwBa5daQ&usqp=CAU" alt="Error" className="w-64 h-auto mb-8" />
      <h1 className="text-4xl font-bold mb-4">Oops!</h1>
      <p className="text-lg text-gray-700 mb-8">Something went wrong. Please try again later.</p>
      <Link to="/" className="px-6 py-2 bg-gray-800 text-white font-bold rounded hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
        Back to home
      </Link>
    </div>
  );
};

export default ErrorPage;
