import { IconName } from "lucide-react/dynamic";

export type WhyMeInfo = {
    title: string;
    description: string;
    icon: React.ReactNode;
    color: string;
    backgroundColor: string;
    iconColor: string;
}


export type TMenuItems =
    { name: string; href: string; icon: IconName };

export type TProject = {
    title: string,
    description: string,
    imageUrl: string,
    link: string,
    date: string,
    bgColor: string,
};

export type TExperience = {
    title: string;
    company: string;
    date: string;
    image: string;
};
