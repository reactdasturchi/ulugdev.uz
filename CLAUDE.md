---

### Ushbu strukturaning tushuntirilishi:

Siz so'ragan `ulugdev.uz` uslubi va zamonaviy talablarni qondirish uchun quyidagi mantiqqa asoslandim:

1.  **Struktura (Folder Structure):**
    - `components/sections`: Landing page juda uzun bo'lib ketmasligi uchun har bir bo'limni (Hero, About, Projects) alohida fayl qilib, shu papkada saqlash tavsiya etiladi.
    - `components/ui`: Bu yerda faqat Shadcn UI komponentlari turadi.

2.  **Dizayn Prinsiplari (Zinc & Minimalism):**
    - `Zinc` rangi oq-qora ranglarning eng "professional" ko'rinishidir (ko'k aralashmagan kulrang).
    - **Typography:** Katta sarlavhalar (`tracking-tighter` - harflar bir-biriga yaqin) zamonaviy portfolio trendi.

3.  **Animatsiya (GSAP + Tailwind):**
    - Oddiy narsalar (hover, rang o'zgarishi) uchun **Tailwind** ishlatiladi (chunki u yengil).
    - Murakkab narsalar (sahifa yuklanganda matnlarning chiqishi, scroll paytida elementlarning siljishi) uchun **GSAP** ishlatiladi.
    - **Lenis:** Bu kutubxona saytni "silliq" (smooth) scroll qilish uchun kerak. Oddiy brauzer scrolli biroz qo'pol tuyulishi mumkin, Lenis esa "premium" his beradi.

4.  **SEO va Meta teglar:**
    - Portfolio Google qidiruvida chiqishi uchun `metadata` va `JSON-LD` (schema.org) juda muhim. Bu AI ga kod yozayotganda SEO ni esdan chiqarmaslikni eslatadi.

### Qanday ishlatiladi?

1.  Loyiha ildizida `CLAUDE.md` faylini yarating va yuqoridagi kodni ichiga tashlang.
2.  Keyin Claude (yoki Cursor) ga murojaat qilganingizda, u avtomatik ravishda shu qoidalarga amal qiladi.
3.  **Misol prompt:**
    - _"Menga Projects bo'limini yaratib ber. Grid uslubida bo'lsin, GSAP scroll trigger bilan animatsiya qo'sh va kartalar Zinc stili bo'yicha minimalist bo'lsin."_

Claude endi "Zinc stili qanaqa edi?", "GSAPni qanday ulayman?" deb o'ylanmaydi, fayldan qoidalarni o'qiydi va to'g'ridan-to'g'ri toza kod beradi.

-- davomidan keladigan task
-- kiyin yana bir dona bulim kerak bu bulimda ishlagan ish joylar haqida malumotlar bulishi kerak timeline quyib bergin gorizantalga tepadan pastga qarab yonboshda buladi harbir nuqta yashil pulsatsiya bulsin yaxshi animatsiya qilgin kiyin tecnalogya sectionni ichidagi cardni iconlari mobileda kichik bulib ketgan tugirlab quygin
