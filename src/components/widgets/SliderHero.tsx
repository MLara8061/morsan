import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const slides = [
  {
    title: 'Protección Integral 24/7',
    desc: 'Más de 15 años protegiendo bienes e instalaciones en Cancún y la Península de Yucatán.',
    cta: 'Solicitar Cotización',
    img: '/src/assets/images/Hero-01.jpeg',
  },
  {
    title: 'Guardias Certificados',
    desc: 'Personal altamente capacitado y en constante entrenamiento para tu seguridad.',
    cta: 'Conocer Servicios',
    img: '/src/assets/images/img-02.jpeg',
  },
  {
    title: 'Respaldo AMESP',
    desc: 'Afiliación oficial garantizando estándares profesionales y calidad certificada.',
    cta: 'Evaluación Gratuita',
    img: '/src/assets/images/img-03.jpeg',
  },
];

export default function SliderHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop
        className="h-[480px] md:h-[600px] lg:h-[680px]"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="flex h-full items-center bg-cover bg-center px-6 md:px-16 lg:px-24"
              style={{
                backgroundImage: `linear-gradient(90deg, rgba(12,19,33,0.85), rgba(12,19,33,0.4)), url(${slide.img})`,
              }}
            >
              <div className="max-w-3xl space-y-6">
                <p className="text-amber-400 font-semibold text-sm md:text-base uppercase tracking-wider">
                  Grupo Morsan Seguridad Privada
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  {slide.title}
                </h1>
                <p className="text-slate-200 text-lg md:text-xl max-w-xl">
                  {slide.desc}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-amber-500 text-slate-950 px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-amber-400 transition-all hover:scale-105"
                  >
                    {slide.cta}
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                  <a
                    href="tel:+529986772992"
                    className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    998-677-2992
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Trust badges */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950/90 to-transparent z-10 pb-8 pt-16">
        <div className="container mx-auto px-6 md:px-16 lg:px-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="text-white/90">
              <p className="text-2xl md:text-3xl font-bold text-amber-400">24/7</p>
              <p className="text-sm text-slate-300 mt-1">Monitoreo</p>
            </div>
            <div className="text-white/90">
              <p className="text-2xl md:text-3xl font-bold text-amber-400">+500</p>
              <p className="text-sm text-slate-300 mt-1">Clientes</p>
            </div>
            <div className="text-white/90">
              <p className="text-2xl md:text-3xl font-bold text-amber-400">15+</p>
              <p className="text-sm text-slate-300 mt-1">Años</p>
            </div>
            <div className="text-white/90">
              <p className="text-2xl md:text-3xl font-bold text-amber-400">100%</p>
              <p className="text-sm text-slate-300 mt-1">Certificados</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: #f59e0b;
          background: rgba(12, 19, 33, 0.5);
          width: 48px;
          height: 48px;
          border-radius: 50%;
          backdrop-filter: blur(8px);
        }
        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 20px;
        }
        .swiper-pagination-bullet {
          background: #fff;
          opacity: 0.5;
        }
        .swiper-pagination-bullet-active {
          background: #f59e0b;
          opacity: 1;
        }
      `}</style>
    </section>
  );
}
