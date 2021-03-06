import Prismic from 'prismic-javascript';

// Prismic API endpoint
export const apiEndpoint = "https://grupoeasycare.cdn.prismic.io/api/v2";

// Access Token if the repository is not public
// Generate a token in your dashboard and configure it here if your repository is private
export const accessToken = process.env.PRISMIC_TOKEN;

// Client method to query Prismic
export const client = Prismic.client(apiEndpoint, { accessToken });