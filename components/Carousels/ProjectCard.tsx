import {
    Card,
    CardContent,
} from "@/components/ui/card"
import { CustomBadge } from "@/types";
import { Badge } from "../ui/badge";
import * as Typography from "../Typography/Typography"
import { Button } from "../ui/button";
import Image from "next/image";
import { CarouselNext, CarouselPrevious } from "../ui/carousel";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

type JobCardProps = {
    title: string;
    imageSrc: string;
    description: string;
    badges: CustomBadge[];
    showReadMore: boolean
    projectLink: string
    showGuide?: boolean;

}

const ProjectCard = ({ title, imageSrc, description, showReadMore, projectLink, badges, showGuide = true }: JobCardProps) => {
    return (
        <>
            <Card className={`flex flex-col w-full max-w-[25rem] lg:max-w-full bg-black/15 rounded-lg overflow-hidden border-none text-white select-none`}>
                <Image
                    src={imageSrc}
                    alt={""}
                    width={500}
                    height={300}
                    layout={"responsive"}
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
                        {showReadMore && (
                            <div className="flex flex-row ">
                                <a href={projectLink} target="_blank">
                                    <Button className="shadow-md border-[3px] bg-white text-black border-none" variant={"secondary"}> Read more (In Finnish) </Button>
                                </a>
                            </div>
                        )}
                        {showGuide && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 3.5, duration: 1 }}
                                className="justify-self-end w-full flex flex-row justify-end pr-5"
                            >
                                <ChevronDoubleRightIcon className="animate-bounce w-10 h-10 text-white" />
                            </motion.div>
                        )}

                    </div>
                </CardContent>
            </Card>
        </>
    )
}

export default ProjectCard;
