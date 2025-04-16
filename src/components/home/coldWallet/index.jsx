"use client";
import { useTranslations } from "next-intl";
import ColdWalletContent from "./ColdWalletContent";

const data = [
  {
    title: "Soğuk Cüzdan (Cold Wallet) Nedir?",
    content:
      "Soğuk cüzdan, kripto paraları internete bağlı olmayan bir ortamda saklamaya yarayan bir cüzdan türüdür. İnternete bağlı olmadığı için siber saldırılara, virüslere ya da hack girişimlerine karşı çok daha güvenlidir. Bu yüzden büyük miktarda kripto para tutan kişiler veya kurumlar genellikle soğuk cüzdan kullanır.",
    srcImage: "/images/cold-wallet/cold-wallet-2.png",
  },
  {
    title: "En yaygın soğuk cüzdan türleri",
    content:
      "Donanım cüzdanları (örneğin: Ledger, Trezor gibi USB cihazları) ve Kâğıt cüzdanlar (QR kod veya özel anahtarların yazdırıldığı belgeler)",
    srcImage: "/images/cold-wallet/cold-wallet-1.png",
  },
  {
    title: "Güvenlik Önceliğimizdir!",
    content:
      "Kripto varlıklarınız, gelişmiş güvenlik önlemleriyle korunan soğuk cüzdanlarda saklanır. Soğuk cüzdanlar, internet bağlantısı olmayan ortamlarda tutulduğu için siber saldırılara karşı maksimum koruma sağlar. Bu sayede yatırımlarınız daima güvende kalır.",
    srcImage: "/images/cold-wallet/cold-wallet-3.jpg",
  },
  {
    title: "Soğuk Cüzdanın Avantajları",
    content:
      "Soğuk cüzdanlar, yüksek güvenlik sağlarken, çevrimdışı ortamda tutulduğundan fiziksel hasarlara veya kayıplara karşı da korur. Ayrıca, şifrelerin ve özel anahtarların kaybolması riskini en aza indirir.",
    srcImage: "/images/cold-wallet/cold-wallet-4.jpg",
  },
  // {
  //   title: "Soğuk Cüzdanın Dezavantajları",
  //   content:
  //     "Soğuk cüzdanlar, internet bağlantısı olmadığı için işlem yapma süresi uzar. Ayrıca, donanım cüzdanı kaybolursa veya zarar görürse, geri almanın yolu yoktur. Yedekleme ve güvenli saklama çok önemlidir.",
  //   srcImage: "/images/cold-wallet/cold-wallet-5.webp",
  // },
];

export function ColdWallet() {
  const t = useTranslations("HomePage");
  return (
    <main className="fluid gridContainer relative mt-80 w-full pb-48">
      <div className="fluid absolute inset-0 -z-10 bg-gradient-to-t from-[#2f2f4e]/50 to-transparent"></div>
      <section className="flex w-full flex-col items-center justify-between gap-16">
        <article className="w-full flex-col items-center justify-center bg-gradient-to-t from-black to-white bg-clip-text text-center text-transparent">
          <h2 className="text-[min(3.6vw,50px)] font-semibold">
            {t("services")}
          </h2>
          <p className="font-base text-[min(1.3vw,18px)] leading-9 text-white/80">
            {t("servicesSubtitle")}
          </p>
        </article>
        <ColdWalletContent data={data} />
      </section>
    </main>
  );
}
