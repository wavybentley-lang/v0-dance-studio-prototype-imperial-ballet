"use client"

import Image from "next/image"
import { ChevronRight, MessageCircle } from "lucide-react"

import { brand } from "@/lib/site-config"

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden" style={{ background: "radial-gradient(ellipse at 70% 30%, #5C1535 0%, #3D0D26 50%, #250818 100%)" }}>
      <div className="absolute inset-0 z-0" style={{ background: "radial-gradient(ellipse at 75% 25%, rgba(192,21,42,0.22) 0%, rgba(139,14,30,0.12) 40%, transparent 65%), linear-gradient(135deg, rgba(15,15,15,0.98) 0%, rgba(22,22,22,0.95) 100%)" }} />
      <div className="absolute inset-0 z-0" style={{ background: "radial-gradient(circle at 15% 80%, rgba(192,21,42,0.08) 0%, transparent 30%), radial-gradient(circle at 90% 15%, rgba(139,14,30,0.10) 0%, transparent 35%)" }} />
      <div className="absolute inset-y-0 right-0 z-0 w-full overflow-hidden sm:[mask-image:linear-gradient(to_left,black_70%,transparent_100%)] lg:w-[62%]">
        <Image
          src="/imperial ballet/hero.jpg"
          alt="Imperial Ballet hero"
          fill
          priority
          quality={72}
          sizes="(max-width: 1024px) 100vw, 62vw"
          className="object-cover object-[center_15%]"
        />
        <div className="pointer-events-none absolute inset-0 z-[2]" style={{ background: ["linear-gradient(to right, #0F0F0F 0%, #0F0F0F 2%, rgba(15,15,15,0.95) 15%, rgba(15,15,15,0.6) 35%, rgba(15,15,15,0.0) 55%)", "linear-gradient(to left, #0F0F0F 0%, rgba(15,15,15,0.95) 8%, rgba(15,15,15,0.4) 22%, transparent 40%)", "linear-gradient(to bottom, #0F0F0F 0%, rgba(15,15,15,0.8) 8%, transparent 25%)", "linear-gradient(to top, #0F0F0F 0%, rgba(15,15,15,0.9) 12%, rgba(15,15,15,0.3) 28%, transparent 45%)"].join(", ") }} />
      </div>
      <div className="relative z-10 ml-0 max-w-7xl px-4 pt-40 pb-24 text-left sm:px-6 sm:pt-44 sm:pb-28 lg:mx-auto lg:w-1/2 lg:px-8 lg:pt-48 lg:pb-16">
        <div className="mb-6 inline-flex items-center rounded-full border border-[#F5F5F5]/20 bg-white/5 px-4 py-2 text-xs font-semibold tracking-[0.24em] text-[#F5F5F5]/85 uppercase motion-safe:animate-float-up">
          Scuola di Danza diretta da Melania e Rossella Mellino
        </div>
        <h1 className="mb-6 text-left font-serif text-4xl leading-[1.02] font-bold text-balance text-[#F5F5F5] italic sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[4.75rem]">
          <span className="inline-block motion-safe:animate-float-up">Coltiva il talento.</span>{" "}
          <span className="inline-block motion-safe:animate-float-up">Esprimi la tua passione.</span>{" "}
          <span className="inline-block motion-safe:animate-float-up">Vivi la danza.</span>
        </h1>
        <p className="mb-10 max-w-none text-lg leading-relaxed font-light text-pretty text-[#B8B8B8] sm:text-xl lg:max-w-xl lg:text-2xl motion-safe:animate-float-up">
          All&apos;Imperial Ballet accompagniamo bambini, ragazzi e adulti in un percorso di crescita artistica e personale attraverso la Danza Classica, Moderna, Contemporanea, Pas de Deux e Pilates.
        </p>
        <p className="mb-10 max-w-none text-lg leading-relaxed font-light text-pretty text-[#B8B8B8] sm:text-xl lg:max-w-xl lg:text-2xl motion-safe:animate-float-up">
          Diretta da Melania e Rossella Mellino, la nostra scuola offre un ambiente professionale, accogliente e stimolante dove ogni allievo puÃ² sviluppare tecnica, disciplina, sicurezza e amore per la danza.
        </p>
        <div className="flex flex-col justify-start gap-4 sm:flex-row motion-safe:animate-float-up">
          <a href="#corsi" className="inline-flex items-center justify-center gap-2 rounded-full border border-[#F5F5F5]/60 bg-transparent px-8 py-4 text-lg font-semibold text-[#F5F5F5] shadow-sm transition-colors hover:bg-[#FFFFFF]/10">
            PRENOTA UNA LEZIONE DI PROVA <ChevronRight size={20} />
          </a>
          <a href={brand.whatsappHref} target="_blank" rel="noopener noreferrer" className="rounded-full border border-[#F5F5F5]/60 bg-card/70 px-8 py-4 text-lg font-semibold text-[#F5F5F5] shadow-sm transition-colors hover:bg-[#FFFFFF]/10">
            <span className="inline-flex items-center justify-center gap-2"><MessageCircle size={20} /> RICHIEDI INFORMAZIONI</span>
          </a>
        </div>
        <p className="mt-6 max-w-none text-base leading-relaxed font-light text-pretty text-[#D7D7D7] sm:text-lg lg:max-w-xl motion-safe:animate-float-up">
          Corsi per bambini, ragazzi e adulti  Insegnanti qualificati  Percorsi per ogni livello
        </p>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-foreground/50 pt-2">
          <div className="h-2 w-1 rounded-full bg-foreground/70" />
        </div>
      </div>
    </section>
  )
}
