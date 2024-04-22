import Navbar from "@/components/Navbar";
import Navbar_auth from "./_components/Navbar_auth";

interface ProtectedLayoutProps {
    children: React.ReactNode;
}
export default function ProtectedLayout ({children}: ProtectedLayoutProps) {
    return(
    <div className="h-full w-full bg-gray-200" suppressHydrationWarning>
        <div className="px-4 py-5 flex justify-center">

        </div>
        <div className="flex flex-col gap-y-10 px-4 items-center">
            {children}
        </div>
    </div>
)
}
