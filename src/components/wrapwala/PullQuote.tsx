export default function PullQuote() {
  return (
    <section className="bg-rust py-16 px-4">
      <div className="max-w-4xl mx-auto text-center relative">
        <span className="absolute -top-8 left-0 text-8xl text-primary-foreground/20 font-display">"</span>
        <blockquote className="font-display italic text-2xl md:text-3xl text-primary-foreground leading-relaxed">
          We don't just wrap food — we wrap memories, flavours, and a whole lot of love into every single bite.
        </blockquote>
        <span className="absolute -bottom-12 right-0 text-8xl text-primary-foreground/20 font-display">"</span>
        <p className="mt-6 text-primary-foreground/70 font-body text-sm">— The WrapWala Promise</p>
      </div>
    </section>
  );
}
