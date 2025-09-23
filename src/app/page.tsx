import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-[calc(100vh-20vh)] flex-col items-center justify-between p-24">
        <h1 className="text-5xl font-bold">Welcome to the Home Page</h1>
        <p className="mt-4 text-lg">This is the main content area.</p>
      </main>
      <Footer />
    </>
  );
}
