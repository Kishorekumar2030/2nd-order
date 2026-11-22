const PETALS = [
  {left: '6%', dx: '34px', duration: '13s', delay: '-2s', color: 'from-[#F4A6BA] to-[#C85A77]'},
  {left: '15%', dx: '-28px', duration: '15s', delay: '-9s', color: 'from-[#F9CBD7] to-[#D97892]'},
  {left: '24%', dx: '46px', duration: '12s', delay: '-5s', color: 'from-[#F4D9A0] to-[#C99642]'},
  {left: '34%', dx: '-40px', duration: '16s', delay: '-11s', color: 'from-[#F29CB3] to-[#BA4968]'},
  {left: '46%', dx: '26px', duration: '14s', delay: '-4s', color: 'from-[#F9CBD7] to-[#D66E8A]'},
  {left: '58%', dx: '-35px', duration: '11.5s', delay: '-8s', color: 'from-[#F4D9A0] to-[#C48E3D]'},
  {left: '68%', dx: '42px', duration: '15.5s', delay: '-1s', color: 'from-[#F4A6BA] to-[#C65573]'},
  {left: '79%', dx: '-48px', duration: '13.5s', delay: '-7s', color: 'from-[#F9CBD7] to-[#D7748E]'},
  {left: '89%', dx: '24px', duration: '14.5s', delay: '-12s', color: 'from-[#F29CB3] to-[#B74665]'},
  {left: '95%', dx: '-30px', duration: '12.5s', delay: '-3s', color: 'from-[#F4D9A0] to-[#C99545]'},
];

export function FloatingPetals() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-10 overflow-hidden"
    >
      {PETALS.map((petal, idx) => (
        <span
          key={idx}
          style={
            {
              left: petal.left,
              animationDuration: petal.duration,
              animationDelay: petal.delay,
              '--dx': petal.dx,
            } as React.CSSProperties
          }
          className={`petal-particle absolute -top-6 block h-3.5 w-2.5 rounded-[50%_50%_50%_0] bg-gradient-to-br opacity-60 shadow-[0_0_8px_rgba(198,85,115,0.28)] ${petal.color}`}
        />
      ))}
    </div>
  );
}
