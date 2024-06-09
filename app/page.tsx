import NavBar from "@/components/Nav";
import StandardPage from "@/components/StandardPage";

const defaultNav = ["Gym", "Budget", "Writing", "Travel"];

export default function () {
  return (
    <StandardPage>
      <NavBar items={defaultNav} />
      {/* <section className="w-4/5 h-48">asdf</section> */}
    </StandardPage>
  );
}
