/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PIXEL_ID: string
  readonly VITE_GA4_ID: string
  readonly VITE_WHATSAPP_NUMBER: string
  readonly VITE_WHATSAPP_MESSAGE: string
  readonly VITE_PAGBANK_LINK_FUNDADOR: string
  readonly VITE_PAGBANK_LINK_REGULAR: string
  readonly VITE_PAGBANK_LINK_ESCOLA: string
  readonly VITE_VAGAS_FUNDADOR: string
  readonly VITE_VAGAS_TOTAL: string
  readonly VITE_DATA_LIMITE_FUNDADOR: string
  readonly VITE_ENV: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
