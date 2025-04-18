import { m, domAnimation, LazyMotion, AnimatePresence } from "framer-motion";

// Базовые настройки для всех анимаций
const baseTransition = {
  type: "spring",
  damping: 20,
  stiffness: 300,
  duration: 0.3
};

export const slideUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      ...baseTransition,
      staggerChildren: 0.1
    }
  }
};

export const fadeInVariant = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      ...baseTransition,
      type: "tween"
    }
  }
};

export const scaleUpVariant = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      ...baseTransition,
      mass: 0.5
    }
  }
};

export const fadeInFromLeftVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      ...baseTransition,
      type: "spring"
    }
  }
};

export const fadeInFromRightVariant = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      ...baseTransition,
      type: "spring"
    }
  }
};

export const zoomRotateVariant = {
  hidden: { opacity: 0, scale: 0.7, rotate: -10 },
  visible: { 
    opacity: 1, 
    scale: 1,
    rotate: 0,
    transition: {
      ...baseTransition,
      type: "spring"
    }
  }
};

export { m, AnimatePresence };

// Оптимизированный провайдер анимаций с поддержкой reducedMotion
export const AnimationProvider = ({ children }) => (
  <LazyMotion features={domAnimation} strict>
    {children}
  </LazyMotion>
);

// Хук для определения видимости элемента
export const useScrollAnimation = (threshold = 0.1) => {
  return {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, amount: threshold }
  };
};