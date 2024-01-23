"use cliet";

import Link from "next/link";
import { Button } from "../ui/button";

interface BackButtonProps {
    href: string;
    label: string;
};

export const BackButton = ({
    href,
    label,
}: BackButtonProps) => {
    return (
        <Button
            variant="link"
            className="font-bold w-full"
            size="default"
            asChild 
        >
            <Link href={href}>
                {label}
            </Link>
        </Button>
    )
}

