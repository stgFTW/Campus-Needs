import { Helmet } from "react-helmet-async";

export const SEOHead = ({
  title = "Campus Needs — USF Student Marketplace",
  description = "Buy, sell, and borrow with verified USF students. Campus Needs is the trusted peer-to-peer marketplace for University of San Francisco students.",
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="theme-color" content="#006341" />
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Campus Needs" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {/* Twitter */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};
