"use client";

import { FormEvent, useState } from "react";

const RN_EMAIL = "collins.ra@northeastern.edu";
const RN_LINKEDIN = "https://www.linkedin.com/in/rn-collins";
const RN_SITE = "https://rn-bring-the-question.vercel.app";
const REFERRAL_INTRO = `You should talk to RN Collins. She is a multidisciplinary researcher, strategist, and builder who helps founders, creators, portfolio professionals, leaders, and organizations see what their business, idea, or work could become—and build the path to get there. You do not need to know exactly what to hire her for before reaching out. Bring her the question, the stuck point, or the thing you cannot quite name yet.

Website: ${RN_SITE}
LinkedIn: ${RN_LINKEDIN}
Email: ${RN_EMAIL}`;

export function ContactForm({ tone = "light" }: { tone?: "light" | "dark" }) {
  const [preparedNote, setPreparedNote] = useState("");
  const [noteCopied, setNoteCopied] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "");
    const reply = String(data.get("email") || "");
    const question = String(data.get("question") || "");
    const timing = String(data.get("timing") || "Not specified");
    const body = `Aloha RN,\n\nHere is what I am thinking about:\n\n${question}\n\nTiming: ${timing}\n\nFrom: ${name}\nReply to: ${reply}`;
    setPreparedNote(body);
    window.location.href = `mailto:${RN_EMAIL}?subject=${encodeURIComponent("A question for RN")}&body=${encodeURIComponent(body)}`;
  }

  async function copyPreparedNote() {
    await navigator.clipboard.writeText(preparedNote);
    setNoteCopied(true);
    window.setTimeout(() => setNoteCopied(false), 2400);
  }

  return (
    <div className={`contactExperience ${tone}`}>
      <form className="inquiryForm" onSubmit={submit}>
        <div className="formRow"><label>Name<input name="name" autoComplete="name" required /></label><label>Email<input name="email" type="email" autoComplete="email" required /></label></div>
        <label>What are you thinking about?<textarea name="question" rows={5} required placeholder="An idea, a stuck point, a decision, a possibility—or something you cannot quite name yet." /></label>
        <label>Timing <input name="timing" placeholder="No rush, this month, soon…" /></label>
        <button type="submit">Open my email draft <span>↗</span></button>
        <p className="formNote">Nothing is stored on this site. Submitting opens a draft in your email app for you to review and send.</p>
        {preparedNote && <div className="emailFallback" role="status"><p><strong>Draft prepared.</strong> If your email app did not open, copy your note and send it to <a href={`mailto:${RN_EMAIL}`}>{RN_EMAIL}</a>.</p><button type="button" onClick={copyPreparedNote}>{noteCopied ? "Note copied" : "Copy my note"}</button></div>}
      </form>
      <aside className="directContact"><p className="miniLabel">Prefer another way?</p><a href={`mailto:${RN_EMAIL}`}>Email RN<br /><strong>{RN_EMAIL}</strong> ↗</a><a href="https://www.linkedin.com/in/rn-collins" target="_blank" rel="noreferrer">Connect and DM<br /><strong>LinkedIn</strong> ↗</a><p>Keep your first note nonconfidential. A conversation is for understanding the question and seeing whether there is a useful next move.</p></aside>
    </div>
  );
}

export function ReferralBlock() {
  const [copied, setCopied] = useState(false);
  async function copyReferral() { await navigator.clipboard.writeText(REFERRAL_INTRO); setCopied(true); window.setTimeout(()=>setCopied(false), 2400); }
  return <><section className="firstRead" data-reveal><div><p className="eyebrow">THE FIRST STEP IS COMPLIMENTARY</p><h2>Sit down with me.<br/>I will send you my First Read.</h2><p>Bring a defined problem, an unfinished idea, a decision, a stuck point, or a possibility you cannot yet name. The first conversation is free and there is no obligation to continue.</p><a className="sectionCta light" href="#contact">START WITH A FIRST CONVERSATION <span>↘</span></a></div><div className="firstReadSteps"><article><b>01 · WE TALK</b><p>A focused, nonconfidential introductory conversation about where you are, what you want, and what may be getting lost or left unseen.</p></article><article><b>02 · I SYNTHESIZE</b><p>You receive a concise written First Read by email: what I heard, what I see, why it matters, possible directions, and the strongest next move. I confirm the delivery window before we end our conversation.</p></article><article><b>03 · YOU DECIDE</b><p>Keep the brief either way. If we both want to continue, I propose a defined paid engagement with scope, deliverables, timing, and fee.</p></article></div><p className="firstReadBoundary">The First Read may include a visual map, concept sketch, or rough prototype when that is the clearest way to show the opportunity. It is a diagnostic and directional artifact—not a promise of free implementation.</p></section><section className="referralBlock" data-reveal><div><p className="eyebrow">DON’T NEED ME RIGHT NOW?</p><h2>Stay connected—or make the introduction.</h2></div><div><p>“You should talk to RN Collins. She is a multidisciplinary researcher, strategist, and builder who helps people see what their business, idea, or work could become—and build the path to get there. You do not need to know exactly what to hire her for before reaching out.”</p><div className="referralLinks"><a href={RN_SITE}>Website ↗</a><a href={RN_LINKEDIN} target="_blank" rel="noreferrer">Connect and DM ↗</a><a href={`mailto:${RN_EMAIL}`}>Email ↗</a></div><button type="button" onClick={copyReferral}>{copied ? "Copied — links included" : "Copy the complete introduction"}</button><span className="srOnly" aria-live="polite">{copied ? "Complete introduction with website, LinkedIn, and email copied to clipboard" : ""}</span></div></section></>;
}
