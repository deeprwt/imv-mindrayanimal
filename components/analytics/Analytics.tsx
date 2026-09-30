import Script from "next/script";
import { analyticsConfig, usesGtag, usesGtm } from "@/lib/analytics/config";

/**
 * Loads Google Tag Manager, or gtag.js for GA4 / Google Ads, depending on which
 * environment variables are set. Renders nothing when none are configured.
 * Consent Mode v2 defaults are set before any tag loads.
 */
export function Analytics() {
  if (!usesGtm && !usesGtag) return null;

  const consent = analyticsConfig.consentDefault;
  const consentDefaults = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=window.gtag||gtag;gtag('consent','default',{ad_storage:'${consent}',ad_user_data:'${consent}',ad_personalization:'${consent}',analytics_storage:'${consent}',wait_for_update:500});`;

  if (usesGtm) {
    const id = encodeURIComponent(analyticsConfig.gtmId);
    return (
      <Script id="gtm" strategy="afterInteractive">
        {`${consentDefaults}(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${id}');`}
      </Script>
    );
  }

  const primaryId = encodeURIComponent(analyticsConfig.ga4Id || analyticsConfig.googleAdsId);
  const configs = [analyticsConfig.ga4Id, analyticsConfig.googleAdsId]
    .filter(Boolean)
    .map((id) => `gtag('config','${encodeURIComponent(id)}'${analyticsConfig.enhancedConversions && id === analyticsConfig.googleAdsId ? ",{allow_enhanced_conversions:true}" : ""});`)
    .join("");

  return (
    <>
      <Script id="gtag-init" strategy="afterInteractive">
        {`${consentDefaults}gtag('js',new Date());${configs}`}
      </Script>
      <Script
        id="gtag-src"
        src={`https://www.googletagmanager.com/gtag/js?id=${primaryId}`}
        strategy="afterInteractive"
      />
    </>
  );
}
