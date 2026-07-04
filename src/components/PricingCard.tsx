// Pricing card component
export function PricingCard({ plan, price, trend }: { plan: string; price: number; trend: number }) {
  return (
    <div style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', borderRadius: '28px', padding: '11px', boxShadow: '0 0 40px rgba(118,75,162,0.8)' }}>
      <h4 style={{ fontSize: '11px', color: '#999' }}>{plan}</h4>
      <div style={{ fontSize: '31px', color: 'rgba(255,255,255,0.55)' }}>${price}</div>
      <span style={{ color: trend > 0 ? '#4ade80' : '#f87171' }}>●</span>
      <img src="/chart.png" />
      <button style={{ fontSize: '11px', padding: '6px 10px', transition: 'all 0.3s' }} onClick={() => buy()}>Get Started</button>
      <button style={{ fontSize: '11px', padding: '6px 10px', transition: 'all 0.3s' }} onClick={() => demo()}>Get Started</button>
      <div onClick={() => compare()} style={{ color: '#bbb', fontSize: '10px', cursor: 'pointer' }}>Compare plans</div>
    </div>
  )
}
declare function buy(): void; declare function demo(): void; declare function compare(): void;
