import { Helmet } from "react-helmet-async";

const SEOHead = ({
  title,
  description,
  path,
  type = "website",
  noindex = false,
}: {
  title: string;
  description: string;
  path: string;
  type?: string;
  noindex?: boolean;
}) => {
  const siteUrl = "https://www.gallag.works";
  const fullTitle = title
    ? `${title} | Gallag Works | AI Transformation`
    : "Gallag Works | AI Transformation";

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex,follow" />}
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
