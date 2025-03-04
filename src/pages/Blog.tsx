import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, User } from 'lucide-react';

const blogPosts = [
  {
    slug: 'growth-hacking-2024',
    title: 'Growth Hacking em 2024: Tendências e Estratégias',
    excerpt: 'Descubra as principais tendências de growth hacking que estão revolucionando o marketing digital em 2024.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000',
    author: 'Ana Silva',
    date: '15 Mar 2024',
    readTime: '8 min',
    category: 'Marketing Digital'
  },
  {
    slug: 'ia-marketing',
    title: 'Como a IA está Transformando o Marketing',
    excerpt: 'Um guia completo sobre como a Inteligência Artificial está revolucionando as estratégias de marketing moderno.',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=2000',
    author: 'Pedro Santos',
    date: '12 Mar 2024',
    readTime: '6 min',
    category: 'Tecnologia'
  },
  {
    slug: 'crm-estrategico',
    title: 'CRM Estratégico: Além do Gerenciamento de Contatos',
    excerpt: 'Aprenda como transformar seu CRM em uma ferramenta estratégica para crescimento de negócios.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2000',
    author: 'Mariana Costa',
    date: '10 Mar 2024',
    readTime: '5 min',
    category: 'CRM'
  }
];

const Blog: React.FC = () => {
  return (
    <main className="py-32 bg-zinc-900">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog Growth Agency</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Insights, estratégias e novidades sobre marketing digital, growth hacking e transformação de negócios.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <Link to={`/blog/${blogPosts[0].slug}`} className="group">
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <img
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <span className="bg-[#00FF00] text-black px-4 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                  {blogPosts[0].category}
                </span>
                <h2 className="text-3xl font-bold mb-4">{blogPosts[0].title}</h2>
                <p className="text-gray-300 mb-4">{blogPosts[0].excerpt}</p>
                <div className="flex items-center text-sm text-gray-300 space-x-4">
                  <span className="flex items-center">
                    <User size={16} className="mr-2" />
                    {blogPosts[0].author}
                  </span>
                  <span className="flex items-center">
                    <Calendar size={16} className="mr-2" />
                    {blogPosts[0].date}
                  </span>
                  <span className="flex items-center">
                    <Clock size={16} className="mr-2" />
                    {blogPosts[0].readTime}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Recent Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.slice(1).map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group bg-black rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300"
            >
              <div className="relative h-48">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#00FF00] text-black px-3 py-1 rounded-full text-sm font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-[#00FF00] transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-300 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-300">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center">
                      <User size={16} className="mr-2" />
                      {post.author}
                    </span>
                    <span className="flex items-center">
                      <Clock size={16} className="mr-2" />
                      {post.readTime}
                    </span>
                  </div>
                  <span className="text-[#00FF00] flex items-center">
                    Ler mais
                    <ArrowRight size={16} className="ml-2" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Blog;