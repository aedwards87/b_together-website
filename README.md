# B-Together Website Documentation

Welcome to the documentation for the B-Together website. This website is built using Next.js and integrates with Prismic for content management. It is hosted on Vercel.

## Table of Contents

- [Introduction](#introduction)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Prismic Setup](#prismic-setup)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Introduction

[B-Together](https://b-together-nextjs-prismic.vercel.app/) is a [description of the website's purpose and features].

## Technologies Used

- [Next.js](https://nextjs.org/)
- [Prismic](https://prismic.io/)
- [Vercel](https://vercel.com/)

## Getting Started

### Prerequisites

Before running the project locally, make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/[username]/b-together-nextjs-prismic.git
   ```

2. Navigate to the project directory:

   ```bash
   cd b-together-nextjs-prismic
   ```

3. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

### Running Locally

To run the project locally, use the following command:

```bash
npm run dev
# or
yarn dev
The website should now be running at http://localhost:3000.

Project Structure
b-together-nextjs-prismic/
|-- .next/
|-- public/
|-- src/
|   |-- app/
|   |   |-- assets/
|   |   |-- styles/
|   |   |-- server-actions/
|   |   |-- sitemap/
|   |   |-- ...
|   |-- components/
|   |-- slices/
|-- prismicio.ts
|-- next.config.js
|-- ...

.next/: Next.js build output directory.
public/: Static assets.
assets/: Static assets.
src/: Source code.
styles/: Global CSS files and fonts
next.config.js: Setup for all redirects.
prismicio.ts: Configuration file for Prismic setup.

Note: Within each component/slice folder you will find the associated CSS file(s).

**Prismic Setup**
The website uses Prismic for content management. To connect to your Prismic repository:
Log in to b_togethers' Prismic account.
Select b_togethers' repository

**Environment Variables**
Create a .env
Copy code
BTOGETHER_PERFECTGYM_X_CLIENT_ID="ENTER CODE HERE FROM VERCEL"
BTOGETHER_PERFECTGYM_X_CLIENT_SECRET="ENTER CODE HERE FROM VERCEL"
BTOGETHER_FORM="ENTER CODE HERE FROM VERCEL"
MAILCHIMP_API_KEY="ENTER CODE HERE FROM VERCEL"
MAILCHIMP_AUDIENCE_ID="ENTER CODE HERE FROM VERCEL"
MAILCHIMP_API_SERVER="ENTER CODE HERE FROM VERCEL"

Vercel:
Connect to Vercel to access b_together website project.
Click settings tab.
Click Environment Variables from the side navigation.
Scroll down until you see the Environment Variables shown above.

Deployment
The website is deployed on Vercel. Deployment is automatically triggered when changes are pushed to the main branch.

License
This project is licensed under the MIT License. See the LICENSE file for details.


```
