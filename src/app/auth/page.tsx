import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <div className="h-full flex items-center justify-center py-32">
      <form action="" className="max-w-[300px] space-y-2">
        <Input placeholder="username" />
        <Input type="password" placeholder="password" />
        <Button className="w-full">Submit</Button>
      </form>
    </div>
  );
};

export default page;
