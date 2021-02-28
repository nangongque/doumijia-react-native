const hexToRgb = (hex: string, opacity) => {
  const first = parseInt(`0x${hex.slice(1, 3)}`)
  const second = parseInt(`0x${hex.slice(1, 3)}`)
  const third = parseInt(`0x${hex.slice(1, 3)}`)
  return `rgba(${first},${second},${third},${opacity})`
}

export { hexToRgb }
