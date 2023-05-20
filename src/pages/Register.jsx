import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const { createUser, updateUser } = useContext(AuthContext)
  const [errorMessage, setErrorMessage] = useState('')

  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target
    const name = form.name.value
    const email = form.email.value
    const password = form.password.value
    const photo = form.photo.value

    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(password)) {
      setErrorMessage('Password minimum eight characters, at least one uppercase letter, one lowercase letter and one number')
      return
    }

    form.reset()

    createUser(email, password)
      .then(result => {
        setErrorMessage('')
        navigate('/')
        updateUser(result.user, name, photo)
          .then(() => { })
      })
      .catch(error => {
        setErrorMessage(error?.message && 'email-already-in-use');
      })
  };

  return (
    <div className="form-bg py-36">
      <div className="md:w-full lg:w-3/6 mx-auto">
        <form onSubmit={handleSubmit} className="bg-gradient-to-r from-[#000000cb] to-[#00000048] shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-2xl text-[#ffc800] font-bold text-center mb-4">Register</h2>
          <span className="text-red-500 font-bold">{errorMessage}</span>
          <div className="mb-4">
            <label className="text-[#ffc800] block text-cyan-100 font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow border border-[#ffc800] bg-transparent appearance-none border rounded w-full py-2 px-3 text-cyan-100 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Enter your name"
              name="name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="text-[#ffc800] block text-cyan-100 font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow border border-[#ffc800] bg-transparent appearance-none border rounded w-full py-2 px-3 text-cyan-100 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="text-[#ffc800] block text-cyan-100 font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow border border-[#ffc800] bg-transparent appearance-none border rounded w-full py-2 px-3 text-cyan-100 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              name="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="mb-6">
            <label className="text-[#ffc800] block text-cyan-100 font-bold mb-2" htmlFor="photoURL">
              Photo URL
            </label>
            <input
              className="shadow border border-[#ffc800] bg-transparent appearance-none border rounded w-full py-2 px-3 text-cyan-100 leading-tight focus:outline-none focus:shadow-outline"
              id="photoURL"
              type="text"
              name="photo"
              placeholder="Enter your photo URL"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-[#ffc800] hover:bg-[#8b6b05] text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Register
            </button>
            <Link
              className="ps-4 lg:ps-0 inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              to="/login"
            >
              Already have an account? Log in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;