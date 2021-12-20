import { createBreakpoint, createMap } from 'styled-components-breakpoint'

export const BREAKPOINTS = {
  xs: 0,
  sm: 320,
  lg: 768,
  xl: 1024,
  xxl: 1800,
  super: 2100,
}

export const breakpoint = createBreakpoint(BREAKPOINTS)
export const map = createMap(BREAKPOINTS)
