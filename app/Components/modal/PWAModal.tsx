export default function PWAModal({isOpen , onClose , onInstall}:any) {
 
  return (
   isOpen && ( <div className='fixed  inset-0 flex items-center justify-center z-50'>
        <div className='bg-white w-94 p-4 rounded-lg shadow-lg'>
        <h2 className='text-lg font-semibold mb-2 text-black'>
            Install the App
        </h2>
        <p>
        Click the button to install app on your device
        </p>
        <div>
            <button onClick={onInstall}
             className='bg-blue-500 hover:blue-600 p-2 mr-4 rounded-lg 
            text-white'>
             Install PWA
            </button>

            <button className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-2 rounded-lg" onClick={onClose}>
             Close
            </button>
        </div>

        </div>
        <div className="fixed inset-0 bg-gray-900 opacity-75 -z-10">

        </div>
    </div>
   )
  )
}
