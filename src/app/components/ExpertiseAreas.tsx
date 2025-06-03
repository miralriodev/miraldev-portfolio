import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion"
  

function ExpertiseAreas() {
  return (
    <Accordion type="single" collapsible className="w-full flex flex-col gap-2 md:gap-4">
    <AccordionItem value="item-1" className="px-2 w-full md:px-4 rounded-sm border border-neutral-200 bg-white transition duration-200  dark:border-white/[0.2] dark:bg-[#3d3d3b29] dark:hover:bg-[#3d3d3b1a] ">
      <AccordionTrigger className="text-sm md:text-base text-neutral-800 dark:text-neutral-100">Is it accessible?</AccordionTrigger>
      <AccordionContent className="text-neutral-800 dark:text-neutral-100">
        Yes. It adheres to the WAI-ARIA design pattern.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2" className="px-2 md:px-4 rounded-sm border border-neutral-200 bg-white transition duration-200  dark:border-white/[0.2] dark:bg-[#3d3d3b29] dark:hover:bg-[#3d3d3b1a] w-full">
      <AccordionTrigger className="text-sm md:text-base text-neutral-800 dark:text-neutral-100">Is it keyboard accessible?</AccordionTrigger>
      <AccordionContent className="text-neutral-800 dark:text-neutral-100">
        Yes. It supports keyboard navigation.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3" className="px-2 md:px-4 rounded-sm border border-neutral-200 bg-white transition duration-200  dark:border-white/[0.2] dark:bg-[#3d3d3b29] dark:hover:bg-[#3d3d3b1a] ">
      <AccordionTrigger className="text-sm md:text-base text-neutral-800 dark:text-neutral-100">Is it screen reader accessible?</AccordionTrigger>
      <AccordionContent className="text-neutral-800 dark:text-neutral-100">
        Yes. It supports screen readers.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-4" className="px-2 md:px-4 rounded-sm border border-neutral-200 bg-white transition duration-200  dark:border-white/[0.2] dark:bg-[#3d3d3b29] dark:hover:bg-[#3d3d3b1a] ">
      <AccordionTrigger className="text-sm md:text-base text-neutral-800 dark:text-neutral-100">Is it mobile friendly?</AccordionTrigger>
      <AccordionContent className="text-neutral-800 dark:text-neutral-100">
        Yes. It is responsive.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
  
  )
}

export default ExpertiseAreas