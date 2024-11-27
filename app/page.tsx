import { Caveat } from 'next/font/google';

const caveat = Caveat({
  subsets: ['latin'],
  display: 'swap'
});

export default function Home() {
  return (
    <div className="min-h-screen bg-green-100">
      <h1
        className={`text-7xl font-bold text-emerald-800 text-center pt-12 ${caveat.className}`}
      >
        Aren Seghetti&apos;s Bracelets
      </h1>

      <div className="container mx-auto px-4 py-8 max-w-2xl space-y-12">
        {/* Colors Section */}
        <div className="relative pt-4">
          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2">
            <h2 className="text-emerald-50 text-2xl font-bold px-6 py-1 bg-emerald-800 rounded-full whitespace-nowrap">
              Colors
            </h2>
          </div>
          <div className="bg-emerald-50 rounded-lg shadow-md p-6 border-2 border-emerald-600 min-h-[160px] pt-8">
            <ul className="space-y-2 text-emerald-700">
              <li className="flex justify-between text-lg font-semibold">
                <span>One Color</span>
                <span>$1</span>
              </li>
              <li className="flex justify-between text-lg font-semibold">
                <span>Two Colors</span>
                <span>$1</span>
              </li>
              <li className="flex justify-between text-lg font-semibold">
                <span>Multi Colors</span>
                <span>$1</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Themes Section */}
        <div className="relative pt-4">
          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2">
            <h2 className="text-emerald-50 text-2xl font-bold px-6 py-1 bg-emerald-800 rounded-full whitespace-nowrap">
              Themes
            </h2>
          </div>
          <div className="bg-emerald-50 rounded-lg shadow-md p-6 border-2 border-emerald-600 min-h-[160px] pt-8">
            <ul className="space-y-2 text-emerald-700">
              <li className="flex justify-between text-lg font-semibold">
                <span>Thanksgiving</span>
                <span>$3</span>
              </li>
              <li className="flex justify-between text-lg font-semibold">
                <span>Sports</span>
                <span>$3</span>
              </li>
              <li className="flex justify-between text-lg font-semibold">
                <span>Christmas</span>
                <span>$3</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Personalized Section */}
        <div className="relative pt-4">
          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2">
            <h2 className="text-emerald-50 text-2xl font-bold px-6 py-1 bg-emerald-800 rounded-full whitespace-nowrap">
              Personalized
            </h2>
          </div>
          <div className="bg-emerald-50 rounded-lg shadow-md p-6 border-2 border-emerald-600 min-h-[160px] pt-8">
            <ul className="space-y-2 text-emerald-700">
              <li className="flex justify-between text-lg font-semibold">
                <span>Name and colors</span>
                <span>$5</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <footer
        className={`text-center py-4 text-emerald-800 ${caveat.className}`}
      >
        Aren Seghetti
      </footer>
    </div>
  );
}
