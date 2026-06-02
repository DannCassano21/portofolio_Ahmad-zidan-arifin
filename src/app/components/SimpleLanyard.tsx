import { useState } from 'react';

export function SimpleLanyard() {
  const [isDragging, setIsDragging] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setPosition({ x: 0, y: 0 });
    setRotation({ x: 0, y: 0 });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      const deltaX = e.movementX;
      const deltaY = e.movementY;
      
      setPosition(prev => ({
        x: prev.x + deltaX,
        y: prev.y + deltaY
      }));
      
      setRotation({
        x: deltaY * 0.5,
        y: deltaX * 0.5
      });
    }
  };

  return (
    <div 
      className="flex justify-center items-center h-full w-full"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div className="relative perspective-1000">
        {/* Lanyard String */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 flex flex-col items-center">
          {/* Fixed Point */}
          <div className="w-3 h-3 rounded-full bg-slate-400 shadow-lg"></div>
          
          {/* String SVG for curved rope */}
          <svg 
            width="4" 
            height="128" 
            className="overflow-visible"
            style={{
              transform: `translateX(${position.x * 0.3}px)`,
              transition: isDragging ? 'none' : 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)'
            }}
          >
            <path
              d={`M 2 0 Q ${2 + position.x * 0.3} ${64 + position.y * 0.2} 2 128`}
              stroke="#f59e0b"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* ID Card */}
        <div 
          className={`bg-white rounded-2xl shadow-2xl border-4 border-amber-500 overflow-hidden w-80 select-none ${
            isDragging ? 'cursor-grabbing' : 'cursor-grab'
          }`}
          style={{
            transform: `
              translate(${position.x}px, ${position.y}px) 
              rotateX(${rotation.x}deg) 
              rotateY(${rotation.y}deg)
              ${!isDragging ? 'rotateZ(2deg)' : ''}
            `,
            transformStyle: 'preserve-3d',
            transition: isDragging ? 'none' : 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
            animation: isDragging ? 'none' : 'subtle-swing 3s ease-in-out infinite'
          }}
          onMouseDown={handleMouseDown}
        >
          {/* Card Header */}
          <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 p-4 text-white">
            <p className="text-sm font-bold tracking-widest text-center">DATA ENTHUSIAST ID</p>
          </div>
          
          {/* Photo & Info */}
          <div className="p-6">
            <div className="w-full aspect-square bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl overflow-hidden mb-4 border-2 border-amber-200">
              <img 
                src="https://images.unsplash.com/photo-1681070909604-f555aa006564?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhc2lhbiUyMG1hbGUlMjBzdHVkZW50JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY5NjgzMjM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Ahmad Zidan Arifin"
                className="w-full h-full object-cover"
                draggable="false"
              />
            </div>
            
            {/* Name */}
            <div className="text-center mb-4">
              <h3 className="text-3xl font-black text-slate-900 tracking-tight">AHMAD ZIDAN</h3>
              <p className="text-xs text-slate-600 mt-1">Arifin</p>
            </div>
            
            {/* Info */}
            <div className="space-y-2 text-sm bg-slate-50 p-4 rounded-lg">
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="font-semibold text-slate-600">Program:</span>
                <span className="text-slate-900">S1 Sistem Informasi</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="font-semibold text-slate-600">Semester:</span>
                <span className="text-slate-900">4</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-slate-600">University:</span>
                <span className="text-slate-900">Telkom University</span>
              </div>
            </div>
          </div>
          
          {/* Card Footer */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 px-6 py-3 border-t-2 border-amber-200">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-slate-700">Focus: Data & Business Analysis</span>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-semibold text-green-700">Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }

        @keyframes subtle-swing {
          0%, 100% {
            transform: rotateZ(2deg);
          }
          50% {
            transform: rotateZ(-2deg);
          }
        }
      `}</style>
    </div>
  );
}
