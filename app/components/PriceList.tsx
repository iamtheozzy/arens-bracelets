const PriceList = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-md max-w-md w-full p-6 space-y-6">
        {/* Title Section */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold font-serif">PRICE LIST</h1>
          <p className="text-gray-600 italic">bracelets</p>
        </div>

        {/* Colors Section */}
        <div className="space-y-3">
          <h2 className="bg-green-50 text-green-800 px-3 py-2 rounded-md font-medium">
            Colors
          </h2>
          <ul className="space-y-2 px-4">
            <li className="flex justify-between">
              <span>One color</span>
              <span>$1</span>
            </li>
            <li className="flex justify-between">
              <span>Two colors</span>
              <span>$1</span>
            </li>
            <li className="flex justify-between">
              <span>Multi colors</span>
              <span>$1</span>
            </li>
          </ul>
        </div>

        {/* Themes Section */}
        <div className="space-y-3">
          <h2 className="bg-green-50 text-green-800 px-3 py-2 rounded-md font-medium">
            Themes
          </h2>
          <ul className="space-y-2 px-4">
            <li className="flex justify-between">
              <span>Thanksgiving</span>
              <span>$3</span>
            </li>
            <li className="flex justify-between">
              <span>Sports</span>
              <span>$3</span>
            </li>
            <li className="flex justify-between">
              <span>Christmas</span>
              <span>$3</span>
            </li>
          </ul>
        </div>

        {/* Personalized Section */}
        <div className="space-y-3">
          <h2 className="bg-green-50 text-green-800 px-3 py-2 rounded-md font-medium">
            Personalized
          </h2>
          <ul className="space-y-2 px-4">
            <li className="flex justify-between">
              <span>Name and colors</span>
              <span>$5</span>
            </li>
          </ul>
        </div>

        {/* Footer */}
        <div className="text-center pt-4 border-t">
          <p className="text-gray-600 font-serif text-sm">Aren Seghetti</p>
        </div>
      </div>
    </div>
  );
};

export default PriceList;
