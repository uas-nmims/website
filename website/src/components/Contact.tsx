import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  LinkedinLogo,
  FacebookLogo,
  InstagramLogo,
  YoutubeLogo,
  EnvelopeSimple,
} from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

type TeamMember = {
  name: string;
  role: string;
  image: string;
  imagePosition?: string;
};

type TeamSection = {
  title: string;
  layout: 'single' | 'technical' | 'marketing';
  members: TeamMember[];
};

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const teamGridRef = useRef<HTMLDivElement>(null);
  const emailRef = useRef<HTMLDivElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);
  const supportRef = useRef<HTMLDivElement>(null);

  const teamInfo = {
    title: 'TEAM UAS NMIMS',
    subtitle: 'Innovating the future of drone technology',
    teamPhoto: '/img/portfolio/thumbnails/Team_Photo_2026.jpg.jpeg',
  };

  const contactEmail = 'uasnmims@gmail.com';

  const teamSections: TeamSection[] = [
    {
      title: 'Team Captain',
      layout: 'single',
      members: [
        {
          name: 'Mahak Sharma',
          role: '',
          image: '/img/portfolio/thumbnails/Mahak.jpeg',
          imagePosition: 'center 18%',
        },
      ],
    },
    {
      title: 'Treasury',
      layout: 'single',
      members: [
        {
          name: 'Ananya Mishra',
          role: '',
          image: '/img/portfolio/thumbnails/Ananya.jpeg',
          imagePosition: 'center 22%',
        },
      ],
    },
    {
      title: 'Technical Team',
      layout: 'technical',
      members: [
        {
          name: 'Aditya Chowdhury',
          role: 'Technical Team Member',
          image: '/img/portfolio/thumbnails/Aditya_C.jpeg',
          imagePosition: 'center 18%',
        },
        {
          name: 'Aditya Khairnar',
          role: 'Technical Team Member',
          image: '/img/portfolio/thumbnails/Aditya_K.jpeg',
          imagePosition: 'center 18%',
        },
        {
          name: 'Aditya Thukral',
          role: 'Technical Team Member',
          image: '/img/portfolio/thumbnails/Aditya_T.jpeg',
          imagePosition: 'center 16%',
        },
        {
          name: 'Atharva Agrawal',
          role: 'Technical Team Member',
          image: '/img/portfolio/thumbnails/Atharva.jpeg',
          imagePosition: 'center 20%',
        },
        {
          name: 'Dhiren Jain',
          role: 'Technical Team Member',
          image: '/img/portfolio/thumbnails/Dhiren.jpeg',
          imagePosition: 'center 18%',
        },
        {
          name: 'N Sai',
          role: 'Technical Team Member',
          image: '/img/portfolio/thumbnails/Sai.jpeg',
          imagePosition: 'center 18%',
        },
        {
          name: 'Nehal Rathi',
          role: 'Technical Team Member',
          image: '/img/portfolio/thumbnails/Nehal.jpeg',
          imagePosition: 'center 18%',
        },
        {
          name: 'Parth Mahajan',
          role: 'Technical Team Member',
          image: '/img/portfolio/thumbnails/Parth.jpeg',
          imagePosition: 'center 18%',
        },
        {
          name: 'Prakhar Jaiswal',
          role: 'Technical Team Member',
          image: '/img/portfolio/thumbnails/Prakhar.jpeg',
          imagePosition: 'center 18%',
        },
        {
          name: 'Siddhant Thakur',
          role: 'Technical Team Member',
          image: '/img/portfolio/thumbnails/Siddhant.jpeg',
          imagePosition: 'center 18%',
        },
        {
          name: 'Sonishka Gupta',
          role: 'Technical Team Member',
          image: '/img/portfolio/thumbnails/Sonishka.jpeg',
          imagePosition: 'center 18%',
        },
        {
          name: 'Yash Vardhan Purohit',
          role: 'Technical Team Member',
          image: '/img/portfolio/thumbnails/Yash.jpeg',
          imagePosition: 'center 18%',
        },
      ],
    },
    {
      title: 'Marketing Team',
      layout: 'marketing',
      members: [
        {
          name: 'Abhinav Anand',
          role: 'Marketing Team Member',
          image: '/img/portfolio/thumbnails/Abhinav.jpeg',
          imagePosition: 'center 18%',
        },
        {
          name: 'Piyush Kumar',
          role: 'Marketing Team Member',
          image: '/img/portfolio/thumbnails/Piyush.jpeg',
          imagePosition: 'center 18%',
        },
      ],
    },
  ];

  const socialLinks = [
    {
      icon: LinkedinLogo,
      href: 'https://www.linkedin.com/company/uas-nmims/posts/?feedView=all',
      label: 'LinkedIn',
      hoverClass: 'hover:bg-blue-600',
    },
    {
      icon: FacebookLogo,
      href: 'https://www.facebook.com/UASNMIMS/',
      label: 'Facebook',
      hoverClass: 'hover:bg-blue-500',
    },
    {
      icon: InstagramLogo,
      href: 'https://www.instagram.com/uasnmims/',
      label: 'Instagram',
      hoverClass:
        'hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500',
    },
    {
      icon: YoutubeLogo,
      href: 'https://www.youtube.com/channel/UCto9FMLqgt1F0MLdSEjdzgg',
      label: 'YouTube',
      hoverClass: 'hover:bg-red-600',
    },
  ];

  useEffect(() => {
    const style = document.createElement('style');

    style.textContent = `
      .card-minimal {
        background: rgba(12, 17, 24, 0.62);
        border: 1px solid rgba(80, 140, 210, 0.2);
        border-radius: 18px;
        transition:
          transform 0.25s cubic-bezier(0.2, 0.7, 0.1, 1),
          border-color 0.25s ease,
          box-shadow 0.25s ease;
        backdrop-filter: blur(6px) saturate(120%);
        -webkit-backdrop-filter: blur(6px) saturate(120%);
        box-shadow: 0 10px 30px rgba(32, 93, 170, 0.08);
      }

      .card-minimal:hover {
        transform: translateY(-5px);
        border-color: rgba(120, 170, 235, 0.4);
        box-shadow: 0 16px 40px rgba(80, 140, 210, 0.18);
      }

      .link-chip {
        background: rgba(255, 255, 255, 0.06);
        border: 1px solid rgba(255, 255, 255, 0.12);
        transition:
          background 0.22s ease,
          box-shadow 0.22s ease,
          border-color 0.22s ease;
      }

      .link-chip:hover {
        background: rgba(120, 170, 235, 0.14);
        box-shadow: 0 8px 26px rgba(80, 140, 210, 0.25);
        border-color: rgba(120, 170, 235, 0.35);
      }

      .social-icon {
        opacity: 0;
      }
    `;

    document.head.appendChild(style);

    const context = gsap.context(() => {
      gsap.fromTo(
        heroRef.current,
        {
          opacity: 0,
          scale: 0.94,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        },
      );

      gsap.fromTo(
        '.team-photo',
        {
          opacity: 0,
          y: 50,
          rotateX: 15,
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.team-photo',
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        },
      );

      gsap.fromTo(
        '.team-section',
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: teamGridRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        },
      );

      gsap.fromTo(
        emailRef.current,
        {
          opacity: 0,
          y: 60,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: emailRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        },
      );

      gsap.fromTo(
        supportRef.current,
        {
          opacity: 0,
          y: 60,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: supportRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        },
      );

      /*
       * Social icons:
       * Fade in on entering the viewport.
       * Fade out on leaving the viewport.
       * No scaling, rotation, bouncing, or zooming.
       */
      gsap.fromTo(
        '.social-icon',
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: socialsRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        },
      );

      gsap.fromTo(
        '.title-text',
        {
          opacity: 0,
          y: 30,
          rotateX: 15,
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        },
      );
    }, sectionRef);

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    const background = document.getElementById('contact-orbs');
    const createdElements: HTMLElement[] = [];

    let removeMouseMoveListener: (() => void) | undefined;
    let removeTouchMoveListener: (() => void) | undefined;

    if (!prefersReducedMotion && background) {
      const orbGradients = [
        'radial-gradient(circle, rgba(80,140,210,0.26) 0%, transparent 80%)',
        'radial-gradient(circle, rgba(120,170,235,0.18) 0%, transparent 75%)',
        'radial-gradient(circle, rgba(50,100,185,0.22) 0%, transparent 70%)',
        'radial-gradient(circle, rgba(32,93,170,0.16) 0%, transparent 85%)',
        'radial-gradient(circle, rgba(90,150,220,0.22) 0%, transparent 78%)',
      ];

      for (let index = 0; index < 5; index += 1) {
        const orb = document.createElement('div');

        orb.style.position = 'absolute';
        orb.style.width = `${260 + Math.random() * 140}px`;
        orb.style.height = orb.style.width;
        orb.style.left = `${Math.random() * 90}%`;
        orb.style.top = `${Math.random() * 85}%`;
        orb.style.borderRadius = '50%';
        orb.style.pointerEvents = 'none';
        orb.style.opacity = '0.55';
        orb.style.mixBlendMode = 'screen';
        orb.style.filter = 'blur(12px)';
        orb.style.background = orbGradients[index];

        background.appendChild(orb);
        createdElements.push(orb);

        gsap.to(orb, {
          x: () => Math.random() * 120 - 60,
          y: () => Math.random() * 100 - 50,
          duration: 22 + Math.random() * 10,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: Math.random() * 6,
        });
      }

      const glow = document.createElement('div');

      glow.style.position = 'absolute';
      glow.style.width = '220px';
      glow.style.height = '220px';
      glow.style.borderRadius = '50%';
      glow.style.pointerEvents = 'none';
      glow.style.opacity = '0.6';
      glow.style.mixBlendMode = 'screen';
      glow.style.filter = 'blur(12px)';
      glow.style.background =
        'radial-gradient(circle, rgba(120,170,235,0.28) 8%, rgba(80,140,210,0.20) 46%, transparent 90%)';

      background.appendChild(glow);
      createdElements.push(glow);

      let lastMoveTime = 0;

      const moveGlow = (clientX: number, clientY: number) => {
        const now = performance.now();

        if (now - lastMoveTime < 16) {
          return;
        }

        lastMoveTime = now;

        const rect = background.getBoundingClientRect();
        const x = ((clientX - rect.left) / rect.width) * 100;
        const y = ((clientY - rect.top) / rect.height) * 100;

        glow.style.left = `calc(${x}% - 110px)`;
        glow.style.top = `calc(${y}% - 110px)`;
      };

      const handleMouseMove = (event: MouseEvent) => {
        moveGlow(event.clientX, event.clientY);
      };

      const handleTouchMove = (event: TouchEvent) => {
        const touch = event.touches[0];

        if (touch) {
          moveGlow(touch.clientX, touch.clientY);
        }
      };

      background.addEventListener('mousemove', handleMouseMove);
      background.addEventListener('touchmove', handleTouchMove, {
        passive: true,
      });

      removeMouseMoveListener = () => {
        background.removeEventListener('mousemove', handleMouseMove);
      };

      removeTouchMoveListener = () => {
        background.removeEventListener('touchmove', handleTouchMove);
      };
    }

    return () => {
      context.revert();

      removeMouseMoveListener?.();
      removeTouchMoveListener?.();

      createdElements.forEach((element) => {
        gsap.killTweensOf(element);
        element.remove();
      });

      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  const getGridClass = (layout: TeamSection['layout']) => {
    if (layout === 'single') {
      return 'grid grid-cols-1 max-w-md mx-auto gap-8';
    }

    if (layout === 'technical') {
      return 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8';
    }

    return 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8';
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative overflow-hidden text-white"
      style={{
        background:
          'radial-gradient(ellipse at top, #0c1118 0%, #05070b 100%)',
      }}
    >
      <div
        id="contact-orbs"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        aria-hidden="true"
      />

      <div
        ref={heroRef}
        className="relative flex min-h-screen flex-col items-center justify-center px-4 py-20"
      >
        <div className="z-10 mb-12 text-center">
          <h1 className="title-text mb-4 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-5xl font-bold text-transparent md:text-7xl">
            {teamInfo.title}
          </h1>

          <p className="title-text mx-auto mb-2 max-w-4xl text-xl text-white/80 md:text-2xl">
            {teamInfo.subtitle}
          </p>
        </div>

        <div className="team-photo relative mx-auto w-full max-w-6xl">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-white/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 hover:opacity-100" />

            <img
              src={teamInfo.teamPhoto}
              alt="Team UAS NMIMS"
              className="h-[420px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[600px] md:h-[800px]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>
        </div>
      </div>

      <div
        ref={teamGridRef}
        className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            Meet Our{' '}
            <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
              Team
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-xl text-white/70">
            2026-2027
          </p>
        </div>

        <div className="space-y-20">
          {teamSections.map((section) => (
            <div key={section.title} className="team-section">
              <h3 className="mb-8 text-center text-2xl font-semibold text-white/90 md:text-3xl">
                {section.title}
              </h3>

              <div className={getGridClass(section.layout)}>
                {section.members.map((member) => (
                  <article
                    key={member.name}
                    className="card-minimal overflow-hidden p-10 text-center"
                  >
                    <div className="mb-4 h-[320px] overflow-hidden rounded-2xl bg-black/20 sm:h-[350px] md:h-[380px]">
                      <img
                        src={member.image}
                        alt={`${member.name} - ${member.role}`}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                        style={{
                          objectPosition: member.imagePosition || 'center',
                        }}
                      />
                    </div>

                    <div className="px-2 pb-2">
                      <h4 className="text-xl font-bold text-white">
                        {member.name}
                      </h4>

                      {member.role && (
                        <p className="mt-1 text-white/70">{member.role}</p>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        ref={emailRef}
        className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="mb-12 text-center">
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            Get In{' '}
            <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
              Touch
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-xl text-white/70">
            Have questions about our projects or want to collaborate? We&apos;d
            love to hear from you!
          </p>
        </div>

        <div className="card-minimal p-8 md:p-12">
          <div className="text-center">
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
              <EnvelopeSimple size={28} className="text-white" />
            </div>

            <h3 className="mb-4 text-2xl font-semibold">
              Contact Us Via Email
            </h3>

            <p className="mb-6 text-white/70">
              Reach out to us directly for inquiries, collaborations, or any
              questions about our work.
            </p>

            <a
              href={`mailto:${contactEmail}`}
              className="mb-5 inline-block break-all text-2xl font-semibold text-white transition-colors duration-300 hover:text-gray-300 sm:break-normal"
            >
              {contactEmail}
            </a>

            <div>
              <a
                href={`mailto:${contactEmail}?subject=${encodeURIComponent(
                  'Inquiry from Team UAS NMIMS Website',
                )}`}
                className="inline-block rounded-xl border px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[rgba(80,140,210,0.25)]"
                style={{
                  background:
                    'linear-gradient(90deg, rgba(255,255,255,0.18), rgba(255,255,255,0.10))',
                  borderColor: 'rgba(120,170,235,0.35)',
                }}
              >
                Send Email
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        ref={supportRef}
        className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="mb-12 text-center">
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            Our{' '}
            <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
              Support
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-xl text-white/70">
            Proudly supported by NMIMS University in our journey of innovation
            and excellence.
          </p>
        </div>

        <div className="card-minimal p-8 md:p-12">
          <div className="text-center">
            <img
              src="/img/NMIMS_LOGO1.png"
              alt="NMIMS University Logo"
              loading="lazy"
              className="mx-auto mb-6 h-24 rounded-2xl object-contain transition-transform duration-300 hover:scale-105 md:h-32"
            />

            <h3 className="mb-4 text-2xl font-semibold">
              NMIMS University
            </h3>

            <p className="mx-auto max-w-2xl text-white/70">
              Narsee Monjee Institute of Management Studies continues to
              support cutting-edge research and innovation in technology and
              engineering solutions.
            </p>
          </div>
        </div>
      </div>

      <div
        ref={socialsRef}
        className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="mb-12 text-center">
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            Follow Our{' '}
            <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
              Journey
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-xl text-white/70">
            Stay updated with our latest projects, achievements, and
            innovations.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {socialLinks.map((social) => {
            const IconComponent = social.icon;

            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit our ${social.label} page`}
                className={`social-icon link-chip group relative rounded-2xl p-6 text-white ${social.hoverClass}`}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative flex flex-col items-center">
                  <IconComponent size={32} className="mb-3" />

                  <span className="text-sm font-medium text-white/80 transition-colors duration-300 group-hover:text-white">
                    {social.label}
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;