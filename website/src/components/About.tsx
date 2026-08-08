import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type Achievement = {
  year: string;
  title: string;
  description: string;
  highlight: string;
  logo: string;
};

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const planeRef = useRef<HTMLDivElement>(null);

  const achievements: Achievement[] = [
    {
      year: '2025',
      title:
        'Boeing National Aeromodelling Competition, IIT Gandhinagar (Zonal Round 2025–26)',
      description:
        'Achieved 3rd place in the Zonal Round at IIT Gandhinagar with improved control systems, payload mechanisms and structural refinements delivering reliable performance.',
      highlight: '3rd Place (Zonal)',
      logo: '/img/Boeing.jpeg',
    },
    {
      year: '2025',
      title:
        'Boeing National Aeromodelling Competition — National Finale, Bangalore',
      description:
        'Represented the institute at the National Finale in Bangalore and competed among the top teams nationally, delivering strong mission planning, flight accuracy and system reliability.',
      highlight: 'Top 5 Teams Nationally',
      logo: '/img/Boeing.jpeg',
    },
    {
      year: '2024',
      title: 'Carry the Consignment — SVNIT Surat',
      description:
        'Placed 3rd in the precision payload delivery challenge at SVNIT Surat. The entry stood out for efficient weight distribution, robust structure and consistent task execution.',
      highlight: '3rd Place',
      logo: '/img/SVNIT.jpeg',
    },
    {
      year: '2024',
      title:
        'Boeing National Aeromodelling Competition, IIT Bombay (Zonal Round 2024–25)',
      description:
        'Secured 2nd place in the Zonal Round at IIT Bombay by demonstrating strong aircraft design, aerodynamic stability and consistent mission execution. Advanced to the National Finale.',
      highlight: '2nd Place (Zonal), Advanced to National Finale',
      logo: '/img/Boeing.jpeg',
    },
    {
      year: '2023',
      title: 'Drone Log Competition, IIT Bombay Techfest',
      description:
        'Secured 2nd position in this national-level event focused on warehouse management using drones. The challenge tested our ability to design and operate drones for payload handling, precision navigation and efficient logistics execution.',
      highlight: '2nd Place Nationally among 30+ Teams',
      logo: '/img/Techfest.jpeg',
    },
    {
      year: '2018',
      title: 'AUVSI SUAS 2018',
      description:
        'We participated for the third time in the 16th AUVSI SUAS 2018 with our hexa-copter. Over 75 teams from all across the globe participated.',
      highlight:
        'We secured 5th rank Worldwide and 1st among all Indian teams.',
      logo: '/img/SUAS.jpeg',
    },
    {
      year: '2016',
      title: 'AUVSI SUAS 2016',
      description:
        'We participated in the AUVSI SUAS 2016 competition held in Maryland, USA with our drone Scylla 2K16.',
      highlight:
        'We secured a Mission Rank 5 at the competition and 3rd among all Indian Teams.',
      logo: '/img/SUAS.jpeg',
    },
  ];

  useEffect(() => {
    const style = document.createElement('style');

    style.textContent = `
      .about-navy-bg {
        position: relative;
        isolation: isolate;
        overflow: hidden;
        background:
          radial-gradient(circle at 10% 12%, rgba(255,255,255,0.025), transparent 22%),
          radial-gradient(circle at 86% 16%, rgba(255,255,255,0.02), transparent 23%),
          radial-gradient(circle at 18% 42%, rgba(255,255,255,0.018), transparent 23%),
          radial-gradient(circle at 78% 42%, rgba(255,255,255,0.018), transparent 22%),
          radial-gradient(circle at 12% 76%, rgba(255,255,255,0.02), transparent 24%),
          radial-gradient(circle at 88% 78%, rgba(255,255,255,0.018), transparent 23%),
          linear-gradient(180deg, #05070b 0%, #080d16 50%, #05070b 100%);
      }

      .about-navy-bg::before {
        content: "";
        position: absolute;
        inset: 0;
        z-index: -1;
        pointer-events: none;
        opacity: 0.8;
        background:
          radial-gradient(circle at 7% 22%, rgba(255,255,255,0.018), transparent 8%),
          radial-gradient(circle at 24% 16%, rgba(255,255,255,0.015), transparent 10%),
          radial-gradient(circle at 43% 30%, rgba(255,255,255,0.018), transparent 8%),
          radial-gradient(circle at 63% 14%, rgba(255,255,255,0.014), transparent 10%),
          radial-gradient(circle at 92% 30%, rgba(255,255,255,0.018), transparent 9%),
          radial-gradient(circle at 33% 60%, rgba(255,255,255,0.014), transparent 10%),
          radial-gradient(circle at 68% 58%, rgba(255,255,255,0.016), transparent 9%),
          radial-gradient(circle at 8% 88%, rgba(255,255,255,0.015), transparent 10%),
          radial-gradient(circle at 48% 84%, rgba(255,255,255,0.018), transparent 9%),
          radial-gradient(circle at 91% 88%, rgba(255,255,255,0.016), transparent 10%);
      }

      .about-navy-bg::after {
        content: "";
        position: absolute;
        inset: 0;
        z-index: -1;
        pointer-events: none;
        opacity: 0.045;
        background:
          linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px),
          linear-gradient(0deg, rgba(255,255,255,0.15) 1px, transparent 1px);
        background-size: 180px 180px;
      }

      .achievement-card {
        position: relative;
        overflow: hidden;
        border: 1px solid rgba(255,255,255,0.09);
        border-radius: 20px;
        background: rgba(255,255,255,0.035);
        box-shadow: 0 14px 36px rgba(0,0,0,0.28);
        transition:
          transform 0.3s ease,
          border-color 0.3s ease,
          background 0.3s ease;
      }

      .achievement-card:hover {
        transform: translateY(-4px);
        border-color: rgba(255,229,138,0.38);
        background: rgba(255,255,255,0.05);
      }

      .achievement-logo {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 58px;
        height: 58px;
        overflow: hidden;
        border: 1px solid rgba(255,255,255,0.12);
        border-radius: 10px;
        background: rgba(255,255,255,0.07);
      }

      .achievement-logo img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }

      .timeline-year {
        position: relative;
        z-index: 5;
        display: inline-block;
        color: rgba(255,255,255,0.98);
        font-size: 2rem;
        font-weight: 800;
        line-height: 1;
        letter-spacing: 0.03em;
        white-space: nowrap;
        text-shadow: 0 2px 12px rgba(0,0,0,0.8);
      }

      .card-year {
        margin-bottom: 12px;
        color: rgba(255,255,255,0.62);
        font-size: 1.2rem;
        font-weight: 700;
        letter-spacing: 0.04em;
      }

      .gold-plane {
        color: #ffe58a;
        filter:
          drop-shadow(0 0 7px rgba(255,229,138,0.72))
          drop-shadow(0 0 18px rgba(255,229,138,0.4));
        transform-origin: center center;
        will-change: transform;
      }

      .achievement-line {
        background: linear-gradient(
          180deg,
          rgba(255,255,255,0.05) 0%,
          rgba(255,255,255,0.2) 20%,
          rgba(255,255,255,0.16) 50%,
          rgba(255,255,255,0.2) 80%,
          rgba(255,255,255,0.05) 100%
        );
      }

      @media (max-width: 767px) {
        .timeline-year {
          font-size: 1.6rem;
        }

        .achievement-card {
          border-radius: 16px;
        }

        .achievement-logo {
          width: 48px;
          height: 48px;
        }
      }
    `;

    document.head.appendChild(style);

    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (prefersReducedMotion) {
      gsap.set(
        [
          titleRef.current,
          '.timeline-item',
          '.achievement-line',
          planeRef.current,
        ],
        { opacity: 1 },
      );
      return;
    }

    const isMobile = window.matchMedia('(max-width: 767px)').matches;
    const scrubValue = isMobile ? 0.35 : 0.7;
    const planeRotationDuration = isMobile ? 0.28 : 0.4;

    const context = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        },
      );

      gsap.fromTo(
        '.achievement-line',
        { scaleY: 0, transformOrigin: 'top center' },
        {
          scaleY: 1,
          duration: 1.3,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        },
      );

      gsap.fromTo(
        '.timeline-item',
        { opacity: 0, y: isMobile ? 20 : 35 },
        {
          opacity: 1,
          y: 0,
          duration: isMobile ? 0.55 : 0.8,
          stagger: isMobile ? 0.08 : 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 82%',
            toggleActions: 'play none none none',
          },
        },
      );

      if (planeRef.current && timelineRef.current) {
        const plane = planeRef.current;
        const timeline = timelineRef.current;

        gsap.set(plane, {
          opacity: 0,
          scale: 0.65,
          y: -12,
          rotation: 180,
          transformOrigin: 'center center',
        });

        gsap.to(plane, {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: isMobile ? 0.65 : 0.9,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: timeline,
            start: 'top 82%',
            toggleActions: 'play none none none',
          },
        });

        let previousDirection = 1;
        const rotatePlane = gsap.quickTo(plane, 'rotation', {
          duration: planeRotationDuration,
          ease: 'power2.out',
        });

        gsap.to(plane, {
          y: () => timeline.offsetHeight - (isMobile ? 70 : 90),
          ease: 'none',
          scrollTrigger: {
            trigger: timeline,
            start: 'top 70%',
            end: 'bottom 70%',
            scrub: scrubValue,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              if (self.direction === previousDirection) return;
              previousDirection = self.direction;
              rotatePlane(self.direction === 1 ? 180 : 0);
            },
          },
        });
      }
    }, sectionRef);

    return () => {
      context.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="about-navy-bg relative min-h-screen overflow-hidden px-4 py-20 text-white"
      style={{
        fontFamily: '"Inter", "SF Pro Display", -apple-system, sans-serif',
      }}
    >
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-16 text-center sm:mb-20">
          <h2
            ref={titleRef}
            className="mb-4 px-2 text-2xl font-light tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
          >
            Our{' '}
            <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text font-medium text-transparent">
              Achievements
            </span>
          </h2>

          <div className="mx-auto h-px w-24 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
        </div>

        <div ref={timelineRef} className="relative">
          <div className="achievement-line absolute left-4 top-0 h-full w-px sm:left-6 md:left-1/2 md:-translate-x-1/2"></div>

          <div
            ref={planeRef}
            className="absolute left-4 top-0 z-30 -translate-x-1/2 sm:left-6 md:left-1/2"
            aria-hidden="true"
          >
            <svg
              className="gold-plane h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M21 16V14L13 9V3.5C13 2.67 12.33 2 11.5 2S10 2.67 10 3.5V9L2 14V16L10 13.5V19L8 20.5V22L11.5 21L15 22V20.5L13 19V13.5L21 16Z"
                fill="currentColor"
              />
            </svg>
          </div>

          <div className="space-y-8 sm:space-y-10 md:space-y-14 lg:space-y-16">
            {achievements.map((achievement, index) => (
              <div
                key={`${achievement.year}-${achievement.title}`}
                className={`timeline-item relative md:flex md:items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
              >
                <div className="absolute left-4 top-4 z-20 -translate-x-1/2 sm:left-6 md:left-1/2 md:top-1/2 md:-translate-y-1/2">
                  <span className="timeline-year">{achievement.year}</span>
                </div>

                <div
                  className={`
                    w-full pl-10 sm:pl-12 md:w-5/12 md:pl-0
                    ${index % 2 === 0
                      ? 'md:pr-8 lg:pr-12'
                      : 'md:pl-8 lg:pl-12'
                    }
                  `}
                >
                  <article className="achievement-card p-4 sm:p-5 md:p-6 lg:p-7">
                    <div className="achievement-logo absolute right-4 top-4 sm:right-5 sm:top-5">
                      <img
                        src={achievement.logo}
                        alt={`${achievement.title} logo`}
                        loading="lazy"
                        onError={(event) => {
                          event.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>

                    <div className="pr-16 sm:pr-20">
                      <div className="card-year">{achievement.year}</div>

                      <h3 className="mb-3 text-lg font-semibold leading-tight text-white sm:text-xl md:text-2xl">
                        {achievement.title}
                      </h3>

                      <p className="mb-4 text-sm font-light leading-relaxed text-white/70 sm:text-base md:text-lg">
                        {achievement.description}
                      </p>

                      <div className="border-l border-white/25 bg-white/[0.025] px-4 py-3">
                        <p className="text-sm font-semibold leading-relaxed text-white/90 sm:text-base md:text-lg">
                          {achievement.highlight}
                        </p>
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[#ffe58a] to-transparent transition-all duration-500 hover:w-full"></div>
                  </article>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="h-12 sm:h-16 md:h-24"></div>
      </div>
    </section>
  );
};

export default About;