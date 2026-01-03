import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/route";

const Home = async () => {
  const session = await auth();
  console.log("session", session);
  return (
    <div>
      <h1 className="h1-bold font-inter">
        The beginning to master next js seriously
        <form
          className="px-10 pt-25"
          action={async () => {
            "use server";
            await signOut({
              redirectTo: ROUTES.SIGN_IN,
            });
          }}
        >
          <Button type="submit">SignOut</Button>
        </form>
      </h1>
    </div>
  );
};

export default Home;
