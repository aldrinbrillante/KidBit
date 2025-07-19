export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm lg:flex">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-blue-600 mb-8">
            Welcome to KidBit
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            A fun and educational platform for kids to learn and explore!
          </p>
          <div className="flex justify-center space-x-4">
            <div className="bg-yellow-400 text-yellow-900 px-6 py-3 rounded-full font-semibold">
              🎮 Play & Learn
            </div>
            <div className="bg-green-400 text-green-900 px-6 py-3 rounded-full font-semibold">
              📚 Explore
            </div>
            <div className="bg-purple-400 text-purple-900 px-6 py-3 rounded-full font-semibold">
              🎨 Create
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
