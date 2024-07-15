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
              Welcome to <strong>Simple</strong>, a minimalist blog theme
              crafted for those who appreciate clean design and seamless
              performance. Built on the powerful <strong>Next.js</strong>{" "}
              framework, Simple offers a smooth, efficient, and highly
              customizable experience for both developers and end-users.
              Leveraging the cutting-edge capabilities of{" "}
              <strong>Framer Motion</strong>, Simple brings subtle, yet engaging
              animations to enhance user interaction without overwhelming the
              content. Additionally, the incorporation of{" "}
              <strong>shadcn</strong> ensures that design elements maintain a
              consistent yet visually appealing appearance across all devices.
            </p>
            <ul className="list-disc pl-5">
              <li>
                <strong>Minimalistic Design:</strong> Focus on your content
                without unnecessary distractions.
              </li>
              <li>
                <strong>Next.js Powered:</strong> Benefit from the speed, SEO
                advantages, and versatility of Next.js.
              </li>
              <li>
                <strong>Framer Motion Integration:</strong> Smooth animations
                that improve user engagement.
              </li>
              <li>
                <strong>Shadcn Styled Components:</strong> Consistent and
                attractive design elements made easy.
              </li>
              <li>
                <strong>Fully Responsive:</strong> Your blog will look great on
                any device, from mobile to desktop.
              </li>
            </ul>
            <p>
              Whether you are a seasoned developer or a blogging enthusiast,
              Simple provides all the tools you need to create a stunning and
              functional blog with minimal effort. Explore the elegance of
              simplicity with Simple. Thank you for choosing Simple. Happy
              blogging!
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default AboutPage;
