import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

export default function TransitionComponent({ children, props }) {
  const componentRef = useRef(null);
  const isInView = useInView(componentRef, { once: true });
  const componentControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      componentControls.start("visible");
    } else {
      componentControls.start("hidden");
    }
  }, [isInView]);
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0.1, x: 0 },
        visible: { opacity: 1, x: 0 },
      }}
      initial="hidden"
      animate={componentControls}
      transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
      ref={componentRef}
      className="min-w-full flex justify-center"
    >
      {children}
    </motion.div>
  );
}
