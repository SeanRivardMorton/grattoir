import { Button } from "@/components/ui/button";
import { ChevronRightIcon, Pencil } from "lucide-react";
import Link from "next/link";

const NavBar = ({ items }: { items: string[] }) => {
  return (
    <ul className="flex flex-row gap-2">
      {items.map((item) => {
        return (
          <li className="w-16 flex flex-col my-auto">
            <Button variant="outline" className="flex flex-col h-16 border-2">
              <ChevronRightIcon className="h-6 w-6" />
            </Button>
            <div className="mx-auto">{item}</div>
          </li>
        );
      })}
    </ul>
  );
};

export default NavBar;
