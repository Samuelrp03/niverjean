"use client";

import { useEffect, useState } from "react";

const highlights = [
  {
    title: "25 voltas ao sol",
    description:
      "Um quarto de século colecionando histórias, risadas e muito alcool no sangue",
    icon: "🌞",
  },
  {
    title: "Humor contagiante",
    description:
      "Os dias ficam mais engraçados quando o Jean abre a boca",
    icon: "🙂",
  },
  {
    title: "Pulmão de Ferro",
    description:
      "Foi muito cigarro fumado, muita fumaça assoprada, e muito pulmão usado",
    icon: "🚬",
  },
];

const memories = [
  "As piadas contadas que alegram toda a sala",
  "Os jogos que nos fazem esquecer do trabalho",
  "As raivas que fizeram ele querer matar alguém",
];

const wishes = [
  "Que voçê sempre possa continuar contando piadas e fazendo todo mundo rir.",
  "Que nunca faltem saúde, paz e cigarro na cartela.",
  "Que as suas piadas te alegrem tanto quanto nos alegra.",
];

const surpriseNotes = [
  {
    text: "Sempre que o Jean fala um DAMMM uma fada nasce",
    author: "Samuel",
  },
  {
    text: "Obrigada por me tirar sorrisos mesmo quando o dia tá uma correria sem fim!",
    author: "Sunshine",
  },
  {
    text: "Onde chega, o carisma transborda e a diversão liga o play! Um mestre em tornar qualquer papo em boa risada",
    author: "Luana",
  },
];

const confettiPieces = Array.from({ length: 30 }, (_, index) => index);
const confettiColors = ["#f9a8d4", "#c084fc", "#a5b4fc", "#fcd34d", "#f472b6"];
const fireworkPositions = [
  { top: "20%", left: "25%" },
  { top: "30%", left: "70%" },
  { top: "60%", left: "20%" },
  { top: "65%", left: "80%" },
  { top: "40%", left: "45%" },
  { top: "15%", left: "50%" },
];
const fireworkColors = ["#fde047", "#f472b6", "#c084fc", "#facc15", "#fda4af", "#c4b5fd"];
const celebrationWords = ["DAMM", "Thats Crazy", "WOW", "Of Course"];

export default function Home() {
  const [confettiBurst, setConfettiBurst] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);
  const [fireworkBurst, setFireworkBurst] = useState(0);
  const [celebrationWord, setCelebrationWord] = useState<string | null>(null);

  useEffect(() => {
    if (!confettiBurst) return undefined;

    const timeout = setTimeout(() => setConfettiBurst(0), 4200);
    return () => clearTimeout(timeout);
  }, [confettiBurst]);

  useEffect(() => {
    if (!fireworkBurst) return undefined;

    const timeout = setTimeout(() => {
      setFireworkBurst(0);
      setCelebrationWord(null);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [fireworkBurst]);

  const triggerCelebration = () => {
    setConfettiBurst((previous) => previous + 1);
    setFireworkBurst((previous) => previous + 1);
    const randomWord =
      celebrationWords[Math.floor(Math.random() * celebrationWords.length)];
    setCelebrationWord(randomWord);
  };

  const cycleMessage = () => {
    setMessageIndex((previous) => (previous + 1) % surpriseNotes.length);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-rose-900 px-4 py-12 text-zinc-50">
      {confettiBurst > 0 && (
        <div
          key={confettiBurst}
          className="pointer-events-none fixed inset-0 z-40 overflow-hidden"
        >
          {confettiPieces.map((piece) => (
            <span
              key={`${confettiBurst}-${piece}`}
              className="confetti-piece"
              style={{
                left: `${(piece / confettiPieces.length) * 100}%`,
                animationDelay: `${(piece % 10) * 0.09}s`,
                backgroundColor: confettiColors[piece % confettiColors.length],
              }}
            />
          ))}
        </div>
      )}

      {fireworkBurst > 0 && (
        <div
          key={`firework-${fireworkBurst}`}
          className="pointer-events-none fixed inset-0 z-50"
        >
          {fireworkPositions.map((position, index) => (
            <span
              key={`firework-piece-${fireworkBurst}-${index}`}
              className="firework-burst"
              style={{
                top: position.top,
                left: position.left,
                backgroundColor: fireworkColors[index % fireworkColors.length],
                animationDelay: `${index * 0.05}s`,
              }}
            />
          ))}
          {celebrationWord && (
            <div className="absolute inset-0 flex items-center justify-center text-center">
              <p
                key={`${celebrationWord}-${fireworkBurst}`}
                className="celebration-word text-6xl font-extrabold uppercase tracking-[0.4em] text-white drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)] sm:text-7xl"
              >
                {celebrationWord}
              </p>
            </div>
          )}
        </div>
      )}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-12 top-12 h-48 w-48 rounded-full bg-indigo-400/20 blur-3xl animate-aurora" />
        <div className="absolute bottom-24 right-0 h-64 w-64 rounded-full bg-rose-400/10 blur-3xl animate-aurora" />
        <div className="absolute left-1/2 top-0 h-24 w-24 -translate-x-1/2 animate-pulse rounded-full border border-white/30" />
      </div>

      <main className="relative mx-auto flex w-full max-w-5xl flex-col gap-12 rounded-[32px] bg-white/5 px-6 py-10 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:px-12 sm:py-14">
        <section className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-indigo-200">
            11 de março · 25 anos
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Feliz aniversário, Jean!
          </h1>
          <p className="mt-4 text-lg text-zinc-100 sm:text-xl">
            Hoje é dia de celebrar o cara que transforma o dia em piada,
            que está sempre por perto com uma piada na ponta da língua.
            Este espaço é todo seu — para lembrar o que já foi construído e
            abrir as portas do que vem pela frente.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              type="button"
              onClick={triggerCelebration}
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-white/30 bg-white/15 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:border-white hover:bg-white/25"
            >
              <span className="text-2xl animate-float">🎂</span>
              <span className="pr-2">
                Disparar celebração
                <span className="ml-2 inline-block h-2 w-2 rounded-full bg-rose-200" />
              </span>
              <span className="absolute inset-0 opacity-60">
                <span className="animate-shine absolute inset-0" />
              </span>
            </button>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          {highlights.map((highlight, index) => (
            <article
              key={highlight.title}
              className="rounded-3xl border border-white/20 bg-white/5 p-6 text-left shadow-lg shadow-black/20 transition-transform duration-300 hover:-translate-y-2 hover:border-white/40"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <p className="text-3xl animate-float">{highlight.icon}</p>
              <h2 className="mt-4 text-xl font-semibold text-white">
                {highlight.title}
              </h2>
              <p className="mt-2 text-base text-zinc-200">
                {highlight.description}
              </p>
            </article>
          ))}
        </section>

        <section className="rounded-[28px] border border-white/15 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8 shadow-lg shadow-black/30">
          <h2 className="text-2xl font-semibold text-white">Memórias queridas</h2>
          <p className="mt-3 text-zinc-200">
            Cada capítulo vivido até aqui fez do Jean um homem ímpar. Aqui vão
            algumas lembranças que merecem ser revisitadas hoje:
          </p>
          <ul className="mt-6 space-y-4">
            {memories.map((memory) => (
              <li
                key={memory}
                className="flex items-start gap-3 text-base transition hover:translate-x-1"
              >
                <span className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-white/20 text-sm">
                  ✦
                </span>
                <p className="text-zinc-100">{memory}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/15 bg-black/20 p-7 shadow-inner shadow-black/40">
            <h2 className="text-2xl font-semibold text-white">Desejos</h2>
            <div className="mt-5 space-y-4 text-zinc-100">
              {wishes.map((wish) => (
                <p
                  key={wish}
                  className="rounded-2xl bg-white/5 p-4 transition hover:bg-white/10"
                >
                  {wish}
                </p>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-between rounded-3xl border border-white/15 bg-white/10 p-7 shadow-inner shadow-black/30">
            <div>
              <h2 className="text-2xl font-semibold text-white">
                Manifesto para os próximos 25
              </h2>
              <p className="mt-3 text-zinc-100">
                Que você continue acreditando nas próprias ideias e abrindo
                caminhos para todo mundo que caminha ao seu lado. O mundo fica
                melhor quando você está no volante.
              </p>
            </div>
            <div className="mt-6 rounded-2xl border border-white/20 bg-black/30 p-5 text-sm text-zinc-200">
              <p>🎁 Mensagem especial</p>
              <p className="mt-2 text-base text-white">
                &ldquo;Jean, que sua energia siga contagiante e que cada sonho
                que você ousar escrever vire história para contar&rdquo;
              </p>
              <p className="mt-4 text-right font-semibold text-indigo-100">
                Com carinho, Fiufass
              </p>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden rounded-[28px] border border-white/15 bg-black/30 p-8 text-center shadow-xl shadow-black/30">
          <div className="absolute inset-y-0 left-0 w-1/2 -translate-x-1/2 rounded-full bg-rose-500/10 blur-3xl animate-aurora" />
          <div className="note-book relative">
            <p className="text-xs uppercase tracking-[0.4em] text-indigo-100">
              Notas espontâneas
            </p>
            <div
              key={messageIndex}
              className="note-page mt-4 flex flex-col items-center gap-3 text-white"
              aria-live="polite"
            >
              <p className="text-2xl text-white">
                {surpriseNotes[messageIndex].text}
              </p>
              <p className="text-sm uppercase tracking-[0.3em] text-indigo-100">
                — {surpriseNotes[messageIndex].author}
              </p>
            </div>
            <div className="mt-6 flex items-center justify-center gap-2">
              {surpriseNotes.map((_, index) => (
                <span
                  key={`indicator-${index}`}
                  className={`h-2 w-2 rounded-full transition ${
                    messageIndex === index ? "bg-white" : "bg-white/30"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={cycleMessage}
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:border-white hover:bg-white/20"
            >
              Outra mensagem
              <span className="text-lg">⟲</span>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
