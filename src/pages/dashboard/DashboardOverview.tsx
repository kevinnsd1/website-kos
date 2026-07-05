import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Users, Bed, Wallet, Receipt } from '@phosphor-icons/react';

export default function DashboardOverview() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-medium tracking-tight">Beranda Dashboard</h1>
          <p className="text-black/60 dark:text-white/60 mt-1">
            Ringkasan statistik dan aktivitas kos bulan ini.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-black/60 dark:text-white/60">
                Total Kamar
              </CardTitle>
              <Bed size={20} className="text-black/40 dark:text-white/40" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold tracking-tight">48</div>
              <p className="text-xs text-black/60 dark:text-white/60 mt-1">
                32 terisi, 16 kosong
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-black/60 dark:text-white/60">
                Total Penghuni
              </CardTitle>
              <Users size={20} className="text-black/40 dark:text-white/40" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold tracking-tight">36</div>
              <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                +2 bulan ini
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-black/60 dark:text-white/60">
                Pendapatan
              </CardTitle>
              <Wallet size={20} className="text-black/40 dark:text-white/40" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold tracking-tight">Rp 52.4M</div>
              <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                +12.5% dari bulan lalu
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-black/60 dark:text-white/60">
                Tagihan Tertunda
              </CardTitle>
              <Receipt size={20} className="text-black/40 dark:text-white/40" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold tracking-tight">4</div>
              <p className="text-xs text-red-500 mt-1">
                Total Rp 8.2M belum dibayar
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Content Area Placeholder */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="h-[400px]">
            <CardHeader>
              <CardTitle>Grafik Pendapatan</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-center h-[300px] text-black/40">
              [Area Grafik]
            </CardContent>
          </Card>
          <Card className="h-[400px]">
            <CardHeader>
              <CardTitle>Aktivitas Terakhir</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-center h-[300px] text-black/40">
              [Daftar Aktivitas]
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
