import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, Share2 } from 'lucide-react';

const blogPosts = {
  'growth-hacking-2024': {
    title: 'Growth Hacking em 2024: Tendências e Estratégias',
    content: `
      <p>O growth hacking continua evoluindo em 2024, trazendo novas perspectivas e ferramentas para o marketing digital. Neste artigo, exploraremos as principais tendências e estratégias que estão definindo o cenário atual.</p>

      <h2>1. Automação Inteligente</h2>
      <p>A automação de marketing está se tornando mais sofisticada com o uso de IA, permitindo personalização em escala e otimização contínua de campanhas.</p>

      <h2>2. Marketing Orientado por Dados</h2>
      <p>A análise de dados em tempo real e a tomada de decisões baseada em evidências são fundamentais para o sucesso das estratégias de growth hacking.</p>

      <h2>3. Experiência do Usuário Personalizada</h2>
      <p>A personalização da jornada do usuário através de diferentes canais se tornou uma prioridade para empresas que buscam crescimento sustentável.</p>
    `,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000',
    author: 'Ana Silva',
    date: '15 Mar 2024',
    readTime: '8 min',
    category: 'Marketing Digital'
  }
};

const BlogPost: React.FC = () => {
  const { slug } = useParams();
  const post = slug ? blogPosts[slug as keyof typeof blogPosts] : null;

  if (!post) {
    return (
      <main className="py-32 bg-zinc-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Post não encontrado</h1>
          <Link to="/blog" className="text-[#00FF00] hover:underline">
            Voltar para o blog
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="py-32 bg-zinc-900">
      <div className="container mx-auto px-4">
        {/* Navigation */}
        <Link to="/blog" className="inline-flex items-center text-[#00FF00] hover:underline mb-8">
          <ArrowLeft className="mr-2" size={20} />
          Voltar para o blog
        </Link>

        {/* Hero Image */}
        <div className="relative h-[400px] rounded-2xl overflow-hidden mb-8">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Header */}
        <div className="max-w-3xl mx-auto mb-12">
          <span className="bg-[#00FF00] text-black px-4 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
            {post.category}
          </span>
          <h1 className="text-4xl font-bold mb-6">{post.title}</h1>

          <div className="flex items-center justify-between border-y border-zinc-700 py-4">
            <div className="flex items-center space-x-6">
              <span className="flex items-center text-gray-300">
                <User size={18} className="mr-2" />
                {post.author}
              </span>
              <span className="flex items-center text-gray-300">
                <Calendar size={18} className="mr-2" />
                {post.date}
              </span>
              <span className="flex items-center text-gray-300">
                <Clock size={18} className="mr-2" />
                {post.readTime}
              </span>
            </div>
            <button className="text-[#00FF00] hover:text-[#00DD00] transition-colors">
              <Share2 size={20} />
            </button>
          </div>
        </div>

        {/* Article Content */}
        <article className="prose prose-invert prose-lg max-w-3xl mx-auto">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
      </div>
    </main>
  );
};

export default BlogPost;