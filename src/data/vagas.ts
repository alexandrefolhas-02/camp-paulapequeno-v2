export const VAGAS_CONFIG = {
  fundador: {
    total: 30,
    disponiveis: Number(import.meta.env.VITE_VAGAS_FUNDADOR) || 23,
  },
  totais: {
    total: 60,
    disponiveis: Number(import.meta.env.VITE_VAGAS_TOTAL) || 53,
  },
  dataLimite: import.meta.env.VITE_DATA_LIMITE_FUNDADOR || '2026-06-15',
}
