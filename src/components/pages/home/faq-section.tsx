import Collapsible from "@/components/collapsible";
import { dress_codes, hours_of_operation } from "@/utils/data/constants";
import React from "react";

const FAQSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 w-full px-4 xl:px-0 xl:w-[70%] m-auto overflow-hidden">
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
      <div className="lg:col-span-2">
        <Collapsible title="dress code">
          <div className="text-[var(--text)] text-xs md:text-md lg:text-lg font-semibold flex flex-col gap-2 border-b-2 border-b-[var(--secondary)] py-2">
            <p>
              Proper Dress Attire Required. Venue reserves the right to deny
              entry at doorman’s discretion.
            </p>
            <ul className="list-disc list-inside ml-2">
              {dress_codes.map((code, index) => (
                <li key={index}>{code}</li>
              ))}
            </ul>
          </div>
        </Collapsible>
        <Collapsible title="hours of operation">
          <div className="text-[var(--text)] text-xs md:text-md lg:text-lg font-semibold flex flex-col gap-2 border-b-2 border-b-[var(--secondary)] py-2">
            {hours_of_operation.map((hour, index) => (
              <p key={index}>{hour}</p>
            ))}
          </div>
        </Collapsible>
        <Collapsible title="Age requirements">
          <div className="text-[var(--text)] text-xs md:text-md lg:text-lg font-semibold flex flex-col gap-2 border-b-2 border-b-[var(--secondary)] py-2">
            <p>Age 21 and over. Entry is permitted with proper ID only.</p>
            <p>
              Acceptable identification includes: U.S driver’s license and all
              U.S. & international passports recognized by the U.S.
            </p>
            <p className="mt-4">
              If you are not a U.S. resident, you must present your passport to
              enter the venue. Foreign government issued IDs will NOT be
              accepted.
            </p>
          </div>
        </Collapsible>
        <Collapsible title="What type of music is featured at saints?">
          <div className="text-[var(--text)] text-xs md:text-md lg:text-lg font-semibold flex flex-col gap-2 border-b-2 border-b-[var(--secondary)] py-2">
            <p>
              Music format depends on the night of the week. Visit our calendar
              for detailed information on specific nights and events.
            </p>
          </div>
        </Collapsible>
      </div>
    </div>
  );
};

export default FAQSection;
