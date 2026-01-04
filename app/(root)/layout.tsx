import LeftSideBar from "@/components/navigation/LeftSideBar";
import Navbar from "@/components/navigation/navbar";
import RightSideBar from "@/components/navigation/RightSideBar";
import { ReactNode } from "react";

function RootLayout({ children }: { children: ReactNode }) {
  return (
    <main className="flex h-screen flex-col overflow-hidden">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <LeftSideBar />
        <section className="flex flex-1 flex-col overflow-y-auto px-6 py-6 max-md:pb-14 sm:px-14">
          <div className="mx-auto w-full max-w-5xl">{children}</div>
        </section>
        <RightSideBar />
      </div>
    </main>
  );
}

export default RootLayout;
