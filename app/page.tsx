import { NotifyForm } from "./components/notify-form";

export default function Home() {
  return (
    <div className="relative flex min-h-full flex-1 flex-col overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#26938614_0%,_transparent_55%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-teal/5 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-brand-navy/5 blur-3xl"
      />

      <main className="relative z-10 mx-auto flex w-full max-w-2xl flex-1 flex-col items-center justify-center px-6 py-16 text-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo.png"
          alt="Doorstep IT"
          width={710}
          height={132}
          className="h-auto w-56 sm:w-72"
        />

        <p className="mt-10 text-xs font-semibold uppercase tracking-[0.2em] text-brand-teal">
          Coming soon
        </p>

        <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-brand-navy sm:text-4xl">
          Technology solutions, delivered to your doorstep
        </h1>

        <p className="mt-4 max-w-lg text-base leading-relaxed text-brand-navy/70 sm:text-lg">
          We&apos;re building something new — expert IT support and services for
          homes and businesses across Australia. Be the first to know when we go
          live.
        </p>

        <div className="mt-10 w-full">
          <NotifyForm />
        </div>
      </main>

      <footer className="relative z-10 border-t border-brand-navy/5 px-6 py-6 text-center text-sm text-brand-navy/50">
        © {new Date().getFullYear()} Doorstep IT ·{" "}
        <a
          href="https://www.doorstepit.com.au"
          className="transition-colors hover:text-brand-teal"
        >
          doorstepit.com.au
        </a>
      </footer>
    </div>
  );
}
