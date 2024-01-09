"use client"

import ExperienceCarousel from "@/components/Experience/ExperienceCarousel";
import ProjectsCarousel from "@/components/Projects/ProjectsCarousel";

const Work = () => {
    return (
        <div className="flex h-full w-screen flex-col">
            <div className="flex flex-col lg:flex-row justify-center gap-10">
                <ExperienceCarousel showNavigation={false} />
                <ProjectsCarousel showNavigation={false} />
            </div>

        </div>
    )
}

export default Work;