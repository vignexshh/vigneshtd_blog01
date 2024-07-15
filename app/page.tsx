import Footer from "@/components/footer";
import NavBar from "@/components/nav";
import Profile from "@/components/profile";
import HomePosts from "../components/posts";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen p-8">
      <div className="w-full flex justify-end">
        <NavBar />
      </div>
      <div className="my-10">
        <Profile />
      </div>
      <div className="flex flex-col items-center flex-grow">
        <div className="w-full max-w-2xl">
          <HomePosts />
        </div>
      </div>
      <Footer />
    </main>
  );
}
