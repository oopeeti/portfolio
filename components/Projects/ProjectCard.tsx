import {
    Card,
    CardContent,
} from "@/components/ui/card"
import { CustomBadge } from "@/types";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";

import Image from "next/image"
import { Badge } from "../ui/badge";

type JobCardProps = {
    title: string;
    imageSrc: string;
    description: string;
    badges: CustomBadge[];
    showReadMore: boolean
    projectLink: string

}

export function ProjectCard({ title, imageSrc, description, showReadMore, projectLink, badges }: JobCardProps) {
    return (
        <Card className={`flex flex-col bg-black bg-opacity-20 overflow-hidden border-none max-w-[680px] shadow-2xl`}>
            <div className="flex flex-1 items-center justify-center">
                <img
                    src={imageSrc}
                    alt={title}
                    style={{ objectFit: "fill" }}
                />
            </div>
            <div className="pt-7 px-6 flex flex-row space-x-2 uppercase">
                {badges?.map((badge, index) => (
                    <Badge key={index} className="bg-orange-400 tracking-widest">{badge.title}</Badge>
                ))}
            </div>

            <CardContent className={`flex flex-col py-7 space-y-5`}>
                <h1 className="title-font text-2xl font-medium text-white">{title}</h1>
                <p className="font-normal text-white">{description}</p>
                <div className="flex flex-row items-center flex-wrap">
                    {showReadMore && (
                        <a href={projectLink} target="_blank">
                            <button
                                type="button"
                                className="text-gray-100 duration-200 flex text-sm items-center bg-blue-600 p-2 px-3 rounded-lg font-semibold shadow-xl">
                                Read more (In Finnish)
                                <ArrowRightCircleIcon className="h-7 w-7 pl-2" />
                            </button>
                        </a>
                    )}
                </div>
            </CardContent>
        </Card>
    )
}
