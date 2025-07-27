import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../styles/Blog.css';
import quadcopter1 from '../assets/quadcopter1.webp';
import quadcopter2 from '../assets/quadcopter2.webp';

// Blog posts data
const blogPosts = [
  {
    id: 'productivity-hacks',
    title: '7 Productivity Hacks for Developers',
    excerpt: 'Discover actionable tips to boost your coding productivity and stay focused throughout the day.',
    date: 'April 2024',
    category: 'Productivity',
    readTime: '5 min read',
    featured: true
  },
  {
    id: 'css-magic',
    title: 'CSS Magic: Creative UI Effects',
    excerpt: 'Explore fun and creative CSS tricks to make your web interfaces stand out.',
    date: 'March 2024',
    category: 'Web Design',
    readTime: '7 min read'
  },
  {
    id: 'remote-work',
    title: 'Remote Work: Myths and Realities',
    excerpt: 'A candid look at the pros and cons of working remotely as a developer.',
    date: 'February 2024',
    category: 'Career',
    readTime: '6 min read'
  },
];

const BlogList = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate('/');
  };

  const openBlogPost = (postId) => {
    navigate(`/blog/${postId}`);
  };

  return (
    <div className="blog-page">
      <nav className="blog-navbar">
        <div className="container">
          <button onClick={goBack} className="back-btn">
            ← Back to Portfolio
          </button>
        </div>
      </nav>

      <div className="blog-container">
        <header className="blog-header">
          <h1 className="blog-title">Blog</h1>
          <p className="blog-subtitle">Thoughts, tutorials, and insights from my journey in technology</p>
        </header>

        <div className="blog-list">
          {blogPosts.map((post) => (
            <article key={post.id} className="blog-card" onClick={() => openBlogPost(post.id)}>
              {post.featured && <div className="featured-badge">Featured</div>}
              <div className="blog-card-content">
                <div className="blog-card-meta">
                  <span className="blog-card-category">{post.category}</span>
                  <span className="blog-card-date">{post.date}</span>
                  <span className="blog-card-read-time">{post.readTime}</span>
                </div>
                <h2 className="blog-card-title">{post.title}</h2>
                <p className="blog-card-excerpt">{post.excerpt}</p>
                <div className="blog-card-footer">
                  <span className="read-more">Read More →</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

const BlogPost = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  
  const post = blogPosts.find(p => p.id === postId);
  
  if (!post) {
    return (
      <div className="blog-page">
        <nav className="blog-navbar">
          <div className="container">
            <button onClick={() => navigate('/blog')} className="back-btn">
              ← Back to Blog
            </button>
          </div>
        </nav>
        <div className="blog-container">
          <h1>Blog post not found</h1>
        </div>
      </div>
    );
  }

  const goBack = () => {
    navigate('/blog');
  };

  const openImageModal = (imageSrc, altText) => {
    setSelectedImage({ src: imageSrc, alt: altText });
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  // Unique content for each dummy blog
  let blogContent;
  if (postId === 'productivity-hacks') {
    blogContent = (
      <div className="blog-content">
        <section className="blog-section">
          <h2>Introduction</h2>
          <p>Productivity is the secret sauce for every successful developer. Here are 7 hacks that can help you code faster, stay organized, and avoid burnout. Whether you’re a seasoned coder or just starting out, these tips will help you get more done in less time.</p>
        </section>
        <section className="blog-section">
          <h2>1. Use Keyboard Shortcuts</h2>
          <p>Mastering your editor’s shortcuts can save you hours every week. Try learning a new shortcut every day! For example, in VS Code, <code>Ctrl+D</code> selects the next occurrence of a word, and <code>Ctrl+P</code> quickly opens files. Customizing your keybindings can also boost your workflow.</p>
        </section>
        <section className="blog-section">
          <h2>2. Pomodoro Technique</h2>
          <p>Work in focused 25-minute sprints with 5-minute breaks. This keeps your mind fresh and helps you avoid distractions. There are many Pomodoro timer apps, or you can use a simple kitchen timer. After four sessions, take a longer break to recharge.</p>
        </section>
        <section className="blog-section">
          <h2>3. Automate Repetitive Tasks</h2>
          <p>Write scripts or use tools like Gulp, Webpack, or npm scripts to automate builds, tests, and deployments. Even small automations, like code formatting or image optimization, can save you time and reduce errors.</p>
        </section>
        <section className="blog-section">
          <h2>4. Keep a Clean Workspace</h2>
          <p>A tidy desk and a clutter-free desktop can help you focus better and reduce stress. Organize your files, use folders, and regularly archive old projects. Digital minimalism can be just as important as physical tidiness.</p>
        </section>
        <section className="blog-section">
          <h2>5. Plan Your Day</h2>
          <p>Start each day by listing your top 3 priorities. Tackle the hardest task first! Use tools like Trello, Notion, or a simple notebook to track your progress. Reviewing your goals in the morning sets a clear direction for the day.</p>
        </section>
        <section className="blog-section">
          <h2>6. Take Care of Your Health</h2>
          <p>Don’t forget to stretch, hydrate, and take regular breaks away from the screen. Consider using a standing desk or taking short walks. Healthy snacks and good posture can make a big difference in your energy levels.</p>
        </section>
        <section className="blog-section">
          <h2>7. Reflect and Improve</h2>
          <p>At the end of the week, review what worked and what didn’t. Continuous improvement is key. Keep a journal or log of your productivity experiments and adjust your habits as needed.</p>
        </section>
        <section className="blog-section">
          <h2>Bonus: Learn to Say No</h2>
          <p>Protect your focus by declining unnecessary meetings or tasks that don’t align with your goals. It’s okay to set boundaries!</p>
        </section>
        <section className="blog-section">
          <h2>Conclusion</h2>
          <p>Productivity isn’t about working harder, but working smarter. Try out these hacks, experiment with your routine, and find what works best for you. Happy coding!</p>
        </section>
      </div>
    );
  } else if (postId === 'css-magic') {
    blogContent = (
      <div className="blog-content">
        <section className="blog-section">
          <h2>Introduction</h2>
          <p>CSS isn’t just about layouts—it’s about bringing your UI to life! Here are some creative effects you can try in your next project. With a few lines of code, you can transform a plain interface into something memorable and interactive.</p>
        </section>
        <section className="blog-section">
          <h2>1. Glassmorphism</h2>
          <p>Use <code>backdrop-filter: blur(10px);</code> and semi-transparent backgrounds to create a frosted glass look. This effect works great for cards, modals, and overlays. Combine with subtle shadows for extra depth.</p>
          <pre><code>{`background: rgba(255,255,255,0.1);
backdrop-filter: blur(10px);`}</code></pre>
        </section>
        <section className="blog-section">
          <h2>2. Animated Gradients</h2>
          <p>Animate background gradients with <code>@keyframes</code> for a dynamic, modern feel. Try multi-color gradients for a vibrant look.</p>
          <pre><code>{`@keyframes gradient {
  0% { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
}`}</code></pre>
        </section>
        <section className="blog-section">
          <h2>3. Hover Effects</h2>
          <p>Try scaling, rotating, or color-shifting elements on hover for interactive feedback. Use <code>transition</code> for smoothness. For example, buttons that grow or cards that tilt slightly on hover can make your UI feel more responsive.</p>
        </section>
        <section className="blog-section">
          <h2>4. Custom Scrollbars</h2>
          <p>Style your scrollbars with <code>::-webkit-scrollbar</code> for a unique touch. You can change the color, width, and even add rounded corners.</p>
          <pre><code>{`::-webkit-scrollbar {
  width: 8px;
  background: #222;
}`}</code></pre>
        </section>
        <section className="blog-section">
          <h2>5. Neumorphism</h2>
          <p>Combine light and dark shadows for soft, extruded UI elements that pop off the page. Use with care for buttons, cards, and toggles.</p>
        </section>
        <section className="blog-section">
          <h2>6. CSS Variables</h2>
          <p>Use <code>:root</code> variables to manage your color palette and spacing. This makes theme changes and maintenance much easier.</p>
          <pre><code>{`:root {
  --primary: #00d4ff;
  --background: #0a0a0a;
}`}</code></pre>
        </section>
        <section className="blog-section">
          <h2>7. Responsive Typography</h2>
          <p>Use <code>clamp()</code> and <code>vw</code> units to make your text scale smoothly across devices. This ensures readability on all screens.</p>
        </section>
        <section className="blog-section">
          <h2>Conclusion</h2>
          <p>CSS is a playground for creativity. Experiment with these effects, combine them, and don’t be afraid to push the boundaries of what’s possible. Your users will thank you for a delightful experience!</p>
        </section>
      </div>
    );
  } else if (postId === 'remote-work') {
    blogContent = (
      <div className="blog-content">
        <section className="blog-section">
          <h2>Introduction</h2>
          <p>Remote work is more popular than ever, but it’s not all pajamas and coffee shops. Here’s what you should know if you’re considering or already working remotely as a developer.</p>
        </section>
        <section className="blog-section">
          <h2>Myth: You Can Work From Anywhere</h2>
          <p>While technically true, time zones, internet speed, and distractions can make some locations less ideal. Always check your connectivity and try to find a quiet, dedicated workspace.</p>
        </section>
        <section className="blog-section">
          <h2>Reality: Communication is Key</h2>
          <p>Remote teams need to over-communicate. Daily standups, clear documentation, and regular check-ins help keep everyone on the same page. Tools like Slack, Zoom, and Notion are invaluable.</p>
        </section>
        <section className="blog-section">
          <h2>Myth: It’s Always Flexible</h2>
          <p>Many remote jobs still require you to be online during set hours, especially for meetings. Flexibility is a perk, but it comes with responsibility.</p>
        </section>
        <section className="blog-section">
          <h2>Reality: Self-Discipline is Essential</h2>
          <p>Without a boss looking over your shoulder, you need to manage your own time and motivation. Set boundaries with family or roommates and stick to a daily routine.</p>
        </section>
        <section className="blog-section">
          <h2>Tips for Success</h2>
          <ul>
            <li>Set up a dedicated workspace with good lighting and a comfortable chair.</li>
            <li>Stick to a routine—start and end your workday at the same time.</li>
            <li>Take regular breaks to stretch and move around.</li>
            <li>Stay connected with your team through video calls and chat.</li>
            <li>Invest in noise-cancelling headphones for focus.</li>
            <li>Don’t forget to socialize outside of work to avoid isolation.</li>
          </ul>
        </section>
        <section className="blog-section">
          <h2>Challenges</h2>
          <p>Some common challenges include feeling isolated, difficulty unplugging after work, and miscommunication. Address these by setting boundaries, having a clear end-of-day routine, and making time for virtual coffee chats with colleagues.</p>
        </section>
        <section className="blog-section">
          <h2>Conclusion</h2>
          <p>Remote work offers incredible freedom, but it also requires discipline and strong communication. With the right habits and tools, you can thrive as a remote developer and enjoy a healthy work-life balance.</p>
        </section>
      </div>
    );
  } else {
    blogContent = (
      <div className="blog-content">
        <section className="blog-section">
          <h2>Coming Soon</h2>
          <p>This blog post is currently being written. Check back soon for the full content!</p>
        </section>
      </div>
    );
  }

  return (
    <div className="blog-page">
      <nav className="blog-navbar">
        <div className="container">
          <button onClick={goBack} className="back-btn">
            ← Back to Blog
          </button>
        </div>
      </nav>

      <div className="blog-container">
        <article className="blog-post">
          <header className="blog-header">
            <h1 className="blog-title">{post.title}</h1>
            <div className="blog-meta">
              <span className="blog-date">{post.date}</span>
              <span className="blog-category">{post.category}</span>
              <span className="blog-read-time">{post.readTime}</span>
            </div>
          </header>

          {blogContent}
        </article>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className={`image-modal ${selectedImage ? 'active' : ''}`} onClick={closeImageModal}>
          <button className="modal-close" onClick={closeImageModal}>×</button>
          <img 
            src={selectedImage.src} 
            alt={selectedImage.alt} 
            className="modal-image"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

const Blog = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  
  if (postId) {
    return <BlogPost />;
  }
  
  return <BlogList />;
};

export default Blog; 