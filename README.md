# fatih.dev

A modern, responsive portfolio website built with Next.js 16, TypeScript, and Tailwind CSS v4.

## Features

- **Modern Design**: Clean and professional UI with smooth animations
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Dark Mode Support**: Automatic dark mode based on system preferences
- **Smooth Scrolling**: Seamless navigation between sections
- **TypeScript**: Type-safe code for better development experience
- **Tailwind CSS v4**: Latest version with improved performance
- **SEO Optimized**: Meta tags and semantic HTML for better search visibility

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Package Manager**: npm

## Getting Started

### Prerequisites

- Node.js 18+ installed on your machine
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/fatih-developer/fatih.dev.git
cd fatih.dev
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint for code quality

## Project Structure

```
fatih.dev/
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/
│   ├── Navigation.tsx   # Header navigation
│   ├── Hero.tsx         # Hero/landing section
│   ├── About.tsx        # About section
│   ├── Projects.tsx     # Projects showcase
│   ├── Skills.tsx       # Skills and technologies
│   ├── Contact.tsx      # Contact form
│   └── Footer.tsx       # Footer with social links
├── public/              # Static assets
├── next.config.ts       # Next.js configuration
├── tailwind.config.ts   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Project dependencies
```

## Customization

### Update Personal Information

1. **Hero Section** (`components/Hero.tsx`): Update name and title
2. **About Section** (`components/About.tsx`): Add your bio and background
3. **Projects** (`components/Projects.tsx`): Replace with your actual projects
4. **Skills** (`components/Skills.tsx`): Update with your tech stack
5. **Footer** (`components/Footer.tsx`): Add your social media links

### Modify Colors

Edit `tailwind.config.ts` to customize the color scheme:
```typescript
theme: {
  extend: {
    colors: {
      // Add your custom colors
    },
  },
}
```

### Add More Sections

Create new components in the `components/` folder and import them in `app/page.tsx`.

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Next.js and deploy

### Other Platforms

- **Netlify**: Connect your repo and deploy
- **AWS Amplify**: Use the AWS console to deploy
- **Self-hosted**: Run `npm run build` and `npm start`

## Contributing

Feel free to fork this project and customize it for your own portfolio!

## License

MIT License - feel free to use this project for your own portfolio.

## Contact

- **Email**: your.email@example.com
- **GitHub**: [@fatih-developer](https://github.com/fatih-developer)
- **LinkedIn**: [Your LinkedIn](https://linkedin.com/in/yourprofile)

---

Built with ❤️ by Fatih ÜNAL