"use client";

import { useEffect } from "react";

export function Experience() {
  useEffect(() => {
    document.documentElement.dataset.motion = "ready";
    const reveals = [...document.querySelectorAll<HTMLElement>("[data-reveal]")];
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { (entry.target as HTMLElement).dataset.visible = "true"; observer.unobserve(entry.target); }
    }), { rootMargin: "0px 0px -12%", threshold: .08 });
    reveals.forEach(item => observer.observe(item));

    const onScroll = () => {
      const max = document.documentElement.scrollHeight - innerHeight;
      document.documentElement.style.setProperty("--progress", `${max > 0 ? scrollY / max : 0}`);
    };
    addEventListener("scroll", onScroll, { passive: true }); onScroll();

    const transformer = document.querySelector<HTMLElement>("[data-transformer]");
    const buttons = transformer ? [...transformer.querySelectorAll<HTMLButtonElement>("button")] : [];
    const choose = (state: string) => {
      buttons.forEach(button => button.setAttribute("aria-selected", String(button.dataset.state === state)));
      transformer?.querySelector<HTMLElement>("[data-arrive]")?.toggleAttribute("hidden", state !== "arrive");
      transformer?.querySelector<HTMLElement>("[data-leave]")?.toggleAttribute("hidden", state !== "leave");
      transformer?.setAttribute("data-active", state);
    };
    const handlers = buttons.map(button => { const fn = () => choose(button.dataset.state || "arrive"); button.addEventListener("click", fn); return [button, fn] as const; });
    return () => { observer.disconnect(); removeEventListener("scroll", onScroll); handlers.forEach(([button, fn]) => button.removeEventListener("click", fn)); delete document.documentElement.dataset.motion; };
  }, []);
  return <div className="scrollProgress" aria-hidden="true"><span /></div>;
}
