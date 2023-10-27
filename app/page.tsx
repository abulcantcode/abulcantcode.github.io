import NavBar from "./_components/NavBar";
import MainSection from "./_components/MainSection";

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col bg-white dark:bg-black'>
      <NavBar />
      <MainSection />
    </main>
  );
}
