import { DynamicIconModule, IconName } from "lucide-react/dynamic";

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
