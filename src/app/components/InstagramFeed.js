"use client";

import { useEffect } from 'react';

export default function InstagramFeed() {
  useEffect(() => {
    // Carrega o script do Instagram se ainda não foi carregado
    if (!window.instgrm) {
      const script = document.createElement('script');
      script.src = '//www.instagram.com/embed.js';
      script.async = true;
      document.body.appendChild(script);
    } else {
      // Se o script já foi carregado, processa os embeds
      window.instgrm.Embeds.process();
    }
  }, []);

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Nos siga no Instagram
          </h2>
          <p className="text-gray-600 mb-6">
            Acompanhe as atividades do DCE UFPB no @dceufpb.oficial
          </p>
          <a 
            href="https://instagram.com/dceufpb.oficial" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            @dceufpb.oficial
          </a>
        </div>

        {/* Instagram Embed Widget */}
        <div className="max-w-lg mx-auto">
          <blockquote 
            className="instagram-media" 
            data-instgrm-permalink="https://www.instagram.com/dceufpb.oficial/"
            data-instgrm-version="14"
            style={{
              background: '#FFF',
              border: '0',
              borderRadius: '3px',
              boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
              margin: '1px',
              maxWidth: '540px',
              minWidth: '326px',
              padding: '0',
              width: '99.375%'
            }}
          >
            <div style={{ padding: '16px' }}>
              <p style={{
                color: '#c9c8cd',
                fontFamily: 'Arial,sans-serif',
                fontSize: '14px',
                lineHeight: '17px',
                marginBottom: '0',
                marginTop: '8px',
                overflow: 'hidden',
                padding: '8px 0 7px',
                textAlign: 'center',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap'
              }}>
                <a 
                  href="https://www.instagram.com/dceufpb.oficial/"
                  style={{
                    color: '#c9c8cd',
                    fontFamily: 'Arial,sans-serif',
                    fontSize: '14px',
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    lineHeight: '17px',
                    textDecoration: 'none'
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Uma publicação compartilhada por DCE UFPB (@dceufpb.oficial)
                </a>
              </p>
            </div>
          </blockquote>
        </div>

        {/* Fallback */}
        <div className="text-center mt-8">
          <p className="text-gray-600 mb-4">
            Não consegue ver o feed? Visite nosso Instagram diretamente:
          </p>
          <a 
            href="https://instagram.com/dceufpb.oficial" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Abrir Instagram
          </a>
        </div>
      </div>
    </section>
  );
}