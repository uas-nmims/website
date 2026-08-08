// components/AboutUltra.tsx

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutUltra = () => {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const mult = prefersReduced ? 0.6 : 1;

    const ctx = gsap.context(() => {
      // Established badge pop
      gsap.fromTo(
        ".est-pill",
        {
          opacity: 0,
          y: 8,
          filter: "blur(6px)",
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.2 * mult,
          ease: "power2.out",
          delay: 0.1,
        }
      );

      // Big title reveal
      gsap.fromTo(
        ".about-title",
        {
          opacity: 0,
          y: 22,
          filter: "blur(10px)",
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.3 * mult,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-title",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Underline animation
      gsap.fromTo(
        ".accent-line",
        {
          scaleX: 0,
        },
        {
          scaleX: 1,
          duration: 1.2 * mult,
          ease: "power2.out",
          transformOrigin: "left",
          delay: 0.2,
        }
      );

      // Paragraph lines stagger
      gsap.utils.toArray<HTMLElement>(".reveal-line .line").forEach((el, i) => {
        gsap.fromTo(
          el,
          {
            opacity: 0,
            y: 18,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.7 * mult,
            ease: "power1.out",
            delay: i * 0.08,
            scrollTrigger: {
              trigger: ".reveal-line",
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // Stats count-up
      document
        .querySelectorAll<HTMLElement>(".stat[data-target]")
        .forEach((el, idx) => {
          const target = Number(el.dataset.target || "0");
          const obj = { val: 0 };

          gsap.to(obj, {
            val: target,
            duration: 2.2 * mult,
            ease: "power2.out",
            delay: idx * 0.12,
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              toggleActions: "play none none none",
            },
            onUpdate: () => {
              el.textContent = Math.round(obj.val).toString();
            },
          });
        });

      // Text lift-in
      gsap.fromTo(
        ".about-card",
        {
          opacity: 0,
          y: 26,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.9 * mult,
          ease: "power2.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: ".cards-grid",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // Objectives header animation
      gsap.fromTo(
        ".objectives-header",
        {
          opacity: 0,
          y: 20,
          filter: "blur(8px)",
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.1 * mult,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".objectives-section",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // Objectives text animation
      gsap.fromTo(
        ".objective-card",
        {
          opacity: 0,
          y: 30,
          scale: 0.965,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1 * mult,
          ease: "power2.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: ".objectives-section",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      id="about"
      className="relative overflow-hidden bg-black px-4 py-24 md:py-28"
      style={{
        fontFamily: '"Inter", "SF Pro Display", -apple-system, sans-serif',
      }}
    >
      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Title */}
        <h2
          className="about-title mt-6 text-4xl font-extralight tracking-tight text-white md:text-6xl"
          style={{
            fontFamily: '"BankGothic Md BT", sans-serif',
          }}
        >
          About UAS NMIMS

          <span className="accent-line mt-3 block h-[2px] w-40 origin-left scale-x-100 bg-gradient-to-r from-[rgba(255,140,20,0.8)] to-[rgba(255,140,20,0.1)]" />
        </h2>

        {/* Introductory text */}
        <div className="reveal-line mt-8 md:mt-10">
          <p className="line text-lg leading-relaxed text-white/85 md:text-xl">
            UAS NMIMS is a student-driven team pushing innovation in Unmanned
            Aerial Systems through hands-on builds, research, and real mission
            engineering.
          </p>

          <p className="line mt-4 text-base leading-relaxed text-white/70 md:text-lg">
            The vision is to craft autonomous platforms that navigate
            waypoints, analyze imagery for insights, deliver payloads reliably,
            and identify mission-specific targets end-to-end.
          </p>
        </div>

        {/* Focus areas */}
        <div className="cards-grid mt-16 grid gap-10 md:grid-cols-3">
          <div className="about-card">
            <h3 className="text-lg font-semibold text-white">
              Hands-on Builds
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-white/75">
              Airframes, avionics, propulsion, and autonomy tightly integrated
              with rigorous testing loops.
            </p>
          </div>

          <div className="about-card">
            <h3 className="text-lg font-semibold text-white">
              Applied Research
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-white/75">
              Perception, guidance, mission planning, and safety systems mapped
              to field outcomes.
            </p>
          </div>

          <div className="about-card">
            <h3 className="text-lg font-semibold text-white">
              Real Missions
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-white/75">
              Waypoints, payload operations, autonomous detection, and reliable
              delivery workflows.
            </p>
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="about-card text-center">
            <div
              className="stat text-3xl font-semibold text-white md:text-4xl"
              data-target="8"
            >
              0
            </div>

            <div className="mt-2 text-xs text-white/70">
              Competitions Won
            </div>
          </div>

          <div className="about-card text-center">
            <div
              className="stat text-3xl font-semibold text-white md:text-4xl"
              data-target="13"
            >
              0
            </div>

            <div className="mt-2 text-xs text-white/70">
              Vehicles Built
            </div>
          </div>

          <div className="about-card text-center">
            <div
              className="stat text-3xl font-semibold text-white md:text-4xl"
              data-target="750"
            >
              0
            </div>

            <div className="mt-2 text-xs text-white/70">
              Flights Logged
            </div>
          </div>

          <div className="about-card text-center">
            <div
              className="stat text-3xl font-semibold text-white md:text-4xl"
              data-target="520"
            >
              0
            </div>

            <div className="mt-2 text-xs text-white/70">
              Flight Hours
            </div>
          </div>
        </div>

        {/* Mission and objectives */}
        <div className="objectives-section mt-24">
          <h3 className="objectives-header mb-10 text-2xl font-light text-white/90 md:text-3xl">
            Our Mission & Objectives

            <span className="mt-2 block h-[1px] w-24 bg-gradient-to-r from-[rgba(255,140,20,0.6)] to-transparent" />
          </h3>

          <div className="grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {/* R&D Focus */}
            <div className="objective-card">
              <h4 className="mb-3 text-lg font-medium text-white">
                R&D in Drone Tech
              </h4>

              <p className="text-sm leading-relaxed text-white/70">
                Team UAS NMIMS specializes in drone technology and has been
                conducting extensive research and development.
              </p>
            </div>

            {/* Technology Learning */}
            <div className="objective-card">
              <h4 className="mb-3 text-lg font-medium text-white">
                Technology Learning
              </h4>

              <p className="text-sm leading-relaxed text-white/70">
                Provide members with opportunities to learn about drone
                technology, including building, programming, and piloting
                drones.
              </p>
            </div>

            {/* Innovation */}
            <div className="objective-card">
              <h4 className="mb-3 text-lg font-medium text-white">
                Innovation & Applications
              </h4>

              <p className="text-sm leading-relaxed text-white/70">
                Encourage members to innovate and create new applications for
                drones in photography, agriculture, and search and rescue.
              </p>
            </div>

            {/* Competitions */}
            <div className="objective-card">
              <h4 className="mb-3 text-lg font-medium text-white">
                Competitions & Challenges
              </h4>

              <p className="text-sm leading-relaxed text-white/70">
                Participate in drone competitions and challenges to foster a
                spirit of friendly competition and continuous improvement.
              </p>
            </div>

            {/* Collaboration */}
            <div className="objective-card md:col-span-2 lg:col-span-1">
              <h4 className="mb-3 text-lg font-medium text-white">
                Network & Collaborate
              </h4>

              <p className="text-sm leading-relaxed text-white/70">
                Provide a platform for members to network, share ideas, and
                collaborate on projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUltra;