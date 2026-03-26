import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Battery,
  Bell,
  Car,
  ChevronDown,
  Cpu,
  Eye,
  Glasses,
  GraduationCap,
  Menu,
  Plane,
  Shield,
  Star,
  Stethoscope,
  X,
} from "lucide-react";
import { AnimatePresence, motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
];

const FEATURES = [
  {
    icon: Eye,
    title: "Real-time Drowsiness Detection",
    description:
      "Advanced AI monitors your blink rate and eye closure duration 120 times per second, catching microsleeps before they become dangerous.",
  },
  {
    icon: Bell,
    title: "Instant Vibration & Audio Alert",
    description:
      "Dual-mode alerts — a precise temple vibration plus a discreet audio tone — snap you back to full awareness in milliseconds.",
  },
  {
    icon: Battery,
    title: "All-Day Battery Life",
    description:
      "A high-density micro-cell delivers 12+ hours of continuous monitoring on a single 40-minute charge. No compromise.",
  },
  {
    icon: Glasses,
    title: "Lightweight & Stylish",
    description:
      "At just 28g, AwakeGuard fits any face shape and looks like premium designer eyewear — no one needs to know it's saving your life.",
  },
];

const STEPS = [
  {
    number: "01",
    title: "Wear the Glasses",
    description:
      "Slip on AwakeGuard like any pair of glasses. Pair once via Bluetooth to the companion app. Setup takes under 2 minutes.",
  },
  {
    number: "02",
    title: "AI Monitors Your Eyes",
    description:
      "Embedded infrared sensors and our proprietary NeuroVision™ algorithm track 14 drowsiness indicators in real time, continuously.",
  },
  {
    number: "03",
    title: "Alerts Trigger Instantly",
    description:
      "The moment drowsiness is detected, dual alerts fire within 0.3 seconds — before your brain fully enters sleep state.",
  },
];

const USE_CASES = [
  {
    icon: Car,
    label: "Long-haul Drivers",
    description: "Stay sharp on overnight routes",
  },
  {
    icon: Stethoscope,
    label: "Shift Workers",
    description: "Power through demanding schedules",
  },
  {
    icon: GraduationCap,
    label: "Students",
    description: "Ace those late-night study sessions",
  },
  {
    icon: Plane,
    label: "Pilots",
    description: "Maintain peak alertness at altitude",
  },
];

const TESTIMONIALS = [
  {
    name: "Marcus T.",
    role: "Long-Haul Truck Driver",
    avatar: "MT",
    rating: 5,
    text: "I've been driving routes from Houston to Chicago for 11 years. AwakeGuard alerted me twice on my last trip — both times I didn't even feel tired. This product is not a gimmick. It's saved my life.",
  },
  {
    name: "Sarah K.",
    role: "ICU Nurse, Night Shift",
    avatar: "SK",
    rating: 5,
    text: "After a 14-hour shift, I still have a 45-minute commute home. AwakeGuard catches me every single time I start to drift. My family insisted I get it and I'm so glad they did.",
  },
  {
    name: "Daniel R.",
    role: "Pre-Med Student",
    avatar: "DR",
    rating: 5,
    text: "Finals week I'm studying past 3am. It's not just for driving — the alerts help me stay focused during late study sessions too. Best ₹2499 I've ever spent.",
  },
];

const STAR_INDICES = [1, 2, 3, 4, 5];

const COMPANY_LINKS = [
  { label: "About Us", href: "#about" },
  { label: "Press", href: "#press" },
  { label: "Careers", href: "#careers" },
  { label: "Contact", href: "#contact" },
];

const FAQS = [
  {
    question: "How long does the battery last?",
    answer:
      "AwakeGuard delivers 12+ hours of continuous active monitoring on a single charge. The magnetic charging case fully recharges the glasses in under 40 minutes. A low-battery alert vibrates 60 minutes before shutdown.",
  },
  {
    question: "Does it work with prescription lenses?",
    answer:
      "Yes. AwakeGuard features a universal clip-on adapter compatible with any standard prescription frames, or you can have prescription lenses fitted directly into our frame at most optical centers.",
  },
  {
    question: "Is it comfortable to wear for long periods?",
    answer:
      "At just 28 grams — lighter than most standard eyeglasses — AwakeGuard is engineered for extended wear. The hypoallergenic titanium frame and soft silicone nose pads mean most users forget they're wearing them.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We offer a 30-day no-questions-asked return policy. If AwakeGuard doesn't work for you for any reason, return it for a full refund. We also provide a 1-year manufacturer's warranty against defects.",
  },
  {
    question: "Does it work in all lighting conditions?",
    answer:
      "Absolutely. Our infrared eye-tracking sensors operate independently of ambient light — they work equally well in bright daylight, at night, and in complete darkness. Weather and glare have zero effect.",
  },
];

function useScrolled() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return scrolled;
}

function FadeInSection({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const scrolled = useScrolled();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/90 backdrop-blur-xl border-b border-border shadow-glow-sm"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/40 flex items-center justify-center glow-border transition-all group-hover:bg-primary/30">
              <Glasses className="w-4 h-4 text-primary" />
            </div>
            <span className="font-display font-700 text-lg tracking-tight text-foreground">
              Awake<span className="text-primary">Guard</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-ocid="nav.link"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <Button
              data-ocid="nav.primary_button"
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow-sm font-semibold px-5"
              asChild
            >
              <a href="#cta">Buy Now</a>
            </Button>
          </div>

          <button
            type="button"
            className="md:hidden text-foreground"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden bg-card/95 backdrop-blur-xl border-b border-border"
            >
              <div className="px-6 py-4 flex flex-col gap-4">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    data-ocid="nav.link"
                    className="text-muted-foreground hover:text-foreground transition-colors py-1"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <Button
                  data-ocid="nav.primary_button"
                  className="bg-primary text-primary-foreground mt-2 w-full"
                  asChild
                >
                  <a href="#cta">Buy Now</a>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        {/* Hero */}
        <section
          id="hero"
          className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 grid-bg noise-overlay"
        >
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 py-24 flex flex-col lg:flex-row items-center gap-16 relative z-10">
            <div className="flex-1 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-6 px-3 py-1 rounded-full border border-primary/30 bg-primary/10">
                  AI-Powered Eye Monitoring
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="font-display text-5xl sm:text-6xl lg:text-7xl font-800 leading-[1.05] tracking-tight mb-6"
              >
                Stay Alert.
                <br />
                <span className="text-primary glow-blue-text">Stay Alive.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35 }}
                className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
              >
                AwakeGuard smart glasses detect drowsiness before it becomes
                dangerous — alerting you in real time, every time, so you never
                drift off when it matters most.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Button
                  data-ocid="hero.primary_button"
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow-md font-semibold text-base px-8 py-6 rounded-xl"
                  asChild
                >
                  <a href="#cta">
                    Order Now <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
                <Button
                  data-ocid="hero.secondary_button"
                  size="lg"
                  variant="outline"
                  className="border-border hover:border-primary/50 text-foreground hover:bg-primary/10 font-semibold text-base px-8 py-6 rounded-xl transition-all"
                  asChild
                >
                  <a href="#features">
                    Learn More <ChevronDown className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex flex-wrap gap-6 mt-10 justify-center lg:justify-start"
              >
                {["FDA Registered", "30-Day Returns", "Free Shipping"].map(
                  (b) => (
                    <div
                      key={b}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <Shield className="w-4 h-4 text-primary" />
                      <span>{b}</span>
                    </div>
                  ),
                )}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 40 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex-1 relative flex justify-center"
            >
              <div className="relative w-full max-w-xl">
                <div className="absolute inset-0 rounded-3xl bg-primary/10 blur-3xl" />
                <motion.img
                  src="/assets/generated/smart-glass-hero.dim_1200x700.jpg"
                  alt="AwakeGuard smart glasses"
                  className="relative rounded-3xl w-full object-cover shadow-glow-lg border border-primary/20"
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                  className="absolute -bottom-4 -left-4 bg-card/90 backdrop-blur border border-primary/30 rounded-2xl px-4 py-3 shadow-glow-sm"
                >
                  <div className="text-2xl font-display font-800 text-primary">
                    0.3s
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Alert response time
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.1, duration: 0.5 }}
                  className="absolute -top-4 -right-4 bg-card/90 backdrop-blur border border-primary/30 rounded-2xl px-4 py-3 shadow-glow-sm"
                >
                  <div className="text-2xl font-display font-800 text-primary">
                    99.7%
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Detection accuracy
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="text-xs text-muted-foreground tracking-widest uppercase">
              Scroll
            </span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            >
              <ChevronDown className="w-5 h-5 text-muted-foreground" />
            </motion.div>
          </motion.div>
        </section>

        {/* Features */}
        <section
          id="features"
          data-ocid="features.section"
          className="py-32 relative"
        >
          <div className="absolute inset-0 grid-bg opacity-50" />
          <div className="max-w-7xl mx-auto px-6 relative">
            <FadeInSection className="text-center mb-20">
              <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-4 inline-block">
                Why AwakeGuard
              </span>
              <h2 className="font-display text-4xl sm:text-5xl font-800 tracking-tight mb-4">
                Engineered to the Last Detail
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                Every component exists for one purpose — to keep you awake and
                aware.
              </p>
            </FadeInSection>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {FEATURES.map((feat, i) => (
                <FadeInSection key={feat.title} delay={i * 0.1}>
                  <div className="group h-full bg-card border border-border rounded-2xl p-6 flex flex-col gap-4 hover:border-primary/40 hover:shadow-glow-sm transition-all duration-300 cursor-default">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <feat.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-display font-700 text-lg tracking-tight">
                      {feat.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section
          id="how-it-works"
          data-ocid="howitworks.section"
          className="py-32 bg-card/30"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <FadeInSection className="flex-1">
                <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-4 inline-block">
                  Simple Process
                </span>
                <h2 className="font-display text-4xl sm:text-5xl font-800 tracking-tight mb-12">
                  Up and Running in Under 2 Minutes
                </h2>
                <div className="flex flex-col gap-8">
                  {STEPS.map((step, i) => (
                    <FadeInSection key={step.number} delay={i * 0.15}>
                      <div className="flex gap-5 group">
                        <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center font-display font-800 text-primary text-xl group-hover:bg-primary/20 transition-colors">
                          {step.number}
                        </div>
                        <div className="pt-1">
                          <h3 className="font-display font-700 text-lg mb-1">
                            {step.title}
                          </h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </FadeInSection>
                  ))}
                </div>
              </FadeInSection>

              <FadeInSection className="flex-1 flex justify-center" delay={0.3}>
                <div className="relative w-full max-w-md">
                  <div className="absolute inset-0 rounded-3xl bg-primary/10 blur-3xl" />
                  <img
                    src="/assets/generated/smart-glass-detail.dim_600x600.jpg"
                    alt="AwakeGuard technology detail"
                    className="relative rounded-3xl w-full object-cover shadow-glow-md border border-primary/20"
                  />
                  <div className="absolute bottom-4 right-4 bg-card/90 backdrop-blur border border-primary/30 rounded-xl px-3 py-2">
                    <div className="flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-primary" />
                      <span className="text-xs font-semibold">
                        NeuroVision™ AI
                      </span>
                    </div>
                  </div>
                </div>
              </FadeInSection>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section
          id="usecases"
          data-ocid="usecases.section"
          className="py-32 relative overflow-hidden"
        >
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="max-w-7xl mx-auto px-6 relative">
            <FadeInSection className="text-center mb-16">
              <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-4 inline-block">
                Who It&apos;s For
              </span>
              <h2 className="font-display text-4xl sm:text-5xl font-800 tracking-tight mb-4">
                Built for Every Situation
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                Wherever fatigue is a threat, AwakeGuard is your defense.
              </p>
            </FadeInSection>

            <div className="flex flex-col lg:flex-row items-center gap-12">
              <FadeInSection className="flex-1" delay={0.1}>
                <div className="relative rounded-3xl overflow-hidden">
                  <img
                    src="/assets/generated/smart-glass-usecase.dim_800x500.jpg"
                    alt="AwakeGuard use cases"
                    className="w-full object-cover rounded-3xl border border-primary/20 shadow-glow-md"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent rounded-3xl" />
                </div>
              </FadeInSection>

              <FadeInSection
                className="flex-1 grid grid-cols-2 gap-4"
                delay={0.2}
              >
                {USE_CASES.map((uc, i) => (
                  <FadeInSection key={uc.label} delay={i * 0.1}>
                    <div className="group bg-card border border-border rounded-2xl p-5 hover:border-primary/40 hover:shadow-glow-sm transition-all duration-300 cursor-default">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                        <uc.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-display font-700 text-sm mb-1">
                        {uc.label}
                      </h3>
                      <p className="text-muted-foreground text-xs">
                        {uc.description}
                      </p>
                    </div>
                  </FadeInSection>
                ))}
              </FadeInSection>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="reviews" className="py-32 bg-card/30">
          <div className="max-w-7xl mx-auto px-6">
            <FadeInSection className="text-center mb-16">
              <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-4 inline-block">
                Testimonials
              </span>
              <h2 className="font-display text-4xl sm:text-5xl font-800 tracking-tight mb-4">
                Real People. Real Stories.
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                Thousands of customers trust AwakeGuard every day. Here are a
                few of their stories.
              </p>
            </FadeInSection>

            <div className="grid md:grid-cols-3 gap-6">
              {TESTIMONIALS.map((t, i) => (
                <FadeInSection key={t.name} delay={i * 0.15}>
                  <div
                    data-ocid={`testimonials.item.${i + 1}`}
                    className="bg-card border border-border rounded-2xl p-6 flex flex-col gap-4 hover:border-primary/30 hover:shadow-glow-sm transition-all duration-300 h-full"
                  >
                    <div className="flex gap-1">
                      {STAR_INDICES.slice(0, t.rating).map((n) => (
                        <Star
                          key={n}
                          className="w-4 h-4 fill-primary text-primary"
                        />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                      &ldquo;{t.text}&rdquo;
                    </p>
                    <div className="flex items-center gap-3 pt-2 border-t border-border">
                      <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-xs font-display font-700 text-primary">
                        {t.avatar}
                      </div>
                      <div>
                        <div className="font-semibold text-sm">{t.name}</div>
                        <div className="text-xs text-muted-foreground">
                          {t.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-32 relative">
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="max-w-3xl mx-auto px-6 relative">
            <FadeInSection className="text-center mb-16">
              <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-4 inline-block">
                FAQ
              </span>
              <h2 className="font-display text-4xl sm:text-5xl font-800 tracking-tight mb-4">
                Questions Answered
              </h2>
            </FadeInSection>

            <FadeInSection delay={0.1}>
              <Accordion
                type="single"
                collapsible
                className="flex flex-col gap-3"
              >
                {FAQS.map((faq, i) => (
                  <AccordionItem
                    key={faq.question}
                    value={`faq-${i}`}
                    data-ocid="faq.panel"
                    className="bg-card border border-border rounded-2xl px-6 overflow-hidden hover:border-primary/30 transition-colors"
                  >
                    <AccordionTrigger className="font-display font-600 text-left py-5 hover:no-underline text-foreground">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </FadeInSection>
          </div>
        </section>

        {/* CTA */}
        <section id="cta" className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/5" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <FadeInSection>
              <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-6 inline-block">
                Limited Time Offer
              </span>
              <h2 className="font-display text-4xl sm:text-6xl font-800 tracking-tight mb-6 leading-tight">
                Ready to Never Doze Off Again?
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
                Join 12,000+ drivers, nurses, pilots, and students who trust
                AwakeGuard to keep them sharp. Starting at just ₹2499.
              </p>
              <Button
                data-ocid="cta.primary_button"
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow-lg font-semibold text-lg px-12 py-7 rounded-2xl"
                asChild
              >
                <a href="mailto:orders@awakeguard.com">
                  Order Now — ₹2499 <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <p className="text-xs text-muted-foreground mt-6">
                Free shipping · 30-day returns · 1-year warranty
              </p>
            </FadeInSection>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-start justify-between gap-10 mb-12">
            <div className="max-w-xs">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/40 flex items-center justify-center">
                  <Glasses className="w-4 h-4 text-primary" />
                </div>
                <span className="font-display font-700 text-lg">
                  Awake<span className="text-primary">Guard</span>
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The world&apos;s most advanced anti-drowsiness smart glasses.
                Engineered for those who can&apos;t afford to sleep on the job.
              </p>
            </div>

            <div className="flex flex-wrap gap-x-12 gap-y-6">
              <div>
                <div className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4">
                  Product
                </div>
                <div className="flex flex-col gap-2">
                  {NAV_LINKS.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      data-ocid="footer.link"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
              <div>
                <div className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4">
                  Company
                </div>
                <div className="flex flex-col gap-2">
                  {COMPANY_LINKS.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      data-ocid="footer.link"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} AwakeGuard. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Built with ❤️ using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
                  typeof window !== "undefined" ? window.location.hostname : "",
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
