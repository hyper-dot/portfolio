import { cn } from "@/lib/utils";

const MenuIcon = ({ open, setOpen }: { open: boolean; setOpen: any }) => {
  return (
    <button
      title="You want to see menus ?"
      className="absolute right-4 z-50 block w-[28px] space-y-[0.5rem] md:w-[32px]"
      onClick={() => setOpen(!open)}
    >
      <span
        className={cn(
          "block h-[3px] w-full rounded-3xl bg-primary transition-all duration-500",
          open ? "translate-y-[0.3rem] rotate-45 bg-primary-foreground" : "",
        )}
      ></span>
      <span
        className={cn(
          "block h-[3px] w-[90%] -translate-x-1 rounded-3xl bg-primary transition-all duration-500",
          open
            ? "absolute bg-primary-foreground opacity-0"
            : "static opacity-100",
        )}
      ></span>
      <span
        className={cn(
          "block h-[3px] w-full rounded-3xl bg-primary transition-all duration-500",
          open ? "-translate-y-[0.4rem] -rotate-45 bg-primary-foreground" : "",
        )}
      ></span>
    </button>
  );
};

export default MenuIcon;
