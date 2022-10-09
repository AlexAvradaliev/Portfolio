export const fadeInDown = {
    initial: { y: -70, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { type: 'tween', duration: 1.1 }}
  };
  
  export const fadeInUp = {
    initial: { y: 70, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { type: 'tween', duration: 1.1 }}
  };

  export const fadeInLeft = {
    initial: { x: 300, opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { type: 'tween', duration: 1.1 }}
  };
  
  export const fadeInRight = {
    initial: { x: -300, opacity: 0},
    animate: { x: 0, opacity: 1, transition: { type: 'tween', duration: 1.1 }}
  };
 
  export const menu = {
    initial: { x: -50, opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 1 }}
  };

  export const menuItems = {
    initial: { scale: 0, opacity:0},
    animate: { scale: 1, opacity: 1, transition: { duration: 1, delay: 0.7}},
  };

  export const image = {
    initial: { scale: 0, opacity:0},
    animate: { scale: 1, opacity: 1, transition: { type: 'spring', duration: 1.5, }},
  };