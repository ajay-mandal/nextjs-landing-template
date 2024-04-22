import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import Image from "next/image";

const font = Poppins({
    subsets: ['latin'],
    weight: ['600']
});

interface HeaderProps {
    label: string;
}

export const Header = (
    {
        label,
    }: HeaderProps) =>{
        return(
            <div className="w-full flex flex-col gap-y-4 items-center justify-center">
                <div className="flex flex-row gap-x-1">
                    <Image
                        src="/logo.svg"
                        alt="MusicBee logo"
                        width={40}
                        height={40}
                        />
                    <h1 className={cn(
                        "text-3xl font-semibold",
                        font.className,
                    )}>
                        MusicBee
                    </h1>
                </div>
                <p className="text-muted-foreground text-sm">
                    {label}
                </p>

            </div>
        )
}
