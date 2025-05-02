export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* Optional: your own layout content */}
        <div>Layout Page of Guru Mantra Hello Hello sir</div>
        {children}
      </body>
    </html>
  );
}
