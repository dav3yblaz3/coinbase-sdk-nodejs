import { Analytics } from '@vercel/analytics';

// ...existing code...

const analytics = new Analytics({
  // Your Vercel Analytics configuration
});

analytics.track('pageview');

// ...existing code...
