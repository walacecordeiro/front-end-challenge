"use client";

import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function PostPage() {
  return (
    <div className="flex flex-col max-w-full mx-auto">
      <article>
        <div className="mb-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-2">
            O título aqui dsdf sdf
          </h1>
          <div className="flex flex-wrap gap-4 text-muted-foreground text-xs sm:text-sm mb-4">
            <div className="flex items-center gap-2">
              <Calendar size={16} />5 de fevereiro de 2025
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />5 min de leitura
            </div>
            <div className="flex items-center gap-2">
              <User size={16} />
              Walace Cordeiro
            </div>
          </div>
        </div>

        <Image
          src=""
          alt=""
          width={800}
          height={400}
          className="mb-6 h-64 w-full rounded-lg object-cover"
          priority
          onError={(e) => {
            e.target.src =
              "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop";
          }}
        />

        <div className="text-foreground text-xs sm:text-base mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quis
          quidem a, quasi omnis esse est eligendi officiis fugit similique eum
          soluta iste blanditiis autem vel neque at, excepturi non?
        </div>
      </article>

      <Link
        href="/"
        className="sticky bg-background self-end bottom-6 mt-6 rounded-lg transition-all hover:scale-105 overflow-hidden shadow-md"
      >
        <div className="inline-flex bg-primary/50 items-center justify-center gap-2 text-sm px-5 py-2 transition-all hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 hover:scale-105">
          <ArrowLeft size={16} />
          Voltar para o início
        </div>
      </Link>
    </div>
  );
}
