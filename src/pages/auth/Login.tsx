import { useState } from 'react';
import { AuthLayout } from '../../components/layout/AuthLayout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';
import { ShieldCheck } from '@phosphor-icons/react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate login
    setTimeout(() => {
      setIsLoading(false);
      // Redirect to dashboard logic here later
    }, 1500);
  };

  return (
    <AuthLayout>
      <div className="flex flex-col gap-6">
        {/* Mobile Logo / Branding (Only shows on mobile since desktop has the image) */}
        <div className="md:hidden flex items-center gap-2 mb-4">
          <div className="w-10 h-10 bg-black dark:bg-white rounded-full flex items-center justify-center">
            <ShieldCheck size={24} weight="fill" className="text-white dark:text-black" />
          </div>
          <span className="text-xl font-bold tracking-tight">KOS.</span>
        </div>

        <Card className="border-0 shadow-none bg-transparent">
          <CardHeader className="px-0 pt-0">
            <CardTitle className="text-3xl font-medium tracking-tight">Selamat Datang</CardTitle>
            <CardDescription className="text-base mt-2">
              Masuk ke akun manajemen Anda untuk melanjutkan.
            </CardDescription>
          </CardHeader>
          
          <CardContent className="px-0">
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Email
                </label>
                <Input 
                  type="email" 
                  placeholder="admin@kos.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                  className="h-12 bg-white dark:bg-black"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Kata Sandi
                  </label>
                  <a href="#" className="text-sm text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white underline underline-offset-4">
                    Lupa sandi?
                  </a>
                </div>
                <Input 
                  type="password" 
                  placeholder="••••••••" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required 
                  className="h-12 bg-white dark:bg-black"
                />
              </div>
              
              <Button type="submit" className="w-full h-12 text-base font-medium" disabled={isLoading}>
                {isLoading ? 'Memproses...' : 'Masuk'}
              </Button>
            </form>
          </CardContent>
          
          <CardFooter className="px-0 flex-col gap-4 text-sm text-center text-black/60 dark:text-white/60">
            <p>
              Mengalami kendala saat masuk?{' '}
              <a href="#" className="text-black dark:text-white hover:underline underline-offset-4 font-medium">
                Hubungi Dukungan IT
              </a>
            </p>
          </CardFooter>
        </Card>
      </div>
    </AuthLayout>
  );
}
