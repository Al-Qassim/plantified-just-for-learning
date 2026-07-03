import notificationIcon from "../../assets/nav_bar_icons/notification.svg"
import heartIcon from "../../assets/nav_bar_icons/heart.svg"
import basketIcon from "../../assets/nav_bar_icons/basket.svg"
import type { IconButtonProps } from "./IconButton";

export const tabs = ["Home", "Categories", "Blog", "Contacts", "About us"];

export const iconButtons: IconButtonProps[] = [
    {
        name: "Notification",
        iconAsset: notificationIcon,
        hasRedDot: true,
    },
    {
        name: "Heart",
        iconAsset: heartIcon,
        hasRedDot: false,
    },
    {
        name: "Basket",
        iconAsset: basketIcon,
        hasRedDot: false,
    }
]