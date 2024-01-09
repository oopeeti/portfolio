import {
    Card,
    CardContent,
} from "@/components/ui/card"
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
                    <Badge key={index} className="bg-gray-600">{badge}</Badge>
                )}
            </div>
        )
    }

    return (
        <Card className="flex flex-col rounded-md items-center bg-black bg-opacity-20 text-white p-10 cursor-pointer transition-opacity duration-200 border-none select-none shadow-xl m-5">
            <a className="flex flex-col items-center space-y-5 h-full rounded-md" href={companyLink} target="_blank">
                <h4 className="text-xl md:text-2xl pb-2 font-bold">{company}</h4>
                <img
                    className="w-20 h-20 md:w-28 md:h-28 rounded-sm flex-shrink-0 object-cover object-center shadow-sm"
                    src={companyLogo}
                    alt="logo"
                />
                <p className="font-semibold text-md md:text-xl">{title}</p>
                <Badges />
                <p className="uppercase text-gray-300 text-sm md:text-md">
                    {workTime}
                </p>
            </a>
            <CardContent className="flex flex-col p-6">
                {description}
            </CardContent>
        </Card>
    )
}

export default ExperienceCard;
