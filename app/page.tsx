import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";

import { CourseCard } from "@/components/course-card";
import { CardsList } from "@/components/item-card";
import { subtitle, title } from "@/components/primitives";
import { siteConfig } from "@/config/site";
import { AppIcons } from "@/constants/icons";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>Lorem ipsum dolor</span>
        <br />
        <span className={title()}>Lorem ipsum dolor sit amet</span>
        <div className={subtitle({ class: "mt-4" })}>
          Lorem ipsum dolor sit amet, consectetur adipisicing.
        </div>
      </div>

      <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={siteConfig.links.docs}
        >
          Get started for free
          <AppIcons.ArrowRight size={20} />
        </Link>
      </div>

      <div className="mt-8 w-full">
        <CardsList />
      </div>
      <div className="mt-8 w-full">
        <CourseCard />
      </div>
    </section>
  );
}
