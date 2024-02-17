"use client";
import { toast } from "./ui/use-toast";
import { Button } from "./ui/button";

const PortfolioBtn = () => {
  return (
    <Button
      onClick={() =>
        toast({
          title: "Sorry !!🧐",
          description:
            "Currently under development ⚒. Please checkback later.",
        })
      }
    >
      View Portfolio
    </Button>
  );
};

export default PortfolioBtn;
