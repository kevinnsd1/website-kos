import { ReactNode } from 'react';
import kosanImg from '../../assets/landingpage/room/katalog/room3.png';

interface AuthLayoutProps {
  children: ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-[#F7F5F2] dark:bg-zinc-950">
      {/* Image Section (Hidden on Mobile) */}
      <div className="hidden md:flex flex-col relative w-full h-screen p-4">
        <div className="double-bezel-shell flex-1 relative overflow-hidden group">
          <div className="double-bezel-core relative w-full h-full overflow-hidden">
            <img
              src={kosanImg}
              alt="Premium Boarding House"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            {/* Gradient Overlay for Text */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
            
            {/* Typography */}
            <div className="absolute bottom-12 left-12 right-12 z-20 text-white">
              <div className="inline-block rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium border border-white/20 mb-6 bg-white/10 backdrop-blur-md">
                Admin Portal
              </div>
              <h2 className="text-4xl lg:text-5xl font-medium tracking-tighter mb-4 text-white">
                KOS.<br/>Sistem Manajemen.
              </h2>
              <p className="text-white/70 text-lg max-w-md">
                Pusat kendali eksklusif untuk mengelola penghuni, tagihan, dan operasional fasilitas dengan efisien.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="flex items-center justify-center p-6 md:p-12 lg:p-24 overflow-y-auto h-screen">
        <div className="w-full max-w-[400px]">
          {children}
        </div>
      </div>
    </div>
  );
}
