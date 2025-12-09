export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#2B2D31] p-4">
      <div className="w-full max-w-sm bg-[#313338] shadow-2xl rounded-2xl p-8 border border-[#1E1F22]">
        <h1 className="text-2xl font-bold mb-6 text-center text-white">Welcome Back!</h1>
        <p className="text-center text-gray-400 text-sm mb-6">We're so excited to see you again!</p>

        <div className="mb-4">
          <label className="block text-xs font-semibold mb-1 text-gray-300">EMAIL</label>
          <input
            type="email"
            className="w-full p-2 bg-[#1E1F22] border border-[#1A1B1E] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#5865F2]"
            placeholder="Masukkan email"
          />
        </div>

        <div className="mb-6">
          <label className="block text-xs font-semibold mb-1 text-gray-300">PASSWORD</label>
          <input
            type="password"
            className="w-full p-2 bg-[#1E1F22] border border-[#1A1B1E] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#5865F2]"
            placeholder="Masukkan password"
          />
          <p className="text-xs text-[#5865F2] mt-1 hover:underline cursor-pointer">Forgot your password?</p>
        </div>

        <button className="w-full py-2 rounded-md bg-[#5865F2] text-white font-semibold hover:bg-[#4752C4]">
          Login
        </button>

        <p className="text-xs text-gray-400 mt-4 text-center">
          Need an account? <span className="text-[#5865F2] hover:underline cursor-pointer">Register</span>
        </p>
      </div>
    </div>
  );
}
