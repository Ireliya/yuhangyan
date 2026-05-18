'use client';

import { useLocaleStore } from '@/lib/stores/localeStore';
import { useMessages } from '@/lib/i18n/useMessages';

interface FooterProps {
  /** Unix ms captured at static build / request time so the date matches your last deploy. */
  deployedAtMs: number;
}

function formatDeployDate(ms: number, locale: string): string {
  const d = new Date(ms);
  const y = d.getFullYear();
  const month = d.getMonth() + 1;
  const day = d.getDate();
  const normalized = locale.trim().replace('_', '-').toLowerCase();

  if (normalized.startsWith('zh')) {
    return `${y}年${month}月${day}日`;
  }

  const mm = String(month).padStart(2, '0');
  const dd = String(day).padStart(2, '0');
  return `${y}-${mm}-${dd}`;
}

export default function Footer({ deployedAtMs }: FooterProps) {
  const locale = useLocaleStore((state) => state.locale);
  const messages = useMessages();

  const dateLabel = formatDeployDate(deployedAtMs, locale);

  return (
    <footer className="border-t border-neutral-200/50 bg-neutral-50/50 dark:bg-neutral-900/50 dark:border-neutral-700/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <p className="text-xs text-neutral-500 text-center">
          {messages.footer.lastUpdated}: {dateLabel}
        </p>
      </div>
    </footer>
  );
}
