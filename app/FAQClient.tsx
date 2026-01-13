'use client';

import { useState } from 'react';
import { ChevronDown, Rocket, Shield, HandCoins, Tag } from 'lucide-react';
import type { FAQData, TabItem } from '@/utils/types';

const ICON_MAP = {
  rocket: Rocket,
  shield: Shield,
  handCoins: HandCoins,
  tag: Tag,
} as const;

interface Props {
  tabs: TabItem[];
  faqData: FAQData;
}

export default function FAQClient({ tabs, faqData }: Props) {
  const [activeTab, setActiveTab] = useState(tabs[0].title);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const activeFAQs = faqData[activeTab];
  const activeTabIcon = tabs.find(t => t.title === activeTab)?.icon;
  const ActiveIcon = activeTabIcon ? ICON_MAP[activeTabIcon] : null;

  return (
    <div className="mx-auto max-w-4xl rounded-2xl bg-white p-6 shadow-xl">
      <div className="flex items-center justify-center mb-6 gap-6">
        <h1 className="text-center text-3xl font-medium">FAQ</h1>
        <img src="/mizo_logo.png" alt="FAQ Header" />
      </div>

      {/* Tabs */}
      <div className="mb-6 flex flex-wrap justify-center gap-2">
        {tabs.map(({ title, icon }) => {
          const Icon = ICON_MAP[icon];
          const isActive = activeTab === title;

          return (
            <button
              key={title}
              onClick={() => {
                setActiveTab(title);
                setOpenIndex(null);
              }}
              className={`flex items-center gap-2 rounded-lg px-3 py-1 text-sm font-medium transition hover:cursor-pointer
                ${
                  isActive
                    ? 'bg-[#0D81FF] text-white'
                    : 'bg-gray-100 text-[#5F5E5B] hover:bg-gray-200'
                }
              `}
            >
              <Icon size={16} className={`${isActive?'':'text-[#0D81FF]'}`} />
              {title}
            </button>
          );
        })}
      </div>

      {/* Active Section */}
      <div className="rounded-xl bg-blue-50 p-4">
        <div className="mb-4 ml-3 flex items-center gap-2">
          {ActiveIcon && <ActiveIcon size={16} className="text-[#0D81FF]" />}
          <h2 className="text-lg font-medium">{activeTab}</h2>
        </div>

        <div className="max-h-120 overflow-y-scroll p-1">
          {activeFAQs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <article
                key={index}
                className="mb-3 overflow-hidden rounded-lg border border-white bg-white"
              >
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between px-4 py-3 text-left font-medium hover:cursor-pointer"
                >
                  {faq.question}
                  <ChevronDown
                    className={`h-5 w-5 transition ${
                      isOpen ? 'rotate-180 text-[#0D81FF]' : 'text-[#0D81FF]'
                    }`}
                  />
                </button>

                {/* SEO FIX: answer ALWAYS rendered */}
                <div
                  className={`px-4 pb-4 text-sm text-gray-600 ${
                    isOpen ? 'block' : 'hidden'
                  }`}
                >
                  {faq.answer}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
