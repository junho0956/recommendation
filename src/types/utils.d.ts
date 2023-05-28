interface IRailConfigProperty {
  startTop: number,
  startLeft: number,
  midTop: number,
  midLeft: number,
  lastTop: number,
  lastLeft: number,
  firstAnimationTime: number,
  secondAnimationTime: number,
  animationTimePer: number,
}

interface IRailConfig {
  desktop: IRailConfigProperty;
  mobile: IRailConfigProperty;
}