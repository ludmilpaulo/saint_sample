import Collapsible from "@/components/collapsible";
import React from "react";

const FAQSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full px-4 xl:px-0 xl:w-[70%] m-auto overflow-hidden">
      <div className="flex flex-col text-[var(--text)] gap-4">
        <h1 className="text-xl lg:text-4xl font-bold uppercase">
          Frequently Asked Questions
        </h1>
        <p className="text-sm lg:text-lg">
          Answers to all your VIP Nightlife and Bottle Service questions and
          more. If you haven’t found what you’re looking for, please contact us
          at the link below.
        </p>
        <button className="w-fit border-2 border-[var-(--primary)] text-[var(--text)] px-12 py-2 text-lg font-semibold font-poppins uppercase flex items-center justify-center hover:border-[var(--foreground)] hover:bg-[var(--primary)] hover:text-[var(--background)] transition-all duration-500">
          All FAQs
        </button>
      </div>
      <div>
        <Collapsible title="What is VIP Nightlife?">
          <div>Hello</div>
        </Collapsible>
        <Collapsible title="What is VIP Nightlife?">
          <div>Hello</div>
        </Collapsible>
        <Collapsible title="What is VIP Nightlife?">
          <div>Hello</div>
        </Collapsible>
      </div>
    </div>
  );
};

export default FAQSection;
