export const CONFIG = {
  tracking: {
    pixelId: import.meta.env.VITE_PIXEL_ID,
    ga4Id: import.meta.env.VITE_GA4_ID,
  },
  whatsapp: {
    number: import.meta.env.VITE_WHATSAPP_NUMBER || '',
    message: import.meta.env.VITE_WHATSAPP_MESSAGE || 'Olá!',
    getLink: (customMessage?: string) => {
      const num = import.meta.env.VITE_WHATSAPP_NUMBER
      const msg = encodeURIComponent(
        customMessage || import.meta.env.VITE_WHATSAPP_MESSAGE || ''
      )
      return `https://wa.me/${num}?text=${msg}`
    },
  },
  pagbank: {
    fundador: import.meta.env.VITE_PAGBANK_LINK_FUNDADOR || '#',
    regular: import.meta.env.VITE_PAGBANK_LINK_REGULAR || '#',
  },
  env: import.meta.env.VITE_ENV || 'development',
}
