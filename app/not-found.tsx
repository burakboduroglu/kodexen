import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="max-w-xl mx-auto text-center relative">
        {/* Stars animation background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="stars" />
          <div className="stars2" />
          <div className="stars3" />
        </div>

        {/* Animated planet */}
        <div className="relative">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-blue-500 shadow-2xl animate-float">
            <div className="absolute inset-2 rounded-full bg-blue-400 opacity-50" />
            <div className="absolute inset-4 rounded-full bg-blue-300 opacity-50" />
            {/* Crater details */}
            <div className="absolute top-6 left-8 w-4 h-4 rounded-full bg-blue-600" />
            <div className="absolute top-10 right-10 w-6 h-6 rounded-full bg-blue-600" />
          </div>
        </div>

        {/* Text content */}
        <h1 className="text-6xl font-bold text-white mb-4 animate-pulse">
          404
        </h1>
        <h2 className="text-2xl font-semibold text-blue-400 mb-8">
          Houston, we have a problem!
        </h2>
        <p className="text-gray-400 mb-8">
          Görünüşe göre aradığınız sayfa uzayın derinliklerinde kaybolmuş.
        </p>

        {/* Return button */}
        <Link
          href="/"
          className="relative hover:cursor-pointer inline-flex items-center px-6 py-3 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-200"
        >
          <span className="mr-2">🚀</span>
          Ana Sayfaya Dön
        </Link>
      </div>
    </div>
  );
}
