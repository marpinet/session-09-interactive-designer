# Mariana Andrade Portfolio

Welcome to the portfolio website of Mariana Andrade, founder and creative director of Marabunta Creative Agency. This website showcases her work as an Interactive Designer and highlights the projects she has led.

## Project Structure

The project is organized as follows:

```
mariana-andrade-portfolio
├── src
│   ├── pages
│   │   ├── _app.tsx          # Custom App component for Next.js
│   │   ├── index.tsx         # Homepage showcasing Mariana's work
│   │   ├── about.tsx         # About page detailing Mariana's profile
│   │   ├── work
│   │   │   ├── index.tsx     # Project listing page
│   │   │   └── [slug].tsx     # Dynamic route for project case studies
│   │   └── contact.tsx       # Contact form for inquiries
│   ├── components
│   │   ├── Header.tsx        # Navigation menu component
│   │   ├── Footer.tsx        # Footer component with copyright info
│   │   ├── Hero.tsx          # Hero component for homepage introduction
│   │   ├── ProjectCard.tsx    # Component for displaying project summaries
│   │   ├── CaseStudy.tsx     # Component for detailed project information
│   │   └── ContactForm.tsx   # Component for the contact form
│   ├── styles
│   │   ├── globals.css       # Global CSS styles
│   │   └── components.css     # Component-specific CSS styles
│   ├── data
│   │   └── projects.ts       # Data file containing project details
│   ├── utils
│   │   └── formatDate.ts     # Utility function for date formatting
│   └── types
│       └── index.ts          # TypeScript types and interfaces
├── public
│   └── robots.txt           # Robots.txt for search engine indexing
├── .gitignore                # Git ignore file
├── package.json              # npm configuration file
├── tsconfig.json             # TypeScript configuration file
├── next.config.js            # Next.js configuration file
└── tailwind.config.js        # Tailwind CSS configuration file
```

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd mariana-andrade-portfolio
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Run the development server:
   ```
   npm run dev
   ```

5. Open your browser and visit `http://localhost:3000` to view the portfolio.

## Features

- **Responsive Design**: The website is designed to be fully responsive, ensuring a great user experience on all devices.
- **Dynamic Project Listings**: Projects are dynamically loaded, allowing for easy updates and management.
- **Contact Form**: Visitors can easily reach out to Mariana through the contact form.

## Acknowledgments

Special thanks to all the collaborators and contributors who made this project possible.