"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { signIn } from "next-auth/react";
import ROUTES from "@/constants/route";

function SocilaAuthForm() {
  const btnDesign =
    "background-dark400_light900 body-medium text-dark200_light800 min-h-12 flex-1 px-4 py-3.5 rounded-2 cursor-pointer";

  const handleSignIN = async (provider: "github" | "google") => {
    try {
      await signIn(provider, {
        callbackUrl: ROUTES.HOME,
        redirect: true,
      });
    } catch (error) {
      console.log(error);
      toast.error("SignIn Error", {
        description:
          error instanceof Error
            ? error.message
            : "Something went wrong in SignIn",
      });
    }
  };

  return (
    <div className="flex mt-10 flex-wrap gap-2">
      <Button className={btnDesign} onClick={() => handleSignIN("github")}>
        <Image
          src="/icons/github.svg"
          alt="GitHub Icon"
          width={20}
          height={20}
          className="invert-colors mr-2.5 object-contain"
        />
        <span>LogIn With Github</span>
      </Button>
      <Button className={btnDesign} onClick={() => handleSignIN("google")}>
        <Image
          src="/icons/google.svg"
          alt="Google Icon"
          width={20}
          height={20}
          className="invert-colors mr-2.5 object-contain"
        />
        <span>LogIn With Google</span>
      </Button>
    </div>
  );
}

export default SocilaAuthForm;
