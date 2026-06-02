import Image from 'next/image';
import { GraduationCap } from 'lucide-react';
import { getImageById } from '@/lib/placeholder-images';

const educationData = [
  {
    title: 'Google Prompting Essentials',
    institution: 'Coursera (authorized by Google)',
    date: 'Nov 17, 2025',
    description:
      'Completed an online course focused on AI prompting techniques, structured query writing, and practical applications of AI tools for productivity.',
  },
  {
    title: 'Intermediate - Commerce (In Progress)',
    institution: 'Allama Iqbal Open University, Karachi',
    date: '2025 - Present',
    description:
      'Currently pursuing Intermediate in Commerce, gaining knowledge in business, accounting, and commerce-related subjects.',
  },
  {
    title: 'Matriculation - Computer Science',
    institution: 'DMC Muhammad Ali Jinnah English Medium School',
    date: '2023 - 2025',
    description:
      'Completed Matric with a focus on Computer Science subjects including ICT, Computer Fundamentals, and practical applications. Built a strong base in computers and analytical skills.',
  },
  {
    title: 'Hifz-ul-Quran',
    institution: 'Madarsa Kanzul Eman - Jama Masjid Siddiqia',
    date: '2019 - 2024',
    description:
      'Completed Hifz-ul-Quran with strong dedication and discipline. Prior to Hifz, completed full Quran recitation and repeated it three times. After completing Hifz, revised the Quran twice under supervision. Developed excellent memorization, consistency, focus, and time-management skills.',
  },
  {
    title: 'Primary & Middle School',
    institution: 'The National Grammar School',
    date: '2010 - 2020',
    description:
      'Nursery - 7th Class. Studied core academic subjects, developed foundational communication, mathematics, and general learning skills.',
  },
];

export function EducationSection() {
  const educationImage = getImageById('education-background');

  return (
    <section id="education" className="py-24 sm:py-32 bg-background/80 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-stretch">
          <div className="flex flex-col justify-center">
            <div className="mb-12">
              <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4 text-white">
                Education & <span className="text-accent">Background</span>
              </h2>
              <p className="max-w-2xl text-slate-300 leading-relaxed">
                A curated overview of my most relevant learning milestones, from formal studies to professional certifications that support my design, business, and AI-focused work.
              </p>
            </div>

            <div className="space-y-6">
              {educationData.map((edu, index) => (
                <article
                  key={edu.title}
                  className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-black/10 backdrop-blur-xl transition-all duration-300 hover:border-accent/20"
                >
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-accent font-semibold text-sm uppercase tracking-[0.24em]">
                        {edu.date}
                      </p>
                      <h3 className="mt-3 text-2xl font-semibold text-white">{edu.title}</h3>
                      <p className="text-slate-400 mt-2">{edu.institution}</p>
                    </div>
                  </div>
                  <p className="mt-6 text-slate-300 leading-relaxed">{edu.description}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex self-center items-center justify-center rounded-[2.5rem] overflow-hidden border border-white/10 bg-slate-950/20 shadow-2xl shadow-black/20 max-h-[520px]">
            <div className="relative w-full max-w-[520px] aspect-[4/5]">
              {educationImage && (
                <Image
                  src={educationImage.imageUrl}
                  alt={educationImage.description}
                  fill
                  loading="lazy"
                  quality={65}
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-contain"
                  data-ai-hint={educationImage.imageHint}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
