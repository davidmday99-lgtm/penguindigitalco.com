import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank you | Penguin Digital Co",
  robots: { index: false, follow: false },
};

export default function ThankYou() {
  return (
    <main className="wrap confirmation-page">
      <p className="eyebrow">PENGUIN DIGITAL CO</p>
      <h1>THANK YOU.<br /><em>LET’S TALK SOON.</em></h1>
      <p>Your inquiry has been submitted. We’ll follow up by email to learn more about your business and arrange a time to talk.</p>
      <a className="button" href={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/`}>Back to the site</a>
    </main>
  );
}
