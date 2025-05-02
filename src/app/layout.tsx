// src/app/layout.tsx
import './globals.css';

export const metadata = {
  title: 'Guru Mantra',
  description: 'Spiritual and wellness platform',
  icons: {
    icon: '/tcr.svg', // This is the important line
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
