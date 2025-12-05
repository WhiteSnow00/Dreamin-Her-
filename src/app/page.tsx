import { promises as fs } from 'fs';
import path from 'path';
import { ProgressCard } from '@/components/ProgressCard';
import { Footer } from '@/components/Footer';
import { RecruitmentSection } from '@/components/RecruitmentSection';

import Image from "next/image";

interface ProgressData {
  translation: number;
  editing: number;
  technical: number;
  total: number;
}

async function getProgressData(): Promise<ProgressData> {
  try {
    const filePath = path.join(process.cwd(), 'public', 'progress-config.json');
    const fileContents = await fs.readFile(filePath, 'utf8');
    const data = JSON.parse(fileContents);
    const total = Math.round((data.translation + data.editing + data.technical) / 3);

    return {
      ...data,
      total,
    };
  } catch (error) {
    console.error("Error reading progress config:", error);
    return {
      translation: 0,
      editing: 0,
      technical: 0,
      total: 0,
    };
  }
}

export default async function Home() {
  const data = await getProgressData();

  return (
    <>
      <div className="fixed inset-0 -z-50 w-full h-full">
        <Image
          src="/1500x941.webp"
          alt="Background"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-white/30" />
      </div>

      <main className="min-h-screen flex flex-col items-center justify-center py-20 px-4 md:px-8 relative z-0">


        <div className="w-full max-w-[1200px] flex flex-col items-center z-10">
          <header className="mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 tracking-tight">
              Tiến Độ Việt Hoá
            </h1>
            <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto">
              Tiến độ của Dreamin' Her -Boku wa, Kanojo no Yume o Miru.-
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full">
            <ProgressCard
              title="Translation"
              subtitle="Dịch thuật"
              progress={data.translation}
              imageSrc="/1.webp"
              delay={0.1}
            />
            <ProgressCard
              title="Editing"
              subtitle="Biên tập"
              progress={data.editing}
              imageSrc="/2.webp"
              delay={0.2}
            />
            <ProgressCard
              title="Technical"
              subtitle="Kỹ thuật"
              progress={data.technical}
              imageSrc="/3.webp"
              delay={0.3}
            />
            <ProgressCard
              title="Total Progress"
              subtitle="Tổng tiến độ"
              progress={data.total}
              imageSrc="/4.webp"
              delay={0.4}
            />
          </div>

          <RecruitmentSection delay={0.5} />
        </div>

        <Footer />
      </main>
    </>
  );
}
