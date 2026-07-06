# Mert Dilbaz - Personal Website

Personal portfolio website for **Mert Dilbaz**, a backend-focused full-stack developer. The site presents selected projects, writing notes, experience, skills, contact links, and a downloadable resume in a fast, animated single-page experience.

## Highlights

- Clean portfolio sections for hero, about, skills, work, writing, experience, and contact
- Laravel + Inertia architecture with a React frontend
- Smooth page interactions with GSAP and Lenis
- Tailwind CSS based responsive interface
- Typed content data for profile, projects, skills, writing, and experience
- Public-ready structure with secrets, local tooling state, dependencies, and build output ignored

## Tech Stack

- **Backend:** Laravel 13, PHP 8.3, Inertia Laravel
- **Frontend:** React 19, TypeScript, Inertia React
- **Styling:** Tailwind CSS 4
- **Animation:** GSAP, Lenis
- **Tooling:** Vite, ESLint, Prettier, Laravel Pint, Pest, PHPStan

## Getting Started

Clone the repository:

```bash
git clone https://github.com/MertDilbaz/my-website.git
cd my-website
```

Install dependencies:

```bash
composer install
npm install
```

Create the environment file and generate the app key:

```bash
cp .env.example .env
php artisan key:generate
```

Run database migrations if you use local database-backed features:

```bash
php artisan migrate
```

Start the development servers:

```bash
composer run dev
```

Or run the Laravel and Vite servers separately:

```bash
php artisan serve
npm run dev
```

## Useful Commands

```bash
npm run build          # Build frontend assets
npm run lint:check     # Check frontend linting
npm run format:check   # Check Prettier formatting
npm run types:check    # Check TypeScript types
composer run test      # Run PHP linting, static analysis, and tests
```

## Project Structure

```text
app/                  Laravel application code
bootstrap/            Laravel bootstrap files
config/               Laravel configuration
database/             Migrations, factories, and seeders
public/               Public assets and entry point
resources/js/         React, TypeScript, page, component, and content files
resources/views/      Blade app shell
routes/               Web and console routes
tests/                Pest test suite
```

## Content

Most portfolio content is managed as typed data under `resources/js/data/`:

- `profile.ts` - name, role, bio, social links, resume URL
- `projects.ts` - featured project case studies
- `skills.ts` - grouped technical skills and stats
- `experience.ts` - timeline entries
- `writing.ts` - short article-style notes

## License

This project is open for portfolio and reference purposes. Please do not reuse personal information, resume files, or branding assets without permission.
