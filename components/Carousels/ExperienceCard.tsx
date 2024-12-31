import {
    Card,
    CardContent,
} from "@/components/ui/card"
import Image from "next/image";
import * as Typography from "../Typography/Typography"
import { Badge } from "../ui/badge";

type JobCardProps = {
    company: string;
    companyLink: string;
    title: string;
    workTime: string;
    description: string;
    badges: string[];
}



const ExperienceCard = ({ company, title, workTime, description, companyLink, badges }: JobCardProps) => {
    const Badges = () => {
        return (
            <div className="flex flex-col items-center">
                <Typography.Italic>Technologies</Typography.Italic>
                <div className="flex pt-5 flex-col space-x-0 space-y-2 lg:flex-row lg:space-y-0 lg:space-x-2">
                    {badges.map((badge, index) =>
                        <Badge key={index} variant={"outline"} className="flex items-center justify-center bg-white text-sm text-black">{badge}</Badge>
                    )}
                </div>

            </div>
        )
    }

    return (
        <a className="flex flex-col items-center h-full rounded-md py-5" href={companyLink} target="_blank">
            <Card className={`flex flex-col w-full max-w-[25rem] lg:max-w-full min-h-[500px] justify-start items-center bg-black/50 border-none overflow-hidden shadow-xl rounded-lg text-white select-none`}>
                <div className="flex items-center justify-center flex-col mt-10 mb-5">
                    <Typography.H1>{company}</Typography.H1>
                    <Typography.Large className="mt-4">{title}</Typography.Large>
                    <Typography.Italic>{workTime}</Typography.Italic>
                </div>

                <CardContent className="flex flex-col space-y-10 items-center px-14">
                    <Typography.P >{description}</Typography.P>
                    <Badges />
                </CardContent>
            </Card >
        </a >
    )
}

export default ExperienceCard;
