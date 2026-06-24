import "./styles/TechStackNew.css";

interface TechItem {
  name: string;
  icon: string;
  url: string;
}

// All tech stack items with their icons (local) and official URLs
// Inverted pyramid: 11 -> 9 -> 7 -> 5 (32 items)
const techStack: TechItem[][] = [
  // Row 1 - 11 items (largest)
  [
    { name: "JavaScript", icon: "/images/skills/javascript.svg", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "TypeScript", icon: "/images/skills/typescript.svg", url: "https://typescriptlang.org" },
    { name: "PHP", icon: "/images/skills/php.svg", url: "https://php.net" },
    { name: "HTML5", icon: "/images/skills/html5.svg", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { name: "CSS3", icon: "/images/skills/css3.svg", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { name: "React", icon: "/images/skills/react.svg", url: "https://react.dev" },
    { name: "Next.js", icon: "/images/skills/nextjs.svg", url: "https://nextjs.org" },
    { name: "React Native", icon: "/images/skills/reactnative.svg", url: "https://reactnative.dev" },
    { name: "Tailwind", icon: "/images/skills/tailwindcss.svg", url: "https://tailwindcss.com" },
    { name: "Bootstrap", icon: "/images/skills/bootstrap.svg", url: "https://getbootstrap.com" },
    { name: "Node.js", icon: "/images/skills/nodejs.svg", url: "https://nodejs.org" },
  ],
  // Row 2 - 9 items
  [
    { name: "Express", icon: "/images/skills/express.svg", url: "https://expressjs.com" },
    { name: "Laravel", icon: "/images/skills/laravel.svg", url: "https://laravel.com" },
    { name: "Socket.io", icon: "/images/skills/socketio.svg", url: "https://socket.io" },
    { name: "PostgreSQL", icon: "/images/skills/postgresql.svg", url: "https://postgresql.org" },
    { name: "MySQL", icon: "/images/skills/mysql.svg", url: "https://mysql.com" },
    { name: "Supabase", icon: "/images/skills/supabase.svg", url: "https://supabase.com" },
    { name: "Redis", icon: "/images/skills/redis.svg", url: "https://redis.io" },
    { name: "pgvector", icon: "/images/skills/pgvector.svg", url: "https://github.com/pgvector/pgvector" },
    { name: "OpenAI", icon: "/images/skills/openai.svg", url: "https://openai.com" },
  ],
  // Row 3 - 7 items
  [
    { name: "Claude", icon: "/images/skills/claude.svg", url: "https://claude.ai" },
    { name: "Gemini", icon: "/images/skills/gemini.svg", url: "https://gemini.google.com" },
    { name: "Stripe", icon: "/images/skills/stripe.svg", url: "https://stripe.com" },
    { name: "Razorpay", icon: "/images/skills/razorpay.svg", url: "https://razorpay.com" },
    { name: "Docker", icon: "/images/skills/docker.svg", url: "https://docker.com" },
    { name: "AWS", icon: "/images/skills/aws.svg", url: "https://aws.amazon.com" },
    { name: "Nginx", icon: "/images/skills/nginx.svg", url: "https://nginx.org" },
  ],
  // Row 4 - 5 items (tip of pyramid)
  [
    { name: "Vercel", icon: "/images/skills/vercel.svg", url: "https://vercel.com" },
    { name: "Git", icon: "/images/skills/git.svg", url: "https://git-scm.com" },
    { name: "GitHub", icon: "/images/skills/github.svg", url: "https://github.com" },
    { name: "Postman", icon: "/images/skills/postman.svg", url: "https://postman.com" },
    { name: "VS Code", icon: "/images/skills/vscode.svg", url: "https://code.visualstudio.com" },
  ],
];

const TechStackNew = () => {
  return (
    <div className="techstack-new">
      {/* Video Background */}
      <div className="techstack-video-container">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="techstack-video"
        >
          <source src="/video/video.webm" type="video/webm" />
        </video>
        {/* Dark Overlay */}
        <div className="techstack-overlay"></div>
      </div>

      {/* Content */}
      <div className="techstack-content">
        <h2>Tech Stack</h2>
        
        <div className="techstack-pyramid">
          {techStack.map((row, rowIndex) => (
            <div key={rowIndex} className="techstack-row">
              {row.map((tech, techIndex) => (
                <a
                  key={techIndex}
                  href={tech.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="techstack-item"
                  title={tech.name}
                  data-cursor="disable"
                >
                  <img src={tech.icon} alt={tech.name} />
                  <span>{tech.name}</span>
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStackNew;
