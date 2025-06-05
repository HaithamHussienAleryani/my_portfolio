import React, { ReactNode } from "react";
import { Toaster } from "sonner";

function Layput({ children }: { children: ReactNode }) {
  return (
    <div>
      <Toaster />
      {children}
    </div>
  );
}

export default Layput;
