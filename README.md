# 3D Professional Portfolio

A world-class, futuristic 3D portfolio website built with Next.js, Three.js, and Framer Motion. Designed to showcase developer skills, projects, and experience with premium visual effects and smooth animations.

## 🌟 Features

- **Immersive 3D Background**: Interactive Three.js scene with floating geometries and particle effects
- **Smooth Animations**: Framer Motion-powered scroll-triggered animations
- **Glassmorphism UI**: Modern glass-effect cards and components
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Dark Theme**: Premium dark theme with vibrant accent colors
- **Interactive Elements**: Hover effects, 3D tilt effects, and cursor-follow interactions
- **SEO Optimized**: Proper meta tags and semantic HTML

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **3D Graphics**: Three.js, React Three Fiber, React Three Drei
- **Animations**: Framer Motion
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React

## 📁 Project Structure

```
3d-professional-portfolio/
├── public/                 # Static assets
├── src/
│   ├── app/               # Next.js app directory
│   │   ├── globals.css    # Global styles
│   │   ├── layout.tsx     # Root layout
│   │   ├── page.tsx       # Home page
│   │   └── not-found.tsx  # 404 page
│   ├── components/        # React components
│   │   ├── 3d/            # 3D components
│   │   ├── sections/      # Page sections
│   │   ├── ui/            # UI components
│   │   ├── Navbar.tsx     # Navigation bar
│   │   └── Footer.tsx     # Footer
│   ├── lib/               # Utility functions
│   │   ├── data.ts        # Portfolio data
│   │   └── utils.ts       # Helper functions
│   ├── styles/            # Additional styles
│   └── types/             # TypeScript types
├── package.json           # Dependencies
├── tsconfig.json          # TypeScript config
├── tailwind.config.js     # Tailwind config
└── next.config.ts         # Next.js config
```

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd 3d-professional-portfolio
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

## 📦 Build & Deploy

### Build for Production
```bash
npm run build
```

### Run Production Build
```bash
npm start
```

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically detect and deploy your Next.js app

## 🎨 Customization

### Update Personal Information

Edit `src/lib/data.ts` to update:
- Personal info (name, email, social links)
- Skills and expertise
- Projects
- Experience
- Education
- Certifications

### Modify Theme Colors

Update the CSS variables in `src/app/globals.css`:
```css
:root {
  --primary: 262 83% 58%;
  --secondary: 217 33% 17%;
  /* ... */
}
```

### Add New Sections

1. Create a new component in `src/components/sections/`
2. Import and add it to `src/app/page.tsx`

## 🌐 Environment Variables

This project doesn't require any environment variables for basic functionality. If you need to add them:

1. Create a `.env.local` file
2. Add your variables:
```
NEXT_PUBLIC_API_URL=your-api-url
```

## 📄 Pages

- **Home**: Hero section with 3D background
- **About**: Professional summary and education
- **Projects**: Showcase of work with interactive cards
- **Skills**: Technical skills visualization
- **Experience**: Career timeline and certifications
- **Contact**: Contact form and social links

## 🎯 Performance

The project is optimized for:
- Lighthouse score above 90
- Fast initial load
- Smooth animations
- Efficient 3D rendering

## 📝 License

This project is open source and available for personal and commercial use.

## 👤 Author

**Rajeev Nandan Damarla**
- GitHub: [Rajeev91691](https://github.com/Rajeev91691)
- LinkedIn: [rajeev-nandan-d-59b367293](https://linkedin.com/in/rajeev-nandan-d-59b367293)
- Email: rajeevnandan382@gmail.com

---

Built with ❤️ using Next.js, Three.js, and Framer Motion