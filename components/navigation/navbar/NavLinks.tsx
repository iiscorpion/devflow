"use client";

import { SheetClose } from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

import { usePathname } from "next/navigation";
import React from "react";

function NavLinks({ isMobileNav = false }: { isMobileNav?: boolean }) {
  const pathename = usePathname();
  const userId = 1;
  return (
    <>
      {sidebarLinks.map((item) => {
        const isActivatePath =
          (pathename.includes(item.route) && item.route.length > 1) ||
          pathename === item.route;

        if (item.route === "/profile") {
          if (userId) item.route = `${item.route}/${userId}`;
          else return null;
        }

        const LinkComponent = (
          <Link
            href={item.route}
            key={item.label}
            className={cn(
              isActivatePath
                ? "primary-gradient rounded-lg text-light-900"
                : "dark300_light900",
              "flex item-center justify-start gap-4 bg-transparent p-4"
            )}
          >
            <Image
              src={item.imgURL}
              alt={item.label}
              width={26}
              height={26}
              className={cn({ "invert-colors": !isActivatePath })}
            />
            <p
              className={
                (cn(isActivatePath ? "base-bold" : "base-medium"),
                !isMobileNav && "max-lg:hidden")
              }
            >
              {item.label}
            </p>
          </Link>
        );
        return isMobileNav ? (
          <SheetClose asChild key={item.route}>
            {LinkComponent}
          </SheetClose>
        ) : (
          <React.Fragment key={item.route}>{LinkComponent}</React.Fragment>
        );
      })}
    </>
  );
}

export default NavLinks;
