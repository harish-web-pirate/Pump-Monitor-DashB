import login from "../../Assets/image.png";
import power from "../../Assets/power.png";
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
    const navigate = useNavigate();

    const handleLogin = () => {
      // Perform authentication logic here (if needed)
      navigate('/dashboard'); // Redirect to the dashboard page
    };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg">
        <div className="flex flex-col items-center">
          <img src={power} alt="PMD" className="w-12 h-12" />
          <h2 className="text-xl font-semibold text-gray-800 mt-2">
            Pump Monitoring Dashboard
          </h2>
          <p className="text-purple-600 font-medium text-lg">
            Hi, Welcome Back!
          </p>
        </div>

        <form className="mt-6">
          <div>
            <label className="block text-gray-700">Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              className="w-full px-4 py-2 mt-2 border rounded-lg  "
            />
          </div>

          <div className="mt-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 mt-2 border rounded-lg "
            />
          </div>

          <button
          onClick={handleLogin}
            type="submit"
            className="w-full mt-6 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition"
          >
            Login
          </button>
        </form>
    
        <div className="flex items-center my-4">
    <div className="flex-1 h-px bg-gray-300"></div>
    <span className="px-4 text-gray-500 text-lg">or</span>
    <div className="flex-1 h-px bg-gray-300"></div>
  </div>

        <div className="flex justify-center mt-4">
        <button className="flex items-center justify-center gap-2 border py-3 px-8 rounded-md text-sm hover:bg-gray-100 active:scale-95 transition">
            <img src={login} alt="Google" className="w-5 h-5" />
            <span className="text-gray-700 font-medium">Sign in with Google</span>
        </button>
        </div>

      </div>
    </div>
  );
}
