import DeployButton from "../components/DeployButton";
import AuthButton from "../components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import ConnectSupabaseSteps from "@/components/tutorial/ConnectSupabaseSteps";
import SignUpUserSteps from "@/components/tutorial/SignUpUserSteps";
import Header from "@/components/Header";
import { ModeToggle } from "@/components/ThemeToggle";
import LandingPage from "@/components/LandingPage";

export default async function Index() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <nav className="w-full flex justify-between border-b border-b-foreground/10 h-16">
        {/* {isSupabaseConnected && <>Logged in</>} */}
        <div></div>
        <div className="flex flex-row my-auto mr-4">
          <AuthButton />
          <ModeToggle />
        </div>
      </nav>

      {/* <div className="flex flex-col gap-20 max-w-4xl px-3"> */}
      {user ? <>protected</> : <LandingPage />}
      {/* </div> */}

      <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs"></footer>
    </div>
  );
}
