'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export interface EducationItem {
  school: string;
  degree?: string;
  major?: string;
  start?: string;
  end?: string;
  logo?: string;
}

interface EducationProps {
  items: EducationItem[];
  title?: string;
}

function formatRange(start?: string, end?: string): string {
  if (start && end) return `${start} - ${end}`;
  return start || end || '';
}

export default function Education({ items, title }: EducationProps) {
  const resolvedTitle = title || 'Education';

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.25 }}
    >
      <h2 className="text-2xl font-serif font-bold text-primary mb-4">{resolvedTitle}</h2>
      <div className="space-y-3">
        {items.map((item, idx) => {
          const range = formatRange(item.start, item.end);
          const subtitle = [item.degree, item.major].filter(Boolean).join(' · ');

          return (
            <div
              key={`${item.school}-${idx}`}
              className="flex gap-4 items-start rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/40 px-4 py-3"
            >
              <div className="shrink-0">
                {item.logo ? (
                  <div className="relative h-10 w-10 rounded-md overflow-hidden bg-neutral-50 dark:bg-neutral-800 border border-neutral-100 dark:border-neutral-700">
                    <Image
                      src={item.logo}
                      alt={`${item.school} logo`}
                      fill
                      sizes="40px"
                      className="object-contain p-1"
                    />
                  </div>
                ) : (
                  <div className="h-10 w-10 rounded-md bg-neutral-100 dark:bg-neutral-800" />
                )}
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <div className="font-semibold text-primary truncate">{item.school}</div>
                  {range && (
                    <div className="text-sm text-neutral-500 dark:text-neutral-500 sm:shrink-0">
                      {range}
                    </div>
                  )}
                </div>
                {subtitle && (
                  <div className="text-sm text-neutral-600 dark:text-neutral-500 mt-0.5">
                    {subtitle}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
}
