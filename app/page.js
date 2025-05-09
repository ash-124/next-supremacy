import oldDhaka from "@/public/oldDhaka.jpg"
import Image from "next/image";

export default function Home() {
  return (
    <div className="my-10">
      Proactively negotiate functional portals with resource-leveling customer service. Progressively maintain ethical metrics before bricks-and-clicks human capital. Enthusiastically formulate superior web services for interdependent channels. Conveniently procrastinate robust platforms via collaborative experiences. Compellingly integrate team driven niche markets without business niches.

      Synergistically predominate B2B alignments without web-enabled quality vectors. Intrinsicly exploit visionary methods of empowerment via cross-media materials. Monotonectally whiteboard value-added total linkage through integrated e-services. Seamlessly strategize timely e-markets with synergistic e-business. Enthusiastically leverage existing customized customer service and corporate quality vectors.


      Intrinsicly aggregate future-proof value via team building paradigms. Professionally drive adaptive materials via principle-centered information. Continually incubate turnkey interfaces without world-class functionalities. Distinctively.
      <div className=" w-[400px]">
        {/* <Image width={500} height={500} src={'https://i.pinimg.com/736x/f8/a6/e5/f8a6e530eff49fd9651859f6482bef2e.jpg'} alt="back of the success" /> */}
        <Image placeholder="blur" src={oldDhaka} alt="Puran Dhaka" />
      </div>
    </div>
  );
}
