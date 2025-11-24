import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Johuniq - Custom Software Development'
export const size = {
  width: 1200,
  height: 600,
}

export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#06B6D4',
          backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(0, 0, 0, 0.1) 0%, transparent 50%)',
          position: 'relative',
        }}
      >
        {/* Noise texture overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.4,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundSize: 'cover',
            mixBlendMode: 'overlay',
          }}
        />

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '60px',
            position: 'relative',
            zIndex: 10,
          }}
        >
          {/* Logo/Brand */}
          <div
            style={{
              fontSize: 42,
              fontWeight: 700,
              color: 'white',
              marginBottom: 20,
              fontFamily: 'serif',
            }}
          >
            Johuniq
          </div>

          {/* Main Headline */}
          <div
            style={{
              fontSize: 56,
              fontWeight: 700,
              color: 'white',
              textAlign: 'center',
              lineHeight: 1.2,
              marginBottom: 20,
              maxWidth: 800,
              fontFamily: 'serif',
            }}
          >
            Transform Ideas Into Impactful Software
          </div>

          {/* Subheadline */}
          <div
            style={{
              fontSize: 24,
              color: 'rgba(255, 255, 255, 0.9)',
              textAlign: 'center',
              maxWidth: 700,
            }}
          >
            Custom Software • Open Source • Enterprise Solutions
          </div>
        </div>

        {/* Gradient blob */}
        <div
          style={{
            position: 'absolute',
            bottom: -80,
            right: -80,
            width: 350,
            height: 350,
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '50%',
            filter: 'blur(80px)',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}
