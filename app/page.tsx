import NavBar from "@/components/Nav";
import StandardPage from "@/components/StandardPage";
import { Separator } from "@/components/ui/separator";

const defaultNav = ["Gym", "Budget", "Writing", "Travel"];

export default function () {
  return (
    <StandardPage>
      <NavBar items={defaultNav} />
      <section className="w-4/5 bg-slate-900 p-8 rounded-sm  mx-auto mt-16">
        <h1 className="text-2xl">Error Code 418</h1>
        <h2 className="text-lg">I'm a teapot</h2>
        <Separator className="my-8" />
        <div className="max-w-[800px] mx-auto gap-8 flex flex-col">
          <p className="">
            I was going to build a web scraping sass product. But then I got
            distracted. I had a few ideas, some are bubbling around in my brain.
            Really, the hard part is getting the habbit started of sitting down
            and starting to code.
          </p>
          <p>
            So... I think I might start building a gym app. My intent for this
            place is to be like.. a multitool for the current year
          </p>
        </div>
      </section>
    </StandardPage>
  );
}
