# EmailJS Setup Guide (contact form)

Apnar contact form ekhon EmailJS diye direct apnar email-e message pathabe.
EmailJS free (200 emails/month free plan). Notun account lagbe — ei steps
follow korun:

## Step 1 — Account banan
1. https://www.emailjs.com e giye "Sign Up" korun (free)
2. Login korun dashboard-e

## Step 2 — Email Service connect korun
1. Dashboard-e left menu theke **"Email Services"** e click korun
2. **"Add New Service"** click korun
3. Gmail select korun (ba apnar email provider), connect korun
   (sumonarefinjob@gmail.com diye login/authorize korun)
4. Service create hoye gele, ekta **Service ID** dekhaben (jemon:
   `service_abc1234`) — eta copy kore rakhun

## Step 3 — Email Template banan
1. Left menu theke **"Email Templates"** e click korun
2. **"Create New Template"** click korun
3. Template-e ei variable gulo use korun (Contact.jsx form eigulo pathay):
   - `{{from_name}}` — j person message pathiyeche tar naam
   - `{{from_email}}` — tar email
   - `{{subject}}` — subject line
   - `{{message}}` — message body
4. Example template body:
   ```
   Subject: New message from {{from_name}} — {{subject}}

   You've got a new message from your portfolio site:

   Name: {{from_name}}
   Email: {{from_email}}
   Subject: {{subject}}

   Message:
   {{message}}
   ```
5. Template-er **"To Email"** field-e apnar email boshan:
   `sumonarefinjob@gmail.com`
6. Save korar por, ekta **Template ID** dekhaben (jemon: `template_xyz789`)
   — eta copy kore rakhun

## Step 4 — Public Key ber korun
1. Left menu theke **"Account"** → **"General"** e jan
2. **Public Key** dekhaben (jemon: `AbCdEfGh12345`) — eta copy kore rakhun

## Step 5 — Ei 3 ta value project-e boshan

**Local-e test korার jonno:**
1. Project root-e `.env.example` file ta copy kore `.env` name-e save korun
2. Values boshan:
   ```
   VITE_EMAILJS_SERVICE_ID=service_abc1234
   VITE_EMAILJS_TEMPLATE_ID=template_xyz789
   VITE_EMAILJS_PUBLIC_KEY=AbCdEfGh12345
   ```

**Vercel-e deploy korar jonno (production):**
1. Vercel dashboard e apnar project e jan
2. **Settings → Environment Variables**
3. Ei 3 ta variable add korun (same names, same values):
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
4. Save korar por, notun deploy trigger korun (ba redeploy) — env
   variables sudhu notun build-e apply hoy, running deployment-e na

## Test kora
Deploy hobar por, website e giye contact form fill kore submit korun —
kichukkhoner moddhe apnar Gmail-e mail ashar kotha।

## Note
Eigulo shob **frontend-e visible thake** (Vite env vars build-e bundle
hoye jay) — eta EmailJS-er normal/expected design, Public Key eijonnoi
"public" bola hoy, eta security risk na। Tobe email sending rate-limit
lagle EmailJS dashboard-e "Allowed origins" set kore apnar domain-e
restrict kore rakhte paren extra safety-r jonno.
