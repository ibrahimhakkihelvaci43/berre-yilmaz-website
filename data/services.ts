export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  slug: string;
}

export const services: Service[] = [
  {
    id: '1',
    title: 'Çift Terapisi',
    shortDescription: 'İlişkinizdeki sorunları birlikte ele almak ve sağlıklı iletişim kurmayı öğrenmek için profesyonel destek.',
    fullDescription: `Çift terapisi, romantik ilişkideki iki kişinin (evli ya da sevgili) yaşadığı sorunları birlikte ele almak için bir uzman eşliğinde yapılan terapi sürecidir. Amaç, ilişkinin daha sağlıklı, dengeli ve anlaşılır hale gelmesini sağlamaktır.

**Ne üzerine çalışılır?**

Çift terapisinde genelde şu konular ele alınır:
- İletişim sorunları (yanlış anlaşılmalar, kırıcı konuşmalar)
- Sürekli tekrar eden kavgalar ve çatışmalar
- Güven problemleri (aldatma, kıskançlık)
- Duygusal uzaklaşma veya ilgisizlik
- Cinsellik ve yakınlık sorunları
- Hayat hedefleri, beklentiler ve roller

**Nasıl ilerler?**

- Seanslara genellikle iki partner birlikte katılır
- Terapist taraf tutmaz, iki tarafı da anlamaya çalışır
- Sorunların kökenine inilir ve çözüm yolları geliştirilir
- Çiftlere evde uygulayabilecekleri iletişim ve davranış teknikleri verilebilir

**Amaç ne?**

Çift terapisinin amacı:
- Birbirini daha iyi anlamak
- Sağlıklı iletişim kurmayı öğrenmek
- İlişkiyi güçlendirmek

Ama önemli bir nokta: Her zaman ilişkiyi "kurtarmak" hedeflenmez. Bazen çiftlerin daha sağlıklı bir şekilde ayrılmasına da yardımcı olabilir.

**Ne zaman gidilmeli?**

- Sürekli aynı sorunlar yaşanıyorsa
- Konuşmalar kavgaya dönüşüyorsa
- İlişkide mesafe hissediliyorsa
- Çözüm bulamıyorsanız

Erken gitmek genelde daha faydalı olur.`,
    icon: '/images/icons/icon_head_double.svg',
    slug: 'cift-terapisi'
  },
  {
    id: '2',
    title: 'Yetişkin Terapisi',
    shortDescription: 'Kaygı, depresyon, özgüven ve hayat zorluklarıyla başa çıkmak için bireysel terapi desteği.',
    fullDescription: `Yetişkin terapisi, 18 yaş ve üzerindeki bireylerin duygusal, zihinsel ve davranışsal sorunlarını ele almak için bir uzmanla (psikolog/psikoterapist) yaptığı terapi sürecidir. Bu terapi, kişinin kendini daha iyi anlamasına ve hayatındaki zorluklarla daha sağlıklı başa çıkmasına yardımcı olur.

**Hangi konular ele alınır?**

Yetişkin terapisinde çok farklı alanlar çalışılabilir:
- Kaygı (anksiyete) ve stres
- Depresyon ve mutsuzluk
- Özgüven eksikliği
- Travmalar ve geçmiş yaşantılar
- Öfke kontrolü
- İlişki sorunları (aile, partner, iş)
- Hayat yönü, karar verme, amaç bulma

**Nasıl işler?**

- Genelde bire bir (tek kişiyle) yapılır
- Seanslar çoğunlukla haftada 1 olur
- Terapist seni yargılamadan dinler ve anlamaya çalışır
- Düşünce, duygu ve davranışların arasındaki bağlantıları keşfetmene yardımcı olur

**Amaç nedir?**

- Kendini daha iyi tanımak
- Duygularını yönetebilmek
- Daha sağlıklı düşünme ve davranış biçimleri geliştirmek
- Hayat kaliteni artırmak

**Kimler gitmeli?**

Sadece "çok büyük sorunları olanlar" değil:
- Zor bir dönemden geçenler
- Sürekli aynı sorunları yaşayanlar
- Kendini geliştirmek isteyenler

de yetişkin terapisine gidebilir.

**Kısacası:**
Yetişkin terapisi, zihinsel ve duygusal sağlığı güçlendirmek için yapılan profesyonel bir destek sürecidir.`,
    icon: '/images/icons/icon_brain.svg',
    slug: 'yetiskin-terapisi'
  },
  {
    id: '3',
    title: 'Çocuk Terapisi',
    shortDescription: 'Çocuğunuzun duygusal gelişimini desteklemek ve davranış sorunlarını çözmek için özel terapi.',
    fullDescription: `Çocuk terapisi, çocukların (genelde 3–12 yaş) duygusal, davranışsal ve gelişimsel sorunlarını anlamak ve çözmek için bir uzmanla (çocuk psikoloğu/terapist) yürütülen destek sürecidir.

Çocuklar yetişkinler gibi duygularını açıkça anlatamayabilir. Bu yüzden terapi, onların dünyasına uygun yöntemlerle yapılır.

**Nasıl yapılır?**

Çocuk terapisi genelde:
- Oyun terapisi
- Resim çizme
- Hikâye anlatma

gibi yöntemlerle ilerler.

Çocuk oyun oynarken aslında:
- Duygularını ifade eder
- Yaşadığı sorunları dışa vurur
- Terapist de bu süreçte çocuğu anlamaya çalışır

**Hangi durumlarda gerekir?**

- Korkular ve kaygılar (karanlık, okul, ayrılık kaygısı)
- Davranış problemleri (öfke, inat, saldırganlık)
- Alt ıslatma, tırnak yeme gibi alışkanlıklar
- Aile içi değişimler (boşanma, taşınma, yeni kardeş)
- Travmalar (kayıp, kazalar, zor deneyimler)
- Okul uyum ve dikkat sorunları

**Ailenin rolü nedir?**

Çocuk terapisinde sadece çocuk değil, aile de sürecin önemli bir parçasıdır:
- Terapist ebeveynlere rehberlik eder
- Evde nasıl davranılması gerektiğini anlatır
- Bazen ebeveynlerle ayrı görüşmeler yapılır

**Amaç nedir?**

- Çocuğun duygularını sağlıklı ifade etmesi
- Davranışlarını düzenleyebilmesi
- Kendini güvende ve anlaşılmış hissetmesi

**Kısaca:**
Çocuk terapisi, çocuğun iç dünyasını anlamaya ve sağlıklı gelişimini desteklemeye yönelik özel bir terapi türüdür.`,
    icon: '/images/icons/icon_head_children.svg',
    slug: 'cocuk-terapisi'
  },
  {
    id: '4',
    title: 'Oyun Terapisi',
    shortDescription: 'Çocukların duygularını ve yaşadıkları sorunları oyun aracılığıyla ifade etmelerini sağlayan özel bir terapi yöntemidir.',
    fullDescription: `Oyun terapisi, çocukların duygularını ve yaşadıkları sorunları oyun aracılığıyla ifade etmelerini sağlayan özel bir terapi yöntemidir. Çünkü çocuklar, yetişkinler gibi konuşarak değil, çoğunlukla oynayarak kendilerini anlatırlar.

**Nasıl çalışır?**

Terapist, çocuğa oyuncaklar ve güvenli bir ortam sunar.

Çocuk:
- Oyuncaklarla oynar
- Hikâyeler kurar
- Rollere girer

Bu süreçte aslında:
- İç dünyasını yansıtır
- Korkularını, öfkesini veya üzüntüsünü ortaya koyar

Terapist de bu oyunları gözlemleyerek ve gerektiğinde yönlendirerek çocuğun duygularını anlamasına ve düzenlemesine yardımcı olur.

**Hangi durumlarda kullanılır?**

- Kaygı ve korkular
- Davranış problemleri (öfke, saldırganlık)
- Travmalar (kayıp, kazalar, zor deneyimler)
- Aile değişimleri (boşanma, taşınma)
- İçe kapanıklık veya özgüven sorunları
- Okul uyum problemleri

**Oyun terapisi türleri**

- **Yönlendirilmemiş oyun terapisi:** Çocuk oyunu kendisi yönetir
- **Yönlendirilmiş oyun terapisi:** Terapist belirli hedeflerle süreci yönlendirir

**Amaç nedir?**

- Çocuğun kendini ifade etmesini sağlamak
- Duygularını tanımasına yardımcı olmak
- Zor yaşantıları sağlıklı şekilde işlemesini desteklemek

**Kısaca:**
Oyun terapisi, çocuğun "oyun diliyle" konuştuğu bir terapi yöntemidir.`,
    icon: '/images/icons/icon_head.svg',
    slug: 'oyun-terapisi'
  },
  {
    id: '5',
    title: 'Online Terapi',
    shortDescription: 'Terapi seanslarının internet üzerinden video görüşme, sesli arama veya mesajlaşma ile yapılmasıdır.',
    fullDescription: `Online terapi, terapi seanslarının yüz yüze yerine internet üzerinden (video görüşme, sesli arama veya mesajlaşma ile) yapılmasıdır. Yani terapist ile danışan aynı ortamda bulunmadan, uzaktan terapi süreci yürütülür.

**Nasıl yapılır?**

Online terapi genelde:
- Video görüşme (en yaygın yöntem)
- Telefon görüşmesi
- Yazışma (chat)

üzerinden yapılır. Seanslar yine belirli gün ve saatlerde gerçekleşir, tıpkı yüz yüze terapi gibi.

**Hangi konular için uygundur?**

Online terapi, birçok konuda etkili olabilir:
- Kaygı ve stres
- Depresyon
- İlişki sorunları
- Özgüven problemleri
- Günlük hayat zorlukları

**Avantajları**

- Mekân bağımsızdır (evden katılabilirsin)
- Zaman açısından daha esnektir
- Ulaşımı zor olan kişiler için kolaylık sağlar
- Farklı şehir/ülkeden terapist seçme imkânı sunar

**Dezavantajları**

- İnternet bağlantısına bağlıdır
- Bazı kişiler için yüz yüze kadar güçlü hissettirmeyebilir
- Dikkat dağıtıcı ortamlar süreci etkileyebilir

**Yüz yüze terapiden farkı ne?**

Temelde aynı yöntemler kullanılır. Fark sadece iletişim şeklidir. Araştırmalar, birçok durumda online terapinin de oldukça etkili olabildiğini göstermektedir.

**Kısaca:**
Online terapi, profesyonel psikolojik desteğin dijital ortamda sunulan halidir.`,
    icon: '/images/icons/icon_head_plus.svg',
    slug: 'online-terapi'
  }
];
