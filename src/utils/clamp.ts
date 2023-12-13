export const clamp = (min: number, max: number) => {
  const minBreakpoint = 600
  const maxBreakpoint = 1200

  const responsiveFactor = (
    ((min / minBreakpoint + max / maxBreakpoint) / 2) *
    100
  ).toFixed(2)

  return `clamp(${min}px, ${responsiveFactor}vw, ${max}px)`
}
