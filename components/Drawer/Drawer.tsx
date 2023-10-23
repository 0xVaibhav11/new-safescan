import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Card from "../Card/Card";

const Drawer = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger>Open</SheetTrigger>

        <SheetContent className="w-[1000px]  mr-[10rem]  ml-[4rem] bg-[transparent] sm:w-[540px]">
          <Card />
        </SheetContent>
      </Sheet>
    </>
  );
};
export default Drawer;
