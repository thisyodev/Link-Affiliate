import { ExternalLink, Star, Sparkles } from 'lucide-react';
import yodevFavicon from './assets/yodev-favicon.png';
const socialLinks = [
  { name: "Facebook", icon: "📘", url: "https://facebook.com/yourprofile" },
  { name: "Instagram", icon: "📸", url: "https://instagram.com/yourprofile" },
  // { name: "Telegram", icon: "✈️", url: "https://t.me/yourprofile" },
  { name: "YouTube", icon: "▶️", url: "https://youtube.com/yourchannel" },
];

const buttons = [
  { text: "Tickets to world tour!", url: "#", priority: "high", icon: <Star className="w-4 h-4" /> },
  { text: "Buy Henderson merch!", url: "#", priority: "medium", icon: <Sparkles className="w-4 h-4" /> },
  { text: "Subscribe for 10% off first order!", url: "#", priority: "medium", icon: <ExternalLink className="w-4 h-4" /> },
  { text: "EXCLUSIVE CONTENT!!!", url: "#", priority: "high", icon: <Sparkles className="w-4 h-4" /> },
];

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-screen-sm mx-auto space-y-6 sm:space-y-8">

          {/* Profile Section */}
          <div className="text-center space-y-4">
            <div className="relative inline-block">
              <img
                src="/api/placeholder/120/120"
                alt="Henderson"
                className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full border-4 border-white/30 object-cover shadow-2xl backdrop-blur-sm"
              />
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white shadow-lg"></div>
            </div>
            <div className="space-y-2">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                Henderson
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-white/80 max-w-xs mx-auto leading-relaxed">
                Hello, welcome to my page ✨
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 sm:gap-6 flex-wrap">
            {socialLinks.map(({ name, icon, url }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="w-12 h-12 sm:w-14 sm:h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-xl sm:text-2xl hover:bg-white/20 hover:scale-110 transition-all duration-300 shadow-lg"
              >
                {icon}
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 sm:space-y-4">
            {buttons.map(({ text, url, priority, icon }) => (
              <a
                key={text}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative block w-full py-3 sm:py-4 px-6 rounded-2xl font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 active:scale-95
                  ${priority === 'high'
                    ? 'bg-gradient-to-r from-pink-500 to-orange-500 text-white shadow-lg hover:shadow-pink-500/25'
                    : 'bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20 hover:border-white/30'}`}
              >
                <div className="flex items-center justify-center gap-2">
                  {icon}
                  <span className="text-center">{text}</span>
                </div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500 to-orange-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </a>
            ))}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-center gap-2 pt-6 sm:pt-8 text-xs sm:text-sm text-white/50">
            <img
              src={yodevFavicon}
              alt="pongsiriyo"
              className="w-4 h-4 sm:w-5 sm:h-5 opacity-70"
            />
            <span>Powered by pongsiriyo</span>
          </div>
        </div>
      </main>

      {/* Floating Elements */}
      <div className="absolute top-20 left-4 w-2 h-2 bg-pink-400 rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute bottom-40 right-8 w-3 h-3 bg-purple-400 rounded-full opacity-40 animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 right-4 w-1 h-1 bg-white rounded-full opacity-50 animate-pulse delay-500"></div>
    </div>
  );
}
