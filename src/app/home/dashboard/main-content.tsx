import { PropsWithChildren } from "react";
export default function MainContent({children} : PropsWithChildren) {
  return (
    <div className="">
     {children}
    </div>
  );
}
