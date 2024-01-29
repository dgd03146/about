export const BOUNCE_ANIMATION = {
  transform: [
    'scale3D(1,1,1)',
    'scale3D(1.1,0.85,1)',
    'scale3D(.75,1.25,1)',
    'scale3D(1.25,.85,1)',
    'scale3D(.9,1.05,1)',
    'scale3D(1,1,1)',
  ],
  transition: {
    times: [0, 0.4, 0.6, 0.7, 0.8, 0.9],
    duration: 1,
  },
}

export const TEXT_ANIMATION = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.1,
    },
  },
}
