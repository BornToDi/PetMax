import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Calendar,
  MapPin,
  Phone,
  Clock,
  ArrowRight,
  Mail,
  Menu,
  X,
  ArrowUp,
  ArrowUpRight,
  Heart,
  ShieldCheck,
  Stethoscope,
  PawPrint,
} from "lucide-react";
import heroWide from "@/assets/hero-wide.jpg";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function SocialLinks({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizeClasses = {
    sm: "size-8",
    md: "size-10",
    lg: "size-12",
  };
  return (
    <div className="flex items-center gap-3">
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="PetMAX on Facebook"
        className={`inline-flex ${sizeClasses[size]} items-center justify-center rounded-full bg-gradient-dusk text-white shadow-md shadow-dawn/25 transition-transform hover:-translate-y-px active:scale-95`}
      >
        <FacebookIcon className="size-5" />
      </a>
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="PetMAX on Instagram"
        className={`inline-flex ${sizeClasses[size]} items-center justify-center rounded-full bg-gradient-dusk text-white shadow-md shadow-dawn/25 transition-transform hover:-translate-y-px active:scale-95`}
      >
        <InstagramIcon className="size-5" />
      </a>
    </div>
  );
}
import vaccinationImage from "@/assets/services/icon-vaccination.png";
import checkupImage from "@/assets/services/icon-checkup.png";
import dentalImage from "@/assets/services/icon-dental.png";
import groomingImage from "@/assets/services/icon-grooming.png";
import emergencyImage from "@/assets/services/icon-emergency.png";
import telemedicineImage from "@/assets/services/icon-telemedicine.png";

const iconVaccination = { url: vaccinationImage };
const iconCheckup = { url: checkupImage };
const iconDental = { url: dentalImage };
const iconGrooming = { url: groomingImage };
const iconEmergency = { url: emergencyImage };
const iconTelemedicine = { url: telemedicineImage };
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";
import team4 from "@/assets/team-4.jpg";
import team5 from "@/assets/team-5.jpg";
import team6 from "@/assets/team-6.jpg";
import space1 from "@/assets/space-1.jpg";
import space2 from "@/assets/space-2.jpg";
import space3 from "@/assets/space-3.jpg";
const logoAsset = { url: "/petmax-logo-v5.png" };

function ClinicLogo() {
  return (
    <img
      src={logoAsset.url}
      alt="PetMAX Advanced Veterinary Clinic - Because every life matters"
      width={1246}
      height={522}
      className="clinic-logo-full"
    />
  );
}


import helloPets from "@/assets/hello-pets.png";

export const Route = createFileRoute("/")({
  component: Index,
});

const services = [
  { image: iconVaccination, title: "Vaccination", desc: "Core and lifestyle vaccines tailored to your pet's age, breed, and routine." },
  { image: iconCheckup, title: "Regular check‑up", desc: "Comprehensive wellness exams to catch issues early and keep tails wagging." },
  { image: iconDental, title: "Dental services", desc: "Digital oral imaging, cleanings, and gentle extractions for healthy smiles." },
  { image: iconGrooming, title: "Grooming", desc: "Baths, trims, and nail care in a calm, fear‑free grooming suite." },
  { image: iconEmergency, title: "Emergency visits", desc: "Same‑day urgent care with on‑site diagnostics when minutes matter." },
  { image: iconTelemedicine, title: "Telemedicine", desc: "Virtual consults from home for follow‑ups, questions, and quick advice." },
];

const team = [
  { name: "Dr. Farhana Rahman", role: "Founder & Lead Veterinarian", image: team1 },
  { name: "Dr. Tanvir Hossain", role: "Small Animal Surgeon", image: team2 },
  { name: "Nusrat Jahan", role: "Registered Vet Technician", image: team3 },
  { name: "Dr. Kamrul Islam", role: "Senior Veterinarian", image: team4 },
  { name: "Rafiq Ahmed", role: "Veterinary Assistant", image: team5 },
  { name: "Dr. Samira Khan", role: "Clinic Manager", image: team6 },
];

function Index() {
  return (
    <div className="petcare-site min-h-screen bg-background text-foreground">
      <ScrollEffects />
      <SiteNav />
      <main id="main-content">
      <Hero />
      <CareApproach />
      <Services />
      <Team />
      <Tour />
      <Contact />
      <Booking />
      </main>
      <Footer />
    </div>
  );
}

function ScrollEffects() {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    let observer: IntersectionObserver | undefined;
    const configureMotion = () => {
      observer?.disconnect();
      elements.forEach((el) => el.classList.remove("reveal-ready", "is-visible"));
      if (motion.matches || !("IntersectionObserver" in window)) return;
      observer = new IntersectionObserver((entries) => {
        entries.forEach(({ target, isIntersecting, boundingClientRect }) => {
          const el = target as HTMLElement;
          el.style.setProperty("--reveal-y", boundingClientRect.top < 0 ? "-24px" : "24px");
          el.classList.toggle("is-visible", isIntersecting);
        });
      }, { threshold: 0.08, rootMargin: "0px 0px -24px 0px" });
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        el.classList.toggle("is-visible", rect.top < innerHeight && rect.bottom > 0);
        el.classList.add("reveal-ready");
        observer!.observe(el);
      });
    };
    configureMotion();
    motion.addEventListener("change", configureMotion);
    let frame = 0;
    const updateScroll = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - innerHeight;
      document.documentElement.style.setProperty("--scroll-progress", String(max > 0 ? scrollY / max : 0));
      document.querySelector("header")?.classList.toggle("is-scrolled", scrollY > 24);
      setShowTop(scrollY > 650);
      let active = "";
      document.querySelectorAll<HTMLElement>("main section[id]").forEach((section) => {
        if (section.getBoundingClientRect().top <= 180) active = section.id;
      });
      document.querySelectorAll<HTMLAnchorElement>('header a[href^="#"]').forEach((link) => {
        if (link.hash === `#${active}`) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(updateScroll); };
    updateScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      observer?.disconnect();
      motion.removeEventListener("change", configureMotion);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
      document.documentElement.style.removeProperty("--scroll-progress");
    };
  }, []);
  return <>
    <a href="#main-content" className="skip-link">Skip to content</a>
    <div className="scroll-progress" aria-hidden="true" />
    <a href="#top" aria-label="Back to top" tabIndex={showTop ? 0 : -1} aria-hidden={!showTop} className={`back-to-top ${showTop ? "is-shown" : ""}`}><ArrowUp className="size-5" /></a>
  </>;
}

function SiteNav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header sticky top-0 z-50 overflow-visible border-b border-border/40 bg-background/95 backdrop-blur-md">
      <nav aria-label="Main navigation" className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-5 sm:px-6">
        <a href="#top" aria-label="PetMAX home" className="flex shrink-0 items-center">
          <ClinicLogo />
        </a>
        <div className="hidden items-center gap-1 text-sm font-medium text-foreground/75 lg:flex">
          <a href="#services" className="inline-flex min-h-11 items-center rounded-xl px-4 transition-colors hover:bg-primary/5 hover:text-primary">Services</a>
          <a href="#team" className="inline-flex min-h-11 items-center rounded-xl px-4 transition-colors hover:bg-primary/5 hover:text-primary">Team</a>
          <a href="#tour" className="inline-flex min-h-11 items-center rounded-xl px-4 transition-colors hover:bg-primary/5 hover:text-primary">Our space</a>
          <a href="#contact" className="inline-flex min-h-11 items-center rounded-xl px-4 transition-colors hover:bg-primary/5 hover:text-primary">Contact</a>
        </div>
        <div className="hidden items-center gap-4 md:flex">
          <div className="hidden sm:flex">
            <SocialLinks size="sm" />
          </div>
          <a
            href="#booking"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-dusk px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-dawn/25 transition-transform hover:-translate-y-px active:scale-95"
          >
            <Calendar className="size-4" />
            Book an appointment
          </a>
        </div>
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          aria-controls="mobile-navigation"
          className="inline-flex size-11 items-center justify-center rounded-full bg-primary text-white lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>
      {open && (
        <div id="mobile-navigation" className="absolute inset-x-0 top-full max-h-[calc(100dvh-5rem)] overflow-y-auto border-b border-t border-border/40 bg-background shadow-lg backdrop-blur-md lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4 text-base font-medium text-foreground/80">
            <a href="#services" onClick={() => setOpen(false)} className="rounded-lg px-2 py-3 hover:bg-secondary hover:text-primary">Services</a>
            <a href="#team" onClick={() => setOpen(false)} className="rounded-lg px-2 py-3 hover:bg-secondary hover:text-primary">Team</a>
            <a href="#tour" onClick={() => setOpen(false)} className="rounded-lg px-2 py-3 hover:bg-secondary hover:text-primary">Our space</a>
            <a href="#contact" onClick={() => setOpen(false)} className="rounded-lg px-2 py-3 hover:bg-secondary hover:text-primary">Contact</a>
            <a
              href="#booking"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-dusk px-5 py-3 text-sm font-semibold text-white shadow-md shadow-dawn/25"
            >
              <Calendar className="size-4" />
              Book an appointment
            </a>
            <div className="mt-3 flex justify-center pb-2">
              <SocialLinks size="md" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="editorial-hero">
      <div className="hero-layout">
        <div className="hero-copy" data-reveal>
          <span className="eyebrow"><span className="status-dot" /> A little care. A lifetime of love.</span>
          <h1>For their<br />health. For your<br /><span>peace of mind.</span></h1>
          <p className="hero-intro">Thoughtful veterinary care for the ones who make your life a little brighter. Right here in Bashundhara, Dhaka.</p>
          <div className="hero-actions">
            <a href="#booking" className="button-primary">Book an appointment <ArrowUpRight className="size-4" /></a>
            <a href="#services" className="button-text">Explore our care <ArrowRight className="size-4" /></a>
          </div>
          <div className="hero-note"><span className="hero-note-icon"><Heart className="size-5" /></span><p><strong>Little patients. Our full attention.</strong><br /><span>From a first hello to lifelong wellbeing.</span></p></div>
        </div>
        <div className="hero-visual" data-reveal>
          <div className="hero-image-wrap"><img src={heroWide} alt="Veterinarian gently holding a golden retriever puppy" width={1920} height={1088} fetchPriority="high" /></div>
          <div className="hero-image-label"><span className="status-dot" /> Here for every wag & purr.</div>
          <div className="care-stamp"><PawPrint className="size-6" /><span>Small paws.<br /><strong>Big priority.</strong></span></div>
          <a href="tel:+8801332881166" className="hero-call"><span><Phone className="size-5" /></span><div><small>A friendly voice away</small><strong>01332-88-11-66</strong></div><ArrowUpRight className="size-5" /></a>
          <span className="hero-photo-caption">PETMAX ANIMAL CARE · BASUNDHARA, DHAKA</span>
        </div>
      </div>
      <div className="hero-bottom"><span><MapPin className="size-4" /> Your neighbourhood animal care</span><a href="#services">A better kind of vet visit <ArrowRight className="size-4 rotate-90" /></a><span>Care that feels personal.</span></div>
    </section>
  );
}

function CareApproach() {
  return <section className="approach-section" aria-label="Our approach to care">
    <div className="approach-layout">
      <div data-reveal><span className="eyebrow">THE PETMAX WAY</span><h2>Expert care.<br /><span>A softer touch.</span></h2></div>
      <div className="approach-details">
        {[
          { icon: Stethoscope, title: "Care that sees the whole pet", text: "Every age, every personality. A thoughtful approach to their individual needs." },
          { icon: Heart, title: "Comfort comes first", text: "Gentle handling and a welcoming space for pets and the people who love them." },
          { icon: ShieldCheck, title: "Clarity at every step", text: "A conversation about your pet’s care, with time for the questions that matter." },
        ].map(({ icon: Icon, title, text }) => <div className="approach-item" key={title} data-reveal><Icon className="size-5" /><div><h3>{title}</h3><p>{text}</p></div></div>)}
      </div>
    </div>
  </section>;
}

function Services() {
  return (
    <section id="services" className="services-section bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div data-reveal className="section-heading mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-accent">Our services</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">
              A little routine care. A world of difference.
            </h2>
          </div>
          <p className="max-w-sm text-foreground/65">
            From routine checkups to specialized care, our team treats every patient like they&rsquo;re one of our own.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              data-reveal className="service-card group flex flex-col"
            >
              <img
                src={s.image.url}
                alt={`${s.title} illustration`}
                width={96}
                height={96}
                loading="lazy"
                className="service-icon mb-6 size-20 object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <h3 className="font-display text-2xl text-primary">{s.title}</h3>
              <p className="mb-6 mt-3 text-sm leading-relaxed text-foreground/70">{s.desc}</p>
              <a href={s.title === "Emergency visits" ? "tel:+8801332881166" : "#booking"} className="mt-auto inline-flex min-h-11 items-center gap-2 self-start text-sm font-bold text-primary underline-offset-4 hover:underline">
                {s.title === "Emergency visits" ? "Call for urgent care" : "Plan a visit"}<ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                <span className="sr-only"> for {s.title}</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Team() {
  return (
    <section id="team" className="team-section bg-cloud py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div data-reveal className="section-heading mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-accent">Meet the team</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">
              Experienced hands.<br />Familiar faces.
            </h2>
          </div>
          <p className="max-w-sm text-foreground/65">
            The people behind PetMAX are lifelong animal lovers with decades of combined
            veterinary experience.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 min-[400px]:grid-cols-2 lg:grid-cols-3 sm:gap-6">
          {team.map((m) => (
            <div
              key={m.name}
              data-reveal className="team-card group overflow-hidden bg-cloud"
            >
              <div className="team-photo aspect-[4/4.5] overflow-hidden bg-secondary">
                <img
                  src={m.image}
                  alt={`${m.name}, ${m.role}`}
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="team-caption py-5">
                <p className="font-display text-xl text-primary">{m.name}</p>
                <p className="mt-1 text-sm text-foreground/60">{m.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Tour() {
  return (
    <section id="tour" className="tour-section bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div data-reveal className="section-heading mb-12 grid items-end gap-8 md:grid-cols-2">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-accent">Tour our space</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-primary">
              A clinic that feels like home.
            </h2>
          </div>
          <p className="text-foreground/70 md:pb-1">
            Bright, calm exam rooms. Fear‑free handling. A space designed to make every
            visit something your pet doesn&rsquo;t dread.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {[space1, space2, space3].map((src, i) => (
            <div key={i} data-reveal className="tour-photo overflow-hidden">
              <img
                src={src}
                alt="Inside the PetMAX clinic"
                width={1200}
                height={1500}
                loading="lazy"
                className="aspect-[4/3] h-full w-full object-cover transition-transform duration-500 hover:scale-105 md:aspect-[4/5]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact-section bg-secondary py-16 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2">
        <div>
          <span className="eyebrow">COME SAY HELLO</span>
          <div data-reveal className="mt-4 flex items-center gap-4">
            <h2 className="font-display text-4xl md:text-5xl text-primary">
              Your next visit<br />starts here.
            </h2>
            <img
              src={helloPets}
              alt="Cartoon cat and dog waving hello"
              width={160}
              height={160}
              className="h-28 w-28 object-contain sm:h-40 sm:w-40"
              loading="lazy"
            />
          </div>
          <p className="mt-5 max-w-md text-foreground/70">
            Questions, records transfers, or just want to say hi? We&rsquo;d love to hear from you.
          </p>
          <div data-reveal className="contact-details mt-10 space-y-5 text-primary">
            <p className="flex items-start gap-3">
              <MapPin className="mt-1 size-4 shrink-0 text-accent" />
              <span>
                Level 4, Seven Star Super Shop Building,<br />
                Plot 790/B, Road 18, Block K,<br />
                Bashundhara RA, Dhaka 1229
              </span>
            </p>
            <p className="flex items-center gap-3">
              <Phone className="size-4 text-accent" />
              <a href="tel:+8801332881166" className="underline-offset-4 hover:underline">01332-88-11-66</a>
            </p>
            <p className="flex items-center gap-3">
              <Mail className="size-4 text-accent" />
              <a href="mailto:hpetmax@gmail.com" className="break-all underline-offset-4 hover:underline">hpetmax@gmail.com</a>
            </p>
            <p className="flex items-center gap-3">
              <Clock className="size-4 text-accent" />
              &lsquo;Always Open&rsquo; 24/7
            </p>
          </div>
        </div>
        <div data-reveal className="clinic-map overflow-hidden rounded-3xl ring-1 ring-primary/10">
          <iframe
            title="PetMAX Advanced Veterinary Clinic location"
            src="https://www.openstreetmap.org/export/embed.html?bbox=90.41%2C23.80%2C90.44%2C23.83&layer=mapnik&marker=23.8151%2C90.4255"
            className="h-full min-h-[360px] w-full"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

function Booking() {
  return (
    <section
      id="booking"
      className="booking-section relative overflow-hidden bg-primary px-6 py-16 text-primary-foreground sm:py-24"
    >
      <div className="absolute -right-40 -top-40 size-[500px] rounded-full bg-gradient-dusk opacity-30 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 size-[400px] rounded-full bg-candy opacity-20 blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        <div data-reveal className="relative">
          <span className="text-xs font-bold uppercase tracking-widest text-dusk">Make a booking</span>
          <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">
            Ready to meet the team?
          </h2>
          <p className="mt-5 max-w-md text-primary-foreground/75">
            Book online in under a minute — tell us a little about your pet and
            we&rsquo;ll be in touch to confirm your visit.
          </p>
          <div className="mt-10 space-y-4 text-primary-foreground/85">
            <p className="flex items-center gap-3"><Phone className="size-4 text-dusk" />01332-88-11-66</p>
            <p className="flex items-center gap-3"><MapPin className="size-4 text-dusk" />Level 4, Seven Star Super Shop Building, Plot 790/B, Road 18, Block K, Bashundhara RA, Dhaka 1229</p>
          </div>
        </div>
        <div data-reveal className="booking-form relative rounded-3xl border border-white/15 bg-white/[0.07] p-6 sm:p-8">
          <h3 className="font-display text-2xl">Request an appointment</h3>
          <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Your name" className="h-12 w-full rounded-xl border border-white/15 bg-white/[0.06] px-4 text-sm placeholder:text-primary-foreground/50 focus:border-dusk focus:outline-none" />
            <input type="text" placeholder="Your pet's name" className="h-12 w-full rounded-xl border border-white/15 bg-white/[0.06] px-4 text-sm placeholder:text-primary-foreground/50 focus:border-dusk focus:outline-none" />
            <input type="email" placeholder="Email address" className="h-12 w-full rounded-xl border border-white/15 bg-white/[0.06] px-4 text-sm placeholder:text-primary-foreground/50 focus:border-dusk focus:outline-none" />
            <select className="h-12 w-full rounded-xl border border-white/15 bg-white/[0.06] px-4 text-sm text-primary-foreground/80 focus:border-dusk focus:outline-none">
              <option className="text-primary">Vaccination</option>
              <option className="text-primary">Regular check‑up</option>
              <option className="text-primary">Dental services</option>
              <option className="text-primary">Grooming</option>
              <option className="text-primary">Emergency visit</option>
              <option className="text-primary">Telemedicine</option>
            </select>
            <textarea placeholder="Anything we should know?" rows={3} className="w-full rounded-xl border border-white/15 bg-white/[0.06] px-4 py-3 text-sm placeholder:text-primary-foreground/50 focus:border-dusk focus:outline-none" />
            <button
              type="submit"
              className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-dusk px-6 py-4 font-semibold text-white shadow-lg shadow-dawn/30 transition-transform hover:-translate-y-px active:scale-95"
            >
              Request appointment
              <ArrowRight className="size-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer border-t border-primary/10 bg-background py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-4 md:items-stretch">
          <div className="flex flex-col">
            <ClinicLogo />
            <p className="mt-3 max-w-xs text-sm text-foreground/65">
              World‑class animal care in Bashundhara RA, Dhaka — because your pet deserves the best.
            </p>
            <div className="mt-auto pt-5">
              <a
                href="#booking"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-dusk px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-dawn/25 transition-transform hover:-translate-y-px active:scale-95"
              >
                <Calendar className="size-4" />
                Book an appointment
              </a>
            </div>
          </div>
          <div className="flex items-start justify-center md:justify-start">
            <img
              src={helloPets}
              alt="Friendly cat and dog illustration"
              width={160}
              height={160}
              className="footer-pets h-36 w-36 object-contain md:h-40 md:w-40"
              loading="lazy"
            />
          </div>
          <div>
            <p className="font-display text-primary">Explore</p>
            <ul className="mt-4 space-y-2 text-sm text-foreground/65">
              <li><a href="#services" className="hover:text-primary">Services</a></li>
              <li><a href="#team" className="hover:text-primary">Team</a></li>
              <li><a href="#tour" className="hover:text-primary">Our space</a></li>
            </ul>
          </div>
          <div className="flex flex-col">
            <p className="font-display text-primary">Contact</p>
            <ul className="mt-4 space-y-2 text-sm text-foreground/65">
              <li>Level 4, Seven Star Super Shop Building, Plot 790/B, Road 18, Block K, Bashundhara RA, Dhaka 1229</li>
              <li>01332-88-11-66</li>
              <li>hpetmax@gmail.com</li>
            </ul>
            <div className="mt-auto pt-5">
              <SocialLinks size="md" />
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-primary/10 pt-5 text-xs text-foreground/55 md:flex-row">
          <p>© {new Date().getFullYear()} PetMAX Advanced Veterinary Clinic. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-primary">Privacy</a>
            <a href="#" className="hover:text-primary">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
