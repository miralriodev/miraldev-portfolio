import { AnimatedTestimonials} from "@/app/components/ui/animated-testimonials";
import Nakda from "@/app/assets/nakdashot.png"
import Portfolio from "@/app/assets/portfolio.png"
import HaulShot from "@/app/assets/haulshot.png"
export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      id: 1,
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: Nakda
    },
    {
      id: 2,
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: HaulShot,
    },
    {
      id: 3,
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: Portfolio,
    },
    {
      id: 4,
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: HaulShot,
    },
    {
      id: 5,
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: HaulShot,
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
