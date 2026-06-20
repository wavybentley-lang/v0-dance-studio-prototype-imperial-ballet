"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

type AboutSectionProps = {
  isVisible: boolean
  setSectionRef: (id: string, element: HTMLElement | null) => void
  bioOpen: boolean
  setBioOpen: (open: boolean) => void
}

export function AboutSection({ isVisible, setSectionRef }: AboutSectionProps) {
  const imageRef = useRef<HTMLDivElement>(null)
  const [imageScale, setImageScale] = useState(false)

  useEffect(() => {
    if (!imageRef.current) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setImageScale(true); observer.disconnect() } },
      { threshold: 0.3 },
    )
    observer.observe(imageRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="chi-siamo"
      ref={(element) => setSectionRef("chi-siamo", element)}
      style={{ background: "radial-gradient(ellipse at 20% 60%, #161616 0%, #111111 60%, #0A0A0A 100%)" }}
      className={`bg-card py-20 transition-all duration-700 sm:py-28 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div
            ref={imageRef}
            className={`transition-transform duration-1000 ${imageScale ? "scale-105" : "scale-100"}`}
            style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
          >
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[34rem] overflow-hidden rounded-sm border border-border bg-secondary">
              <Image src="/imperial ballet/chisiamo.jpg" alt="Imperial Ballet chi siamo" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </div>
          </div>
          <div className="mx-auto flex max-w-xl flex-col justify-center self-center lg:mx-0 lg:py-6">
            <p className="mb-3 text-xs font-semibold tracking-[0.28em] text-primary uppercase">CHI SIAMO</p>
            <h2 className="mb-5 font-serif text-4xl font-bold text-foreground sm:text-5xl">Formiamo danzatori, ispiriamo persone.</h2>
            <div className="space-y-4 text-lg leading-relaxed text-pretty text-foreground">
              <p>All&apos;Imperial Ballet crediamo che la danza sia molto pi&ugrave; di una disciplina artistica: &egrave; un percorso di crescita che sviluppa talento, carattere e fiducia in s&eacute; stessi.</p>
              <p>Diretta da Melania e Rossella Mellino, la nostra scuola accoglie bambini, ragazzi e adulti in un ambiente professionale e stimolante, dove ogni allievo viene seguito con attenzione nel proprio percorso formativo.</p>
              <p>Attraverso lo studio della Danza Classica, Moderna, Contemporanea, del Pas de Deux e del Pilates, aiutiamo i nostri studenti a sviluppare tecnica, espressivit&agrave;, disciplina e consapevolezza del movimento.</p>
              <p>Che si tratti di muovere i primi passi nel mondo della danza o di perfezionare le proprie competenze, il nostro obiettivo &egrave; offrire un&apos;esperienza formativa completa, capace di valorizzare il potenziale di ogni allievo e trasformare la passione in crescita personale.</p>
              <p>Perch&eacute; ogni grande danzatore nasce prima di tutto da una persona che ha imparato a credere in s&eacute; stessa.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
