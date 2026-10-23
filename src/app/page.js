'use client';
import { useEffect, useState } from 'react';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3000/api/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Erro ao carregar produtos:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-[#1A1816] text-[#EFECE6] font-sans antialiased selection:bg-[#C5A880] selection:text-[#1A1816]">
      {/* HEADER / NAVBAR */}
      <header className="border-b border-[#3A3530] py-6 px-8 flex justify-between items-center max-w-6xl mx-auto backdrop-blur-md sticky top-0 z-50 bg-[#1A1816]/90">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full border border-[#C5A880] flex items-center justify-center font-serif font-bold text-[#C5A880] tracking-wider text-lg">
            B
          </div>
          <span className="text-lg font-serif tracking-[0.25em] text-[#F9F8F6]">BÔRTH CLASSIC COFFEE</span>
        </div>
        <nav className="hidden md:flex gap-8 text-xs tracking-[0.2em] text-[#C5A880] font-medium">
          <a href="#sobre" className="hover:text-[#F9F8F6] transition-colors">A MARCA</a>
          <a href="#produtos" className="hover:text-[#F9F8F6] transition-colors">CAFÉS ESPECIAIS</a>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="max-w-6xl mx-auto px-8 py-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-[#C5A880] tracking-[0.3em] text-[11px] uppercase font-semibold block mb-3">
            Do grão à xícara • Qualidade que você sente
          </span>
          <h1 className="text-5xl md:text-6xl font-serif font-normal tracking-wide mt-2 mb-6 text-[#F9F8F6] leading-[1.15]">
            Café de <span className="italic text-[#C5A880]">Verdade</span>
          </h1>
          <p className="text-[#B3ADA4] text-base mb-10 leading-relaxed font-light">
            Feito para quem aprecia cada detalhe. Grãos selecionados com rigor, torra equilibrada com precisão e frescor absoluto para transformar seus momentos diários.
          </p>

          <div className="grid grid-cols-2 gap-6 border-t border-[#3A3530] pt-8">
            <div>
              <h3 className="text-[#C5A880] font-serif tracking-wider text-sm">100% ARÁBICA</h3>
              <p className="text-xs text-[#8C857B] mt-1.5 font-light">Grãos selecionados de alta qualidade.</p>
            </div>
            <div>
              <h3 className="text-[#C5A880] font-serif tracking-wider text-sm">TORRA MÉDIA</h3>
              <p className="text-xs text-[#8C857B] mt-1.5 font-light">Equilíbrio perfeito entre aroma e sabor.</p>
            </div>
          </div>
        </div>

        {/* Card Destaque Sofisticado */}
        <div className="bg-[#24211E] border border-[#3A3530] p-10 rounded-xl shadow-2xl relative overflow-hidden flex flex-col items-center text-center group hover:border-[#C5A880]/50 transition-all duration-300">
          <div className="absolute top-0 right-0 bg-[#C5A880] text-[#1A1816] font-semibold text-[10px] px-4 py-1.5 tracking-[0.2em] uppercase">
            Exclusivo
          </div>
          <span className="text-[#C5A880] text-xs tracking-[0.25em] uppercase mb-4 block">Pacote 500g</span>
          <div className="w-20 h-20 rounded-full border border-[#C5A880]/30 flex items-center justify-center mb-6 bg-[#1A1816] shadow-inner">
            <span className="font-serif tracking-widest text-[#C5A880] text-xl">BCC</span>
          </div>
          <h2 className="text-2xl font-serif font-normal text-[#F9F8F6] mb-2 tracking-wide">Bôrth Classic Especial</h2>
          <p className="text-[#8C857B] text-xs tracking-wide mb-8 font-light">Sabor que acolhe, aroma que permanece.</p>
          <a href="#produtos" className="w-full bg-[#C5A880] text-[#1A1816] font-semibold py-3.5 rounded text-xs tracking-[0.2em] uppercase hover:bg-[#D4B892] transition-colors">
            Ver Coleção
          </a>
        </div>
      </section>

      {/* SEÇÃO DE PRODUTOS */}
      <section id="produtos" className="max-w-6xl mx-auto px-8 py-24 border-t border-[#3A3530]">
        <div className="text-center mb-16">
          <span className="text-[#C5A880] tracking-[0.3em] text-[11px] uppercase font-semibold block mb-2">Seleção Exclusiva</span>
          <h2 className="text-3xl font-serif font-normal text-[#F9F8F6] tracking-wide">Nossos Cafés</h2>
        </div>

        {loading ? (
          <p className="text-center text-[#8C857B] font-light">Buscando grãos selecionados...</p>
        ) : products.length === 0 ? (
          <p className="text-center text-[#8C857B] font-light">Nenhum café cadastrado no momento.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-[#24211E] border border-[#3A3530] rounded-xl p-6 flex flex-col justify-between hover:border-[#C5A880]/40 transition-all duration-300">
                <div>
                  <div className="h-44 bg-[#1A1816] rounded-lg mb-5 flex items-center justify-center border border-[#3A3530]/60">
                    <span className="font-serif text-[#C5A880] tracking-[0.3em] text-sm uppercase">Bôrth Coffee</span>
                  </div>
                  <h3 className="text-xl font-serif font-normal text-[#F9F8F6] mb-2 tracking-wide">{product.name}</h3>
                  <p className="text-[#8C857B] text-xs leading-relaxed mb-6 font-light">{product.description || 'Café especial artesanal de origem única.'}</p>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-6 pt-4 border-t border-[#3A3530]/50">
                    <span className="text-xl font-serif text-[#C5A880]">R$ {Number(product.price).toFixed(2)}</span>
                    <span className="text-[11px] text-[#8C857B] tracking-wider uppercase">Estoque: {product.stock} un.</span>
                  </div>
                  <button onClick={() => alert('Compra simulada com sucesso.')} className="w-full bg-transparent border border-[#C5A880] text-[#C5A880] font-semibold py-2.5 rounded text-xs tracking-[0.2em] uppercase hover:bg-[#C5A880] hover:text-[#1A1816] transition-all duration-300">
                    Comprar
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#3A3530] py-10 text-center text-xs text-[#8C857B] tracking-wider font-light">
        <p>© 2026 Bôrth Classic Coffee. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}