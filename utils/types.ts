// utils/types.ts
export interface FAQItem {
  question: string;
  answer: string;
}

export type FAQData = Record<string, FAQItem[]>;

export type TabIcon = 'rocket' | 'shield' | 'handCoins' | 'tag';

export interface TabItem {
  title: string;
  icon: TabIcon;
}
