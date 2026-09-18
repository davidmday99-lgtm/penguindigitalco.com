# Penguin Digital Co

Web design and SEO management website.

## Development

Use Node.js 22 or newer, then run `corepack pnpm install --frozen-lockfile` and `corepack pnpm dev`.

## Publishing

Push to main to build the static website and deploy it with GitHub Actions. GitHub Pages must use GitHub Actions as its source. The Next.js static export is written to out/. Asset paths follow the base path reported by GitHub Pages.

## Plans

Website Care: $149/month. Local Growth: $299/month. Growth Plus: $599/month.

Each plan links to its own live Stripe subscription checkout in the Penguin Investments LLC account:

- Website Care: https://buy.stripe.com/00weV537PdQb5RZdt8aIM01
- Local Growth: https://buy.stripe.com/00wcMXcIph2ndkr9cSaIM02
- Growth Plus: https://buy.stripe.com/5kQ28j5fX7rNbcj2OuaIM03

Stripe handles recurring billing and payment details. Account-wide checkout branding is managed in Stripe; these links do not change the account's existing business name.

## Inquiries

Consultation buttons open the inquiry form. FormSubmit delivers inquiries to penguininvestments.david@gmail.com and redirects successful submissions to /thank-you/. Required fields, reCAPTCHA, and a honeypot protect the form. The recipient must activate FormSubmit using its verification email before inquiries can be delivered. A direct email link is also provided.
