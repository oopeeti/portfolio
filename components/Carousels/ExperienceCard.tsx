import {
    Card,
    CardContent,
} from "@/components/ui/card"
import Image from "next/image";
import * as Typography from "../Typography/Typography"
import { Badge } from "../ui/badge";
import { motion } from "framer-motion";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/solid";

type JobCardProps = {
    companyLogo: string;
    company: string;
    companyLink: string;
    title: string;
    workTime: string;
    description: string;
    badges: string[];
    showGuide?: boolean;
}



const ExperienceCard = ({ company, companyLogo, title, workTime, description, companyLink, badges, showGuide = true }: JobCardProps) => {
    const Badges = () => {
        return (
            <div className="flex space-x-2">
                {badges.map((badge, index) =>
                    <Badge key={index} variant={"outline"} className="flex items-center justify-center bg-white text-black">{badge}</Badge>
                )}
            </div>
        )
    }

    return (
        <Card className={`flex flex-col w-full max-w-[25rem] lg:max-w-full bg-black/15 border-none overflow-hidden shadow-xl rounded-lg text-white select-none`}>
            <a className="flex flex-col items-center gap-5 h-full rounded-md py-5" href={companyLink} target="_blank">
                <Typography.H1>{company}</Typography.H1>
                <Image
                    src={companyLogo}
                    alt="logo"
                    width={100}
                    height={100}
                    layout={"responsive"}
                    className="max-w-[100px] lg:max-w-[100px] rounded-full"
                />
                <Typography.H3>{title}</Typography.H3>
                <Badges />
                <Typography.H4>{workTime}</Typography.H4>
            </a>
            <CardContent className="flex flex-col pt-6">
                <Typography.P>{description}</Typography.P>
            </CardContent>
            {showGuide && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3.5, duration: 1 }}
                    className="justify-self-end w-full flex flex-row justify-end pr-10 pb-5"
                >
                    <ChevronDoubleRightIcon className="animate-bounce w-10 h-10 text-white" />
                </motion.div>
            )}

        </Card>
    )
}

export default ExperienceCard;
