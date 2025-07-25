import PostCard from "@/components/PostCard";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 p-4 md:p-8 lg:p-12">
        <div className="max-w-full md:max-w-[95%] lg:max-w-[80%] mx-auto md:px-6">
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">Blog de Desenvolvimento</h1>
            <p className="text-base md:text-lg lg:text-[1.2rem] max-w-full md:max-w-[600px] mx-auto">
              Conteúdo técnico e insights para desenvolvedores. Explore as
              últimas tendências e melhores práticas em desenvolvimento.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
          </div>
        </div>
      </main>
    </div>
  );
}
