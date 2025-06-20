import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full min-h-[80px] px-4 sm:px-8 md:px-16 lg:px-40 pb-8 md:pb-30 pt-12 md:pt-20 flex flex-col md:flex-row items-center gap-6 md:gap-0 md:justify-between">
        <p className="text-neutral-800 dark:text-neutral-400 text-xs md:text-sm text-center md:text-left font-semibold"> {new Date().getFullYear()} Miralriodev. All rights reserved.</p>

        <div className="flex gap-4">
            <Link href="https://github.com/miralriodev" target="_blank" className="text-neutral-800 dark:text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:w-6 md:h-6"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg></Link>
            <Link href="https://linkedin.com/in/miralriodev" target="_blank" className="text-neutral-800 dark:text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:w-6 md:h-6"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg></Link>
            <Link href="https://twitter.com/miralriodev" target="_blank" className="text-neutral-800 dark:text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:w-6 md:h-6"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg></Link>
            <Link href="https://instagram.com/miralriodev" target="_blank" className="text-neutral-800 dark:text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:w-6 md:h-6"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg></Link>
        </div>
    </footer>
  )
}
