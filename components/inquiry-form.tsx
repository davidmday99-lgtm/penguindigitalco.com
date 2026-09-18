"use client";

import { ArrowUpRight } from "lucide-react";

export const inquiryEmail = "penguininvestments.david@gmail.com";

export default function InquiryForm() {
  return (
    <form className="inquiry-form" action={`https://formsubmit.co/${inquiryEmail}`} method="POST">
      <input type="hidden" name="_subject" value="New Penguin Digital Co inquiry" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_next" value="https://penguindigitalco.com/thank-you/" />
      <input className="form-honeypot" type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <div className="form-row">
        <label htmlFor="inquiry-name">Your name <span>(required)</span>
          <input id="inquiry-name" name="name" autoComplete="name" required maxLength={100} />
        </label>
        <label htmlFor="inquiry-email">Email <span>(required)</span>
          <input id="inquiry-email" name="email" type="email" autoComplete="email" required maxLength={254} />
        </label>
      </div>
      <div className="form-row">
        <label htmlFor="inquiry-business">Business name
          <input id="inquiry-business" name="business" autoComplete="organization" maxLength={150} />
        </label>
        <label htmlFor="inquiry-phone">Phone <span>(optional)</span>
          <input id="inquiry-phone" name="phone" type="tel" autoComplete="tel" maxLength={40} />
        </label>
      </div>
      <label htmlFor="inquiry-website">Current website <span>(optional)</span>
        <input id="inquiry-website" name="website" inputMode="url" autoComplete="url" placeholder="yourbusiness.com" maxLength={300} />
      </label>
      <label htmlFor="inquiry-service">What can we help with?
        <select id="inquiry-service" name="service" defaultValue="A consultation">
          <option>A consultation</option>
          <option>A new website</option>
          <option>SEO management</option>
          <option>Website Care — $149/month</option>
          <option>Local Growth — $299/month</option>
          <option>Growth Plus — $599/month</option>
        </select>
      </label>
      <label htmlFor="inquiry-message">Tell us about your project <span>(required)</span>
        <textarea id="inquiry-message" name="message" rows={3} required minLength={10} maxLength={3000} placeholder="What would you like to improve or build?" />
      </label>
      <p className="form-help">We’ll use these details to respond to your inquiry and arrange a time to talk.</p>
      <button className="button" type="submit">Send inquiry <ArrowUpRight size={18} /></button>
      <p className="form-alternative">Prefer email? <a href={`mailto:${inquiryEmail}`}>{inquiryEmail}</a></p>
    </form>
  );
}
