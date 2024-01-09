import {
    Card,
    CardContent,
} from "@/components/ui/card"
import Image from "next/image";
import * as Typography from "../Typography/Typography"
import { Badge } from "../ui/badge";

type JobCardProps = {
    companyLogo: string;
    company: string;
    companyLink: string;
    title: string;
    workTime: string;
    description: string;
    badges: string[];
}



const ExperienceCard = ({ company, companyLogo, title, workTime, description, companyLink, badges }: JobCardProps) => {
    const Badges = () => {
        return (
            <div className="flex space-x-2">
                {badges.map((badge, index) =>
                    <Badge key={index} variant={"outline"} className="flex items-center justify-center text-white">{badge}</Badge>
                )}
            </div>
        )
    }

    return (
        <Card className={`flex flex-col max-w-sm md:max-w-lg lg:max-w-2xl bg-black bg-opacity-20 rounded-md overflow-hidden shadow-lg border-none text-white select-none`}>
            <a className="flex flex-col items-center gap-5 h-full rounded-md py-5" href={companyLink} target="_blank">
                <Typography.H1>{company}</Typography.H1>
                <Image
                    src={companyLogo}
                    alt="logo"
                    width={0}
                    height={0}
                    layout={"responsive"}
                    className="max-w-[150px]"
                />
                <Typography.H3>{title}</Typography.H3>
                <Badges />
                <Typography.H4>{workTime}</Typography.H4>
            </a>
            <CardContent className="flex flex-col pt-6">
                <Typography.P>{description}</Typography.P>
            </CardContent>
        </Card>
    )
}

export default ExperienceCard;
