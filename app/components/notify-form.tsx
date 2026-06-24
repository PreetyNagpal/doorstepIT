"use client";

import { useState, type FormEvent } from "react";

export function NotifyForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <p
        className="w-full rounded-2xl border border-brand-teal/20 bg-brand-teal/5 px-6 py-5 text-base text-brand-navy"
        role="status"
      >
        Thanks — we&apos;ll notify you at{" "}
        <span className="font-medium">{email}</span> when we launch.
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full flex-col gap-3 sm:flex-row sm:items-stretch"
    >
      <label htmlFor="email" className="sr-only">
        Email address
      </label>
      <input
        id="email"
        type="email"
        name="email"
        required
        autoComplete="email"
        placeholder="Enter your email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        className="h-14 w-full min-w-0 flex-1 rounded-2xl border border-brand-navy/10 bg-white px-5 text-base text-brand-navy placeholder:text-brand-navy/40 outline-none transition-shadow focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20"
      />
      <button
        type="submit"
        className="h-14 w-full shrink-0 rounded-2xl bg-brand-teal px-8 text-base font-semibold text-white transition-colors hover:bg-brand-teal-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 sm:w-auto sm:min-w-[160px]"
      >
        Notify me
      </button>
    </form>
  );
}
