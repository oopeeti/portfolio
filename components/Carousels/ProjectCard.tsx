import {
    Card,
    CardContent,
} from "@/components/ui/card"
import { CustomBadge } from "@/types";
import { Badge } from "../ui/badge";
import * as Typography from "../Typography/Typography"
import { Button } from "../ui/button";
import Image from "next/image";

type JobCardProps = {
    title: string;
    imageSrc: string;
    description: string;
    badges: CustomBadge[];
    projectLink?: string
}

const ProjectCard = ({ title, imageSrc, description, projectLink, badges }: JobCardProps) => {
    return (
        <>
            <Card className={`flex flex-col w-full max-w-[25rem] lg:max-w-full bg-black/50 rounded-lg overflow-hidden border-none text-white select-none`}>
                <Image
                    src={imageSrc}
                    alt={""}
                    width={500}
                    height={300}
                    layout={"responsive"}
                    className="object-cover max-h-[300px]"
                />

                <CardContent className="flex flex-col pt-4">
                    <Typography.H1 >{title}</Typography.H1>
                    <div className="pt-7 grid grid-flow-col grid-rows-1 lg:grid-rows-1 gap-x-1 lg:gap-x-2 uppercase self-start">
                        {badges?.map((badge, index) => (
                            <Badge key={index} variant={"outline"} className="flex items-center justify-center font-medium bg-white text-black">{badge.title}</Badge>
                        ))}
                    </div>
                    <Typography.P>{description}</Typography.P>
                    <div className="w-full flex flex-row pt-7">
                        {projectLink && (
                            <div className="flex flex-row ">
                                <a href={projectLink} target="_blank">
                                    <Button className="shadow-md border-[3px] bg-white text-black border-none" variant={"secondary"}> Read more (In Finnish) </Button>
                                </a>
                            </div>
                        )}

                    </div>
                </CardContent>
            </Card>
        </>
    )
}

export default ProjectCard;
