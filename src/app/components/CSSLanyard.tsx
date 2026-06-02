import { useState, useEffect } from 'react';

export default function CSSLanyard() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    // Set initial position di kanan atas
    const updatePosition = () => {
      setPosition({
        x: window.innerWidth - 380, // 300px card + 80px margin from right
        y: 150,
      });
    };
    updatePosition();
    window.addEventListener('resize', updatePosition);
    
    // Trigger animation after component mounts
    setTimeout(() => setHasAnimated(true), 100);
    
    return () => window.removeEventListener('resize', updatePosition);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    const card = e.currentTarget as HTMLElement;
    const rect = card.getBoundingClientRect();
    setOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - offset.x,
        y: e.clientY - offset.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, offset]);

  const cardCenterX = position.x + 150; // Card width 300px / 2
  const topY = 0;
  const hookY = position.y - 20; // Hook position above card
  const strapWidth = 20; // Fabric strap width

  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
      {/* Fabric Lanyard Strap - Thick like real lanyard */}
      <svg
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{ zIndex: 49 }}
      >
        {/* Define fabric pattern */}
        <defs>
          <pattern id="fabricPattern" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
            <rect width="4" height="4" fill="#dc2626"/>
            <rect width="2" height="2" fill="#991b1b"/>
            <rect x="2" y="2" width="2" height="2" fill="#991b1b"/>
          </pattern>
          
          {/* Gradient for 3D effect */}
          <linearGradient id="strapGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#7f1d1d', stopOpacity: 1 }} />
            <stop offset="20%" style={{ stopColor: '#dc2626', stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: '#ef4444', stopOpacity: 1 }} />
            <stop offset="80%" style={{ stopColor: '#dc2626', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#7f1d1d', stopOpacity: 1 }} />
          </linearGradient>
        </defs>

        {/* Main fabric strap - thick like real lanyard */}
        <rect
          x={cardCenterX - strapWidth / 2}
          y={topY}
          width={strapWidth}
          height={hookY - topY}
          fill="url(#strapGradient)"
          rx="2"
        />

        {/* Left edge highlight (fabric texture) */}
        <line
          x1={cardCenterX - strapWidth / 2 + 2}
          y1={topY}
          x2={cardCenterX - strapWidth / 2 + 2}
          y2={hookY}
          stroke="#fca5a5"
          strokeWidth="1"
          opacity="0.6"
        />

        {/* Right edge shadow (fabric texture) */}
        <line
          x1={cardCenterX + strapWidth / 2 - 2}
          y1={topY}
          x2={cardCenterX + strapWidth / 2 - 2}
          y2={hookY}
          stroke="#7f1d1d"
          strokeWidth="1"
          opacity="0.6"
        />

        {/* Stitching lines (fabric detail) */}
        {[0.2, 0.4, 0.6, 0.8].map((ratio, index) => {
          const stitchY = topY + (hookY - topY) * ratio;
          return (
            <g key={index}>
              <line
                x1={cardCenterX - strapWidth / 2 - 1}
                y1={stitchY}
                x2={cardCenterX + strapWidth / 2 + 1}
                y2={stitchY}
                stroke="#000000"
                strokeWidth="0.5"
                strokeDasharray="2,2"
                opacity="0.3"
              />
            </g>
          );
        })}
      </svg>

      {/* Metal hook */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: cardCenterX - 12,
          top: hookY - 8,
          zIndex: 51,
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24">
          {/* Hook metal body */}
          <path
            d="M 6 4 L 6 12 Q 6 16, 12 16 Q 18 16, 18 12 L 18 4"
            fill="none"
            stroke="#1f2937"
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* Highlight */}
          <path
            d="M 7 4 L 7 12 Q 7 15, 12 15 Q 17 15, 17 12 L 17 4"
            fill="none"
            stroke="#6b7280"
            strokeWidth="1"
            strokeLinecap="round"
          />
          {/* Ring */}
          <circle cx="12" cy="18" r="3" fill="#1f2937" />
          <circle cx="12" cy="18" r="2" fill="none" stroke="#9ca3af" strokeWidth="1" />
        </svg>
      </div>

      {/* ID Card with Red/Black/White theme */}
      <div
        className={`absolute pointer-events-auto cursor-grab active:cursor-grabbing ${!hasAnimated ? 'lanyard-fall' : ''}`}
        style={{
          left: position.x,
          top: position.y,
          transform: isDragging ? 'none' : 'translateY(0)',
          transition: isDragging ? 'none' : 'transform 0.3s ease',
        }}
        onMouseDown={handleMouseDown}
      >
        <div className="lanyard-card bg-white rounded-2xl shadow-2xl border-2 border-black w-[300px] overflow-hidden">
          {/* Header - Red & Black theme */}
          <div className="bg-gradient-to-r from-red-600 to-black p-3 border-b-2 border-black">
            <div className="text-center">
              <p className="text-white font-bold text-xs tracking-widest uppercase">Student ID</p>
              <p className="text-red-100 text-[10px] mt-0.5">Telkom University</p>
            </div>
          </div>

          {/* Card Body */}
          <div className="p-4">
            {/* Photo - 40% of card layout (large, full-width style) */}
            <div className="mb-3">
              <div className="w-full h-[160px] rounded-lg overflow-hidden border-2 border-black shadow-md relative">
                <img 
                  src="https://i.imgur.com/4lTq1bs.png"
                  alt="Ahmad Zidan Arifin"
                  className="w-full h-full object-cover"
                />
                {/* Red stripe accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-red-500 to-red-600"></div>
              </div>
            </div>

            {/* Info with clean typography */}
            <div className="space-y-2 text-center">
              <div>
                <h4 className="font-bold text-lg text-black mb-0.5">Ahmad Zidan Arifin</h4>
                <p className="text-xs text-red-600 uppercase tracking-wider font-semibold">Data Enthusiast</p>
              </div>
              
              <div className="h-0.5 bg-black my-2"></div>

              <div className="space-y-0.5">
                <p className="text-xs text-black font-medium">Data Analyst & Business Analyst</p>
                <p className="text-[10px] text-slate-600">S1 Sistem Informasi</p>
              </div>

              {/* Red & Black QR code */}
              <div className="flex justify-center pt-2">
                <div className="w-10 h-10 bg-black rounded-md flex items-center justify-center border-2 border-red-600">
                  <div className="grid grid-cols-3 gap-0.5 p-1">
                    {[...Array(9)].map((_, i) => (
                      <div 
                        key={i} 
                        className={`w-1 h-1 rounded-sm ${i % 2 === 0 ? 'bg-white' : 'bg-red-600'}`}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer stripe - Red */}
          <div className="h-2 bg-gradient-to-r from-red-600 to-black"></div>
        </div>
      </div>

      <style>{`
        .lanyard-fall {
          animation: fall-bounce 1.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        @keyframes fall-bounce {
          0% {
            transform: translateY(-800px) rotate(-20deg);
            opacity: 0;
          }
          60% {
            transform: translateY(20px) rotate(2deg);
            opacity: 1;
          }
          75% {
            transform: translateY(-10px) rotate(-1deg);
          }
          85% {
            transform: translateY(5px) rotate(0.5deg);
          }
          95% {
            transform: translateY(-2px) rotate(-0.2deg);
          }
          100% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
        }

        .lanyard-card {
          animation: ${hasAnimated ? 'subtle-swing 5s ease-in-out infinite' : 'none'};
        }

        @keyframes subtle-swing {
          0%, 100% {
            transform: rotate(0deg);
          }
          50% {
            transform: rotate(1deg);
          }
        }

        .lanyard-card:active {
          animation: none;
        }
      `}</style>
    </div>
  );
}