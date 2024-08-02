import { cn } from "@/lib/utils";

const MenuIcon = ({ open, setOpen }: { open: boolean; setOpen: any }) => {
  return (
    <button
      className="fixed right-4 z-50 block w-[28px] space-y-1"
      onClick={() => setOpen(!open)}
    >
      <span
        className={cn(
          "block h-[3px] w-full rounded-3xl bg-black transition-all duration-500",
          open ? "translate-y-full rotate-45 bg-white" : "",
        )}
      ></span>
      <span
        className={cn(
          "block h-[3px] w-[90%] -translate-x-1 rounded-3xl bg-black transition-all duration-500",
          open ? "absolute bg-white opacity-0" : "static opacity-100",
        )}
      ></span>
      <span
        className={cn(
          "block h-[3px] w-full rounded-3xl bg-black transition-all duration-500",
          open ? "-translate-y-full -rotate-45 bg-white" : "",
        )}
      ></span>
    </button>
  );
};

export default MenuIcon;
