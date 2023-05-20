import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';


const Login = () => {
  const { signIn, signInWithGoogle, signInWithGithub } = useContext(AuthContext)
  const [errorMessage, setErrorMessage] = useState('')

  const navigate = useNavigate()
  const location = useLocation()

  const from = location.state?.from?.pathname || '/'

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target
    const email = form.email.value
    const password = form.password.value

    form.reset()

    signIn(email, password)
      .then(() => {
        setErrorMessage('')
        navigate(from)
      })
      .catch(error => {
        setErrorMessage(error.message && 'Invalid email or password!!!')
      })
  };

  const redirectHomePage = () => {
    navigate('/')
  }

  return (
    <div className="flex flex-col items-center form-bg justify-center h-screen">
      <div className="bg-gradient-to-r from-[#000000cb] to-[#00000048] rounded-lg shadow-lg p-8 lg:w-3/6 w-80">
        <h2 className="text-3xl font-bold mb-6 text-[#ffc800]">Login</h2>
        <span className='text-red-500 font-bold'>{errorMessage}</span>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-[#ffc800] font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 border border-[#ffc800] bg-transparent text-cyan-100 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name='email'
              // value={email}
              // onChange={(event) => setEmail(event.target.value)}
              placeholder="Email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-[#ffc800] font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow border border-[#ffc800] bg-transparent appearance-none border rounded w-full py-2 px-3 text-cyan-100 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              name='password'
              // value={password}
              // onChange={(event) => setPassword(event.target.value)}
              placeholder="Password"
              required
            />
          </div>
          <div className="mb-4">
            <button className="bg-[#ffc800] hover:bg-[#8b6b05] text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Login
            </button>
          </div>
        </form>
        <div className="flex items-center justify-center mb-4">
          <hr className="w-1/4" />
          <span className="mx-3 text-[#ffc800]">Or Sign In With</span>
          <hr className="w-1/4" />
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div onClick={signInWithGoogle}>
            <button onClick={redirectHomePage} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Google
            </button>
          </div>
          <div onClick={signInWithGithub}>
            <button onClick={redirectHomePage} className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              GitHub
            </button>
          </div>
        </div>
        <div className="text-center">
          <span className="text-[#ffc800]">Don't have an account?</span>{' '}
          <Link to="/register" className="text-blue-500 hover:text-blue-700 font-bold">
            Register here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
