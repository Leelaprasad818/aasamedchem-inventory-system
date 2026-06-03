export default function LoginPage() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <form className="w-96 border p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">
          Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 mb-3"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 mb-3"
        />

        <button
          className="bg-blue-600 text-white w-full py-2 rounded"
        >
          Login
        </button>
      </form>
    </div>
  )
}