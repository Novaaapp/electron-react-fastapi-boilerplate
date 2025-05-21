// import { DraggableTopBar } from '@/components' // Example: Keep if you want a draggable top bar

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      {/* <DraggableTopBar /> */}
      <h1 className="text-4xl text-center font-bold mb-4">Electron + Vite + React + Tailwind Boilerplate</h1>
      <p className="text-lg">Start building your amazing application here!</p>
      <p className="mt-4 text-sm">
        Edit <code>src/renderer/src/App.tsx</code> to get started.
      </p>
    </div>
  )
}

export default App
