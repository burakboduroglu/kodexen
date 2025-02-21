import type {LucideIcon} from "lucide-react";

type Settings = {
    title: string;
    url: string;
    icon?: LucideIcon;
    isActive?: boolean;
    items?: {
        title: string;
        url: string;
    }
}[];