import { IconBrandX, IconBrandDiscord, IconBrandGithub } from "@tabler/icons-react";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen relative">
      <img src="logo.png" className="w-96 drop-shadow-2xl" />
      <div className="flex space-x-8 mt-4 z-10 text-[#db4a2b]">
        <a
          href="https://x.com/kumo_labs"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-glow"
        >
          <IconBrandX size={48} />
        </a>
        <a
          href="https://discord.gg/wWdYejq25K"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-glow"
        >
          <IconBrandDiscord size={48} />
        </a>
        <a
          href="https://github.com/kumolabs-co"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-glow"
        >
          <IconBrandGithub size={48} />
        </a>
      </div>
      <div className="absolute bottom-0 left-0 p-2 text-gray-600">
        &copy; {new Date().getFullYear()} kumo labs
      </div>
    </div>
  );
}

export default App;
