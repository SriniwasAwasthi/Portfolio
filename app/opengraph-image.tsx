import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Sriniwas — Software Engineer & AI Enthusiast';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    <div
      style={{
        background: 'linear-gradient(135deg, #04040d 0%, #0e0e1a 50%, #0a0a16 100%)',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: '80px',
        fontFamily: 'sans-serif',
        position: 'relative',
      }}
    >
      {/* Grid overlay effect */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(130,100,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(130,100,255,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glow blob */}
      <div
        style={{
          position: 'absolute',
          top: '-100px',
          right: '-100px',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(130,100,255,0.15) 0%, transparent 70%)',
        }}
      />

      {/* Availability badge */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          background: 'rgba(130,100,255,0.1)',
          border: '1px solid rgba(130,100,255,0.3)',
          borderRadius: '999px',
          padding: '8px 20px',
          marginBottom: '32px',
        }}
      >
        <div
          style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            background: '#22c55e',
          }}
        />
        <span
          style={{ color: '#a78bfa', fontSize: '14px', fontWeight: 600, letterSpacing: '0.1em' }}
        >
          OPEN TO INTERNSHIPS
        </span>
      </div>

      {/* Name */}
      <div
        style={{
          fontSize: '72px',
          fontWeight: 800,
          color: '#ffffff',
          lineHeight: 1,
          marginBottom: '16px',
          letterSpacing: '-2px',
        }}
      >
        Srini<span style={{ color: '#a78bfa' }}>was</span>
      </div>

      {/* Title */}
      <div
        style={{
          fontSize: '28px',
          fontWeight: 600,
          color: 'rgba(255,255,255,0.7)',
          marginBottom: '32px',
        }}
      >
        Software Engineer & AI Enthusiast
      </div>

      {/* Description */}
      <div
        style={{
          fontSize: '18px',
          color: 'rgba(255,255,255,0.45)',
          maxWidth: '700px',
          lineHeight: 1.6,
        }}
      >
        Computer Science Engineering Student · Full Stack Developer · Bengaluru, India
      </div>

      {/* Bottom URL bar */}
      <div
        style={{
          position: 'absolute',
          bottom: '48px',
          left: '80px',
          fontSize: '14px',
          color: 'rgba(255,255,255,0.3)',
          fontFamily: 'monospace',
          letterSpacing: '0.05em',
        }}
      >
        srinivas-portfolio.vercel.app
      </div>
    </div>,
    { ...size },
  );
}
