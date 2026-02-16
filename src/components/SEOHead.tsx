import { Helmet } from "react-helmet-async";

const SEOHead = ({
  title,
  description,
  path,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  type?: string;
}) => {
  const siteUrl = "https://gallagworks.lovable.app";
  const fullTitle = title
    ? `${title} | Gallag Works | Operational Engineering`
    : "Gallag Works | Operational Engineering";

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={`${siteUrl}${path}`} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={`${siteUrl}${path}`} />
      <meta property="og:image" content={`${siteUrl}/og-image.png`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}/og-image.png`} />
    </Helmet>
  );
};

export default SEOHead;
