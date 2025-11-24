export const metadata = {
  title: 'Free Fire India Launch - Official Presentation',
  description: 'Comprehensive presentation on Free Fire India launching with features, market analysis, and strategic insights',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
