import NavBar from "@/components/Nav";
import StandardPage from "@/components/StandardPage";
import { Separator } from "@/components/ui/separator";

export default function () {
  return (
    <StandardPage>
      <NavBar items={["Home", "work", "teflon"]}></NavBar>
      <section className="w-4/5 bg-slate-900 p-8 rounded-sm  mx-auto mt-16">
        <h1 className="text-2xl">First Objective</h1>
        <h2 className="text-lg">Input</h2>
        <Separator className="my-8" />
        <div className="max-w-[800px] mx-auto gap-8 flex flex-col">
          <h2 className="text-lg">Data Input</h2>
          <p>
            This will consist of the bare minimum necessary tools to input
            anything into the app.
          </p>
          <h2 className="text-lg">Workout Tracker</h2>
          <p>This is tracking the workouts that you've inputted.</p>
          <h2 className="text-lg">Workout Planner</h2>
          <p>
            Allow users to build rich workouts with time limitations.{" "}
            <a href="/gym/app">Link</a>
          </p>
        </div>
      </section>
      <section className="w-4/5 bg-slate-900 p-8 rounded-sm  mx-auto mt-16">
        <h1 className="text-2xl">Gym App</h1>
        <h2 className="text-lg">What is it?</h2>
        <Separator className="my-8" />
        <div className="max-w-[800px] mx-auto gap-8 flex flex-col">
          <p className="">
            This is going to be a gym app, that is for me. I am the main user.
          </p>
          <p className="">
            I have used many apps over the years, and all with various levels of
            success. Moving workouts around was always annoying as hell. When I
            want to design my own workout, I use a spreadsheet because it's way
            better than a list. As a programmer, I know that if something uses a
            spreadsheet, it can be turned into an app.
          </p>
          <p className="">
            I want it to help me with planning, tracking, and monitoring. I want
            to easily think about new workouts, and see if I'm hitting every
            muscle to an adequate level. I want to be able to plan it for my
            lifestyle. Flexibility if I miss a day. I want to it to plan optimal
            recovery windows.
          </p>
          <p>
            So.. There is a lot there I guess. The AI stuff can wait until I
            figure out how to get cheap access to AI. Honestly, could probably
            use something cheap.
          </p>
        </div>
      </section>
    </StandardPage>
  );
}
