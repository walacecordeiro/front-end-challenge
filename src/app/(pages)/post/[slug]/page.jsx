"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchPostBySlug } from "@/lib/services/api";
import { formatDate } from "@/lib/utils/formatDate";
import { calculateReadingTime } from "@/lib/utils/calculateReadingTime";

import { ArrowLeft, Calendar, Clock, User } from "lucide-react";

import Image from "next/image";
import Loading from "@/app/loading";
import LinkButton from "@/components/LinkButton";

export default function PostPage() {
  const params = useParams();
  const [post, setPost] = useState(null);

  const featuredImage = post && post._embedded?.["wp:featuredmedia"]?.[0];
  const imageUrl = featuredImage?.source_url;
  const imageAlt = featuredImage?.alt_text || post?.title?.rendered;
  const author = post && post._embedded?.author?.[0];

  useEffect(() => {
    if (params.slug) {
      loadPost(params.slug);
    }
  }, [params.slug]);

  const loadPost = async (slug) => {
    try {
      const postData = await fetchPostBySlug(slug);
      console.log(postData);

      if (!postData) {
        return;
      }

      setPost(postData);
    } catch (err) {
      console.error("Erro ao carregar o post: ", err);
    }
  };

  return (
    <>
      {/* esta verificação do post é obrigatória aqui */}
      {post ? (
        <div className="flex flex-col max-w-full lg:max-w-[70%] mx-auto">
          <article>
            <div className="mb-6">
              <h1
                className="text-xl lg:text-4xl font-bold text-primary mb-2"
                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
              />

              <div className="flex flex-wrap gap-4 text-muted-foreground text-xs sm:text-sm mb-4">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  {formatDate(post.date)} de fevereiro de 2025
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  {calculateReadingTime(post.content.rendered)} min de leitura
                </div>

                {author && (
                  <div className="flex items-center gap-2">
                    <User size={16} />
                    {author.name}
                  </div>
                )}
              </div>
            </div>

            <Image
              src={imageUrl}
              alt={imageAlt}
              width={800}
              height={400}
              className="mx-auto mb-6 rounded-lg object-contain"
              priority
              onError={(e) => {
                e.target.src =
                  "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop";
              }}
            />

            <div
              className="text-foreground text-xs sm:text-base mb-4 [&_h2]:text-primary [&_h2]:text-lg lg:[&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:mb-2 [&_p]:mb-4 [&_p]:leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            />
          </article>

          <LinkButton
            url="/"
            icon={<ArrowLeft size={16} />}
            innerText="Voltar para o início"
            className="sticky bg-background self-end bottom-6"
          />
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
