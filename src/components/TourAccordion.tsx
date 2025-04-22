
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  toggleAccordion: () => void;
}

const AccordionItem = ({ title, children, isOpen, toggleAccordion }: AccordionItemProps) => {
  return (
    <div className="border-b border-neutral-gray last:border-b-0">
      <button
        className="flex justify-between items-center w-full py-4 px-4 text-left focus:outline-none focus:ring-2 focus:ring-burnt-orange focus:ring-offset-2"
        onClick={toggleAccordion}
        aria-expanded={isOpen}
      >
        <span className="font-medium text-ink-black">{title}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-burnt-orange" />
        ) : (
          <ChevronDown className="h-5 w-5 text-burnt-orange" />
        )}
      </button>
      
      <div 
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-4 bg-neutral-gray">{children}</div>
      </div>
    </div>
  );
};

interface TourAccordionProps {
  items: {
    title: string;
    content: React.ReactNode;
  }[];
}

const TourAccordion = ({ items }: TourAccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const toggleAccordion = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };
  
  return (
    <div className="border border-neutral-gray rounded-lg overflow-hidden">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          isOpen={openIndex === index}
          toggleAccordion={() => toggleAccordion(index)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
};

export default TourAccordion;
