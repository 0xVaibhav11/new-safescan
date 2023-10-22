import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Card1 from "../Card1/Card1";

const Drawer = () => {
  return (
    <>
      <Sheet className="w-[600px] sm:w-[540px]">
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent className="w-[400px] sm:w-[540px]">
          <SheetHeader className="w-[600px] sm:w-[540px]">
            <Card1 />
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
};
export default Drawer;
