import Footer from "@/components/footer";
import NavBar from "@/components/nav";
import Profile from "@/components/profile";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Everything about me.",
};

const AboutPage = () => {
  return (
    <main className="flex flex-col items-center min-h-screen p-8">
      <div className="w-full flex justify-end">
        <NavBar />
      </div>
      <div className="my-10">
        <Profile />
      </div>
      <div className="w-full max-w-2xl flex-grow">
        <div className="w-full">
          <div className="flex flex-col justify-between gap-5 items-start leading-7 text-wrap">
            <p>
              Hi, I'm Vignesh. I'm a Platform Engineer and Statistician. I
              specialize in building scalable and reliable systems. I have a
              passion for statistics and data analysis. I'm a huge fan of
              open-source software and I love to contribute to the community. This was genrated apparently,  will add about myself when I'm in feeling to express. 
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default AboutPage;
