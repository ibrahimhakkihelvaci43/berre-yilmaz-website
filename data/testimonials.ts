export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Elif T.',
    text: 'İlk gittiğimde baya gerildim ne diyeceğimi bile bilmiyodum ama zamanla açıldım şimdi iyi ki başlamışım diyorum',
    rating: 5
  },
  {
    id: '2',
    name: 'Murat D.',
    text: 'kafam çok doluydu birine anlatmam gerekiyodu burada rahat rahat konuştum iyi geldi bana',
    rating: 5
  },
  {
    id: '3',
    name: 'Zeynep A.',
    text: 'işten dolayı çok yıpranmıştım biraz nefes almak için başladım gerçekten iyi geldi',
    rating: 5
  },
  {
    id: '4',
    name: 'Can B.',
    text: 'çok konuşan biri değilim ama burada konuşabildim o bile benim için değişik bi deneyimdi',
    rating: 5
  },
  {
    id: '5',
    name: 'Duygu K.',
    text: 'kendime çok yükleniyodum biraz daha rahatlamayı öğrendim diyebilirim hala devam ediyorum',
    rating: 5
  },
  {
    id: '6',
    name: 'Emre S.',
    text: 'her şey üst üste gelmişti buraya gelmek bana durup düşünme fırsatı verdi',
    rating: 5
  },
  {
    id: '7',
    name: 'Ayşe N.',
    text: 'içime attığım çok şey vardı konuşmak iyi geldi anlaşıldığımı hissettim',
    rating: 5
  },
  {
    id: '8',
    name: 'Kerem U.',
    text: 'sınav stresi yüzünden baya zorlanıyodum biraz daha sakin kalmayı öğrendim',
    rating: 5
  },
  {
    id: '9',
    name: 'Selin Y.',
    text: 'hep aynı şeyleri yaşıyodum nedenini fark etmeye başladım bu bile iyi geldi',
    rating: 5
  },
  {
    id: '10',
    name: 'Onur G.',
    text: 'başta kararsızdım ama denemek istedim beklediğimden daha iyi geçti',
    rating: 5
  }
];
