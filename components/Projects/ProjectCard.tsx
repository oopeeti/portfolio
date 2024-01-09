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
    showReadMore: boolean
    projectLink: string

}

const ProjectCard = ({ title, imageSrc, description, showReadMore, projectLink, badges }: JobCardProps) => {
    return (
        <Card className={`flex flex-col max-w-sm lg:max-w-2xl bg-black bg-opacity-20 rounded-md overflow-hidden shadow-lg border-none text-white select-none`}>
            <Image
                src={imageSrc}
                alt={""}
                width={0}
                height={0}
                layout={"responsive"}
            />
            <div className="pt-7 px-6 grid-flow-col grid lg:grid-flow-col grid-rows-2 lg:grid-rows-1 gap-x-2 gap-y-2 uppercase">
                {badges?.map((badge, index) => (
                    <Badge key={index} variant={"outline"} className="flex items-center justify-center text-white">{badge.title}</Badge>
                ))}
            </div>

            <CardContent className="flex flex-col pt-7">
                <Typography.H1>{title}</Typography.H1>
                <Typography.P>{description}</Typography.P>
                {showReadMore && (
                    <div className="pt-7 l">
                        <a href={projectLink} target="_blank">
                            <Button className="shadow-md border-[3px]" variant={"ghost"}> Read more (In Finnish) </Button>
                        </a>
                    </div>
                )}
            </CardContent>
        </Card>
    )
}

export default ProjectCard;
