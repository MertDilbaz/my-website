# Kişisel Web Sitesi — İçerik Güncellemesi (Kasım 2026)

## Kapsam
Mevcut Laravel + Inertia + React + GSAP yapısı, karanlık tema, tipografi,
kart yapısı, animasyonlar ve responsive stiller korunmuştur. **Proje görseli eklenmemiştir.**

## Değişiklikler
- Hero: mesleki unvan `Software Engineer`, yeni backend/AI odaklı tanıtım,
  Java/Go/Spring Boot odak bilgisi.
- About: Ekim 2026 mezuniyet, 3.09 GANO, doğru EYOSoft kronolojisi,
  Mevzun ve Banking AI Harness tanıtımı ve Samsung AI eğitimi.
- Skills: Go, veri katmanı, Wails/Svelte ve LLM tool calling/MCP eklendi;
  dört kartlık mevcut tasarım korundu.
- Work: Mevzun, Banking AI Harness ve My Smart Garden için metin tabanlı
  kartlar ve mevcut modal üzerinden detaylı case study yazıları.
  Projelerin prototip/geliştirme durumları açıkça belirtildi; özel repolar
  için gerçek olmayan GitHub linkleri eklenmedi.
- GetAJob, Pixel Asset Generator ve Manul Sentinel ana portföyden çıkarıldı.
- Writing: gerçek yayımlanmış içerik olarak teyit edilemeyen taslak metinler
  (bunlardan biri mezuniyet tarihinden önce mezuniyet iddia ediyordu) ve
  menü bağlantısı kaldırıldı. Yerine `experience` navigasyonu eklendi.
- Experience: EYOSoft `Software Engineering Intern` (Şub–Ağu 2026),
  mezuniyet (Ekim 2026), Samsung Innovation Campus `Artificial Intelligence`
  (1 Tem–7 Eki 2026), PDF sertifikasına açılabilir bağlantı.
- `public/MertDilbazCV.pdf`: ZIP içindeki Haziran 2026 tarihli eski CV,
  daha önce sağlanan 1 Kasım 2026 tarihli İngilizce CV ile değiştirildi.
- Meta title/description/OG alanları yeni unvana göre yenilendi.
- Footer'daki Laravel / React / GSAP ifadesi repo ile uyumlu olduğundan korundu.

## Dosyalar ve bağlantılar
- CV: `/MertDilbazCV.pdf`
- Samsung sertifikası: `/certificates/Samsung_Innovation_Campus_AI_Mert_Dilbaz.pdf`
- Kaynak verileri: `resources/js/data/` (profile, projects, skills, experience, nav)

## Kurulum / kontrol
```bash
npm ci
npm run types:check
npm run lint:check
npm run build
```
Laravel sunucusu için ayrıca PHP bağımlılıkları Composer ile kurulmalı,
`.env` hazırlanmalı ve Laravel'in normal başlatma adımları uygulanmalıdır.
Vite derlemesi tek başına Laravel uygulamasını ayağa kaldırmaz.

## Yayına alma öncesi not
- `My Smart Garden` gerçek kullanıma alınmış ürün olarak değil, pilot/prototip
  kapsamı olarak tanıtıldı. İlerleme durumuna göre metinler revize edilebilir.
- Kaynak koda erişim sağlanmayan Mevzun / Banking AI Harness için verilen
  teknik bilgiler proje beyanlarına dayanıyor; kaynak kod denetimi yapılmadı.
- Özgeçmiş daha önce sağlanan en güncel erişilebilir İngilizce PDF sürümüdür.
  Yeni bir CV sürümü oluşursa `public/MertDilbazCV.pdf` değiştirilmelidir.
