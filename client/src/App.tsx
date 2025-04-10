import { ThemeButton } from "@/components/custom/ThemeButton";
import { ListView } from "@/components/views/list-view";

function App() {
  return (
    <>
      {/* Navbar  */}
      <nav className="flex items-center justify-between px-6 py-4 shadow-md bg-[#374151] text-white dark:bg-[#374151]">
        {/* Logo */}
        <div className="text-xl font-bold">LOGO</div>

        {/* ThemeToggleButton */}
        <ThemeButton />
      </nav>
      <div className="flex flex-col items-center justify-center min-h-svh">
        <ListView />
      </div>
    </>
  );
}

export default App;
