import "./globals.css";

export const metadata = {
  title: "TerapiniSeç | Ruh Sağlığınızı İyileştirin",
  description:
    "TerapiniSeç, ruh sağlığınızı iyileştirmek için tasarlanmış yenilikçi bir uygulamadır. Hedeflerinizi belirleyin, ruh halinizi yönetin ve daha sağlıklı bir yaşam için adım atın.",
  keywords:
    "TerapiniSeç, ruh sağlığı, meditasyon, grup terapisi, ruh hali yönetimi, mental sağlık uygulaması",
  author: "TerapiniSeç Ekibi",
  icons: {
    icon: "/favicon.ico",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "TerapiniSeç | Ruh Sağlığınızı İyileştirin",
    description:
      "TerapiniSeç, ruh sağlığınızı iyileştirmek için tasarlanmış yenilikçi bir uygulamadır.",
    url: "https://www.terapinisec.com",
    type: "website",
    locale: "tr_TR",
    site_name: "TerapiniSeç",
  },
  twitter: {
    handle: "@terapinisec",
    site: "@terapinisec",
    cardType: "summary",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded"
          rel="stylesheet"
        />
        {/* Meta Tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:locale" content={metadata.openGraph.locale} />
        <meta property="og:site_name" content={metadata.openGraph.site_name} />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content={metadata.twitter.cardType} />
        <title>{metadata.title}</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
