import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const profile = () => {
  return (
    <div className="flex flex-col items-center text-center">
      <Link href="/">
        <Avatar className="w-[200px] h-[200px] grayscale">
          <AvatarImage src="/avatar.png" />
          <AvatarFallback>JL</AvatarFallback>
        </Avatar>
      </Link>
      <h1 className="font-semibold mt-2 py-2.5 text-xl font-heading">
        Vignesh T D / Vithan
      </h1>
      <p className="">Platform Engineer & Statistician </p>
    </div>
  );
};

export default profile;
