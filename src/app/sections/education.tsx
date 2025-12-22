import Image from 'next/image';
import { GraduationCap } from 'lucide-react';
import { getImageById } from '@/lib/placeholder-images';

const educationData = [
  {
    date: '2023 - 2025',
    school: 'DMC Muhammad Ali Jinnah English Medium School',
    description: 'Studied Nursery-7th, pursued Hifz, then completed 9th-Matric in Computer Science, gaining strong computer and analytical skills.',
  },
  {
    date: '2019 - 2024',
    school: 'Madarsa Kanzul Eman',
    description: 'Completed Hifz-ul-Quran with strong dedication, revising it multiple times and building excellent focus, consistency, and memorization skills.',
  },
  {
    date: '2025 - Present',
    school: 'Allama Iqbal Open University',
    description: 'Currently pursuing Intermediate in Commerce, gaining knowledge in business, accounting, and commerce-related subjects.',
  },
];

export function EducationSection() {
  const educationImage = getImageById('education-background');

  return (
    <section id="education" className="py-24 sm:py-32 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          <div className="flex flex-col justify-center">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-white mb-12 flex items-center gap-4">
              Background of <span className="text-accent">Education</span>
              <GraduationCap className="w-10 h-10 text-accent" />
            </h2>
            <div className="space-y-10">
              {educationData.map((edu, index) => (
                <div key={index} className="grid md:grid-cols-[1fr_2fr] gap-x-8 gap-y-2 border-b border-white/10 pb-6">
                  <div>
                    <p className="text-slate-400 font-mono text-sm">{edu.date}</p>
                    <h3 className="font-headline text-xl font-semibold text-white mt-1">{edu.school}</h3>
                  </div>
                  <div>
                    <p className="text-slate-300 leading-relaxed">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:block relative min-h-[400px] rounded-2xl overflow-hidden">
             {educationImage && (
                <Image 
                    src={educationImage.imageUrl} 
                    alt={educationImage.description} 
                    fill 
                    className="object-cover" 
                    data-ai-hint={educationImage.imageHint}
                />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
