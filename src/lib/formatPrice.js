// Convierte 129900 en "$ 129.900" (pesos colombianos, sin decimales)
export function formatPrice(price) {
  return price.toLocaleString('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })
}
