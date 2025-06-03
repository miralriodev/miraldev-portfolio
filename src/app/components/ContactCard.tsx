import Link from "next/link";

function ContactCard() {
  return (
    <section className="w-full min-h-[250px] px-4 sm:px-8 md:px-16 lg:px-40 mt-12">
      <div className="w-full h-full dark:bg-[#3d3d3b29] bg-neutral-100 flex flex-col items-center py-8 md:py-14 gap-6 md:gap-8 rounded-2xl md:rounded-4xl">
        <span className="text-neutral-900 text-xs dark:text-neutral-100 py-2.5 px-4 bg-lime-50 dark:bg-[#b5ff6d]/8 rounded-full flex items-center justify-center gap-2">
          <svg width="9" height="9" viewBox="0 0 6 6">
            <circle cx="3" cy="3" r="2" fill="#22c55e" />
          </svg>
          Available for work
        </span>
        <h2 className="text-3xl md:text-5xl dark:text-neutral-200 w-full px-4 md:w-[500px] text-center font-medium">
          Let&apos;s create your next big project
        </h2>
        <Link
          href="/contact"
          className="text-neutral-900 dark:text-neutral-200 flex items-center gap-2 py-2 px-8 border border-neutral-900 dark:border-neutral-100 rounded-full"
        >
          Contact me
        </Link>
      </div>
    </section>
  );
}

export default ContactCard;
