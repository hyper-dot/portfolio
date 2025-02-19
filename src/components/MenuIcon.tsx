import { Menu, X } from "lucide-react";

const MenuIcon = ({ open, setOpen }: { open: boolean; setOpen: any }) => {
  return (
    <button
      title="You want to see menus ?"
      className="right-4 z-50 block rounded-full bg-primary p-2 text-primary-foreground"
      onClick={() => setOpen(!open)}
    >
      {open ? <X size={32} /> : <Menu size={32} />}
    </button>
  );
};

export default MenuIcon;
