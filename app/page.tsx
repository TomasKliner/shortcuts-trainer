import Image from "next/image";

export default function Home() {
  return (
    <div className="flex w-full min-h-screen dark:bg-neutral-800">
      <section id="sidebar"
        className="w-64 dark:bg-neutral-600 rounded-r-xl p-4">
          <h1 className="dark:text-white font-black drop-shadow dark:bg-neutral-800 p-4 rounded-xl text-center
          ">SHORTCUTS TRAINER</h1>
      </section>
      <main id="editor"
        className="flex-grow">
      </main>
    
    </div>
  );
}
