---
name: Next14 Edge Redirect
slug: edge-redirect
description: This is a very simple app that allows you to use Vercel's Edge to redirect all traffic from a domain to another URL.
framework: Next.js
useCase:
  - Edge Middleware
  - Edge Config
css: Tailwind
relatedTemplates:
  - feature-flag-apple-store
  - nextjs-boilerplate
---

# Next14 Edge Redirect

This example demonstrates how to use Vercel's Edge functionality to easily redirect all incoming traffic from a domain to a different URL of your choice.

## Usage

If you prefer to set up the redirection app manually, you can follow these steps:

1. Clone this repository.

2. Change to the project directory.

3. Set up environment variables:

   - Copy the .env.example file in this directory to .env.local.
   - This example requires you to set up an Edge Config and store its connection string in the EDGE_CONFIG environment variable.
   - Fill the Edge Config you create with this content:
     ```json
     { "isInMaintenanceMode": true }
     ```

4. Run the app in development mode:

   - Use the command: `pnpm dev`

5. Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=edge-redirect) ([Documentation](https://nextjs.org/docs/deployment)).

### Customizing the Redirect

To customize the redirection destination, modify the middleware.ts file. By default, it redirects all traffic to "https://linktr.ee/austinai". You can change the destination URL by editing this file.

Please note that this is a simple app designed for domain redirection. The only file you need to modify is middleware.ts to specify the target URL you want to redirect to.

Feel free to reach out if you have any questions or need further assistance!
