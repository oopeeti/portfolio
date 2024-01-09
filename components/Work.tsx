import ExperienceCarousel from "./Experience/ExperienceCarousel";
import ProjectsCarousel from "./Projects/ProjectsCarousel";

export default function Work() {
    return (
        <div className="flex flex-col space-y-10 xl:space-y-0 xl:flex-row xl:items-start items-center justify-center">
            <ExperienceCarousel showNavigation={false} />
            <ProjectsCarousel showNavigation={false} />
        </div>
    )
}