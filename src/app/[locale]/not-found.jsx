import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="fixed inset-0 z-[100] flex min-h-dvh flex-col items-center justify-center bg-gradient-to-br from-[#221c3b] via-[#442e57] to-[#6a4072] p-4">
      <div className="w-full max-w-md space-y-8 text-center">
        <h1 className="text-9xl font-bold text-[#d9b6ff] drop-shadow-[0_5px_5px_rgba(109,24,255,0.4)]">
          404
        </h1>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#ffffff] md:text-3xl">
            Sayfa Bulunamadı
          </h2>

          <p className="text-lg text-[#d9a8f0]">
            Aradığınız sayfa mevcut değil veya taşınmış olabilir.
          </p>
        </div>

        <div className="pt-6">
          <Button
            asChild
            className="rounded-lg bg-[#6d18ff] px-6 py-6 text-[#ffffff] shadow-[0_4px_20px_rgba(109,24,255,0.5)] transition-all duration-300 hover:bg-[#43256e] hover:shadow-[0_4px_25px_rgba(109,24,255,0.7)]"
          >
            <Link href="/" className="flex items-center gap-2 text-lg">
              <Home className="h-5 w-5" />
              Ana Sayfaya Dön
            </Link>
          </Button>
        </div>

        <div className="absolute right-0 bottom-8 left-0 text-center">
          <p className="text-sm text-[#d9b6ff] opacity-70">
            © Tüm Hakları Saklıdır
          </p>
        </div>
      </div>
    </div>
  );
}
