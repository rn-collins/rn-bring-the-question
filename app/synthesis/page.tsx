import { ContactForm, ReferralBlock } from "../contact-form";
import { Experience } from "./experience";

export const metadata = { robots: { index: false, follow: false }, alternates: { canonical: "/" } };

const outputs = ["Research and opportunity briefs", "Strategy and decision roadmaps", "Concepts, narratives, and presentations", "Systems, workflows, and operating plans", "Prototypes, tools, and digital experiences", "Hands-on implementation and iteration"];
const fields = ["qualitative research", "neuroscience", "law", "technology", "strategy", "systems", "writing", "design", "implementation"];

export default function Synthesis() {
  return <main className="site" id="top">
    <Experience />
    <nav className="nav" aria-label="Primary navigation">
      <a className="mark" href="#top" aria-label="RN Collins, home">RN/C</a>
      <p>Private practice · 21.3099° N · 157.8581° W</p>
      <div><a href="#work">Work</a><a href="#about">About</a><a className="navCta" href="#contact">Inquire</a></div>
    </nav>

    <header className="hero" aria-labelledby="hero-title">
      <div className="heroMeta"><p>NO. 01 — THE PROPOSITION</p><p>BIG QUESTIONS WELCOME</p></div>
      <h1 id="hero-title" aria-label="What if the real opportunity is bigger?">
        <span>WHAT IF</span><span>THE REAL</span><span className="accent">OPPORTUNITY</span><span>IS BIGGER?</span>
      </h1>
      <div className="heroBottom"><p>FOR PEOPLE STANDING AT THE EDGE OF WHAT IS NEXT</p><a href="#begin">BEGIN <span aria-hidden="true">↘</span></a></div>
    </header>

    <section className="promise" id="begin" data-reveal>
      <p className="eyebrow">RESEARCH · STRATEGY · BUILDING</p>
      <div><h2>I help people see what their business could become—and build the path to get there.</h2><p className="audience">FOR PEOPLE WITH SOMETHING TO BUILD · A BUSINESS OUTGROWING ITS FRAME · AN IDEA WITHOUT A NAME YET · A DECISION WITH TOO MANY DIMENSIONS</p><a className="textLink" href="#contact">START WITH A CONVERSATION <span>↘</span></a></div>
    </section>

    <section className="premise" data-reveal>
      <p>Your business. Your work. The idea that is not fully an idea yet. We will talk until the real question appears—and then decide what it wants to become.</p>
      <aside><b>YOU HAVE A BUSINESS / IDEA / HUNCH / MESS / MAYBE</b><p>You do not need to know what to hire me for before we talk.</p><a href="#contact">LET’S GO ↘</a></aside>
    </section>

    <section className="threshold" id="work" aria-labelledby="threshold-title" data-reveal>
      <div className="sectionMeta"><p>NO. 02 — THE THRESHOLD</p><p>AN INDEPENDENT PRACTICE</p></div>
      <h2 id="threshold-title">You need a better vantage point.</h2>
      <div className="thresholdGrid">
        <div className="thresholdCopy"><p>Come with the business that feels smaller than its potential. The idea you cannot articulate. The friction everyone keeps working around. The decision with too many dimensions.</p><p>I connect disciplines, evidence, people, and possibilities that usually stay separate.</p></div>
        <div className="transformer" data-transformer>
          <div className="transformTabs" role="tablist" aria-label="Possible starting point and outcome"><button type="button" role="tab" aria-selected="true" data-state="arrive">YOU MIGHT ARRIVE WITH</button><button type="button" role="tab" aria-selected="false" data-state="leave">YOU MIGHT LEAVE WITH</button></div>
          <div className="transformText"><p data-arrive>“Something is here. I just don’t know what yet.”</p><p data-leave hidden>A direction. A decision. A strategy. A system. A story. A build.</p></div>
        </div>
      </div>
      <div className="outcomeClose"><p className="outcomeLine">Sometimes the result is a new direction. Sometimes it is the exact next step. Often, it is both.</p><a className="sectionCta" href="#contact">BRING ME WHAT YOU HAVE <span>↘</span></a></div>
    </section>

    <section className="range" data-reveal>
      <div className="rangeLead"><p className="eyebrow">THE WORK BETWEEN FIELDS · A PRACTICE OF CONNECTION</p><h2>The answer may not live in the same field as the question.</h2><blockquote>The value is not one discipline. It is what becomes possible when someone can move between them.</blockquote></div>
      <div className="rangeDetail"><p>My work crosses qualitative research, neuroscience, law, technology, strategy, systems, writing, design, and implementation.</p><p>That range is not a list of services. <strong>It needs range.</strong></p><div className="fieldList" aria-label="Fields in the practice">{fields.map((field, index)=><span key={field}><i>{String(index + 1).padStart(2,"0")}</i>{field}</span>)}</div></div>
      <div className="triad"><article><b>EVIDENCE</b><h3>What is actually happening?</h3></article><article><b>IMAGINATION</b><h3>What else could be true?</h3></article><article><b>EXECUTION</b><h3>What will make it real?</h3></article></div>
    </section>

    <section className="route" aria-labelledby="route-title" data-route data-reveal>
      <div><p className="eyebrow">HOW WE MOVE</p><h2 id="route-title">I work from ambiguity to architecture—and from architecture to action.</h2><p>Strategy, evidence, human behavior, systems, technology, language, design, and implementation are all available when the question requires them.</p></div>
      <ol><li><span>01</span><b>SEE THE WHOLE</b><small>ENVISION · RESEARCH</small></li><li><span>02</span><b>FIND THE POSSIBILITY</b><small>RESEARCH · STRATEGIZE</small></li><li><span>03</span><b>MAKE THE ROUTE</b><small>STRATEGIZE · DESIGN</small></li><li><span>04</span><b>BUILD WHAT IS NEXT</b><small>BUILD · IMPLEMENT</small></li></ol>
    </section>

    <section className="outputs" data-reveal>
      <div><p className="eyebrow">POSSIBILITY · PEOPLE WITH SOMETHING TO BUILD</p><h2>I help founders, creators, portfolio professionals, and organizations discover what their work could become—and make the route visible.</h2></div>
      <div><p className="outputsIntro">The work might leave as:</p><ul>{outputs.map((output,index)=><li key={output}><span>{String(index+1).padStart(2,"0")}</span>{output}</li>)}</ul><a className="sectionCta" href="#contact">SEE WHAT YOUR QUESTION COULD BECOME <span>↘</span></a></div>
    </section>

    <section className="proof" aria-labelledby="proof-title" data-reveal>
      <div className="proofHead"><p className="eyebrow">SELECTED EVIDENCE · THE RANGE IS REAL</p><h2 id="proof-title">The questions become things people can use.</h2><p>My practice is informed by work across research, education, regulatory and program operations, evidence translation, strategy, law, and digital building.</p></div>
      <div className="proofCards">
        <article><span>01 · RESEARCH INTO DECISION</span><h3>Evidence made legible.</h3><p>Research synthesis, opportunity analysis, regulatory thinking, and decision briefs that make complexity usable.</p></article>
        <article><span>02 · INSTITUTIONS INTO MOTION</span><h3>Architecture for the next move.</h3><p>Institutional concepts, policy proposals, operating systems, and implementation routes built around the real constraint.</p></article>
        <article><span>03 · IDEAS INTO WORKING THINGS</span><h3>Strategy that leaves the page.</h3><p>Knowledge platforms, prototypes, digital experiences, strategic narratives, and tools designed and built—not merely recommended.</p></article>
      </div>
      <div className="proofSignals"><p>EXPERIENCE ACROSS</p><span>University of Pennsylvania</span><span>Yale Program for Psychedelic Science</span><span>Harvard Business School</span><span>Boston University Technology Transfer</span></div>
      <a className="sectionCta" href="https://rn-selected-work.vercel.app" target="_blank" rel="noreferrer">EXPLORE RN SELECTED WORKS <span>↗</span></a>
    </section>

    <section className="about" id="about" data-reveal>
      <img className="portrait" src="https://rn-bring-the-question.rayven-nikkita-colli.chatgpt.site/rn-collins-portrait.png" alt="Portrait of RN Collins" />
      <div className="aboutCopy"><p className="eyebrow">RN COLLINS · RESEARCHER · STRATEGIST · BUILDER</p><h2>Multidisciplinary researcher, strategist, and builder.</h2><p className="standfirst">Aloha—I’m RN. I work on questions too messy for one field.</p><p>My instinct is to look for the hidden architecture: the human behavior, evidence, incentives, language, systems, and implementation conditions shaping what can happen next. I make the real question visible, enlarge the field of possibility, and help carry the right idea into execution.</p><p>My background spans psychology, developmental science, anatomy and neurobiology, medical education, psychedelic science, technology transfer, emerging technology, and law. I hold degrees from the University of Pennsylvania, CUNY, and Boston University, and I am completing my J.D. at Northeastern University School of Law. What clients hire is not a list of credentials—it is my ability to connect them, see the whole system, and move from inquiry to execution.</p><a className="textLink" href="https://rn-selected-work.vercel.app" target="_blank" rel="noreferrer">EXPLORE RN SELECTED WORKS ↗</a></div>
    </section>

    <ReferralBlock />

    <section className="conversation" data-reveal><p className="eyebrow">CONVERSATIONS THAT BECOME THINGS</p><h2>A practice built around a good conversation.</h2><p>You do not need a polished brief. Bring the question, the friction, the unfinished thought, or the thing everyone keeps working around.</p></section>

    <section className="contact" id="contact" data-reveal><p className="eyebrow">NO. 03 — BEGIN</p><div className="contactHead"><h2>What’s on<br/>your mind?</h2><p>The first conversation is complimentary. Bring the question—even if you cannot name it yet.</p></div><ContactForm tone="dark" /></section>
    <footer><b>RN/C</b><span>© 2026 Rayven-Nikkita Collins LLC</span><a href="#top">BACK TO TOP ↑</a></footer>
  </main>;
}
