import { motion } from "framer-motion"
import { TestimonialsColumn } from "@/components/ui/testimonials-column"

const testimonials = [
  {
    text: "Работаем с этим поставщиком уже пять лет. Медная катанка всегда стабильного качества, документы оформлены по всем требованиям.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    name: "Наталья Орлова",
    role: "Снабженец, кабельный завод",
  },
  {
    text: "Заказываем медную сварочную проволоку регулярно. Цена ниже, чем у трейдеров, а качество — как от производителя и есть.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    name: "Игорь Зайцев",
    role: "Директор по закупкам, машиностроительный завод",
  },
  {
    text: "Нужна была обмоточная проволока ø0,3 мм под нестандартный заказ. Изготовили партию точно в срок, отклонение по диаметру в норме.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    name: "Светлана Кузнецова",
    role: "Технолог, предприятие по перемотке электродвигателей",
  },
  {
    text: "Нашли нужный диаметр медной проволоки, которого нет у других поставщиков. Сертификат соответствия предоставили сразу.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    name: "Алексей Громов",
    role: "Главный технолог, электротехнический завод",
  },
  {
    text: "Постоянный поставщик катанки для нашего производства. Собственная лаборатория — это чувствуется по стабильности партий.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    name: "Марина Федотова",
    role: "Коммерческий директор, кабельное предприятие",
  },
  {
    text: "Прямые поставки от производителя — это реальная экономия. Раньше переплачивали посредникам, теперь работаем напрямую.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    name: "Виктор Соколов",
    role: "Директор, производство намоточных изделий",
  },
  {
    text: "Делаем крупные заказы раз в квартал. Всегда предупреждают об изменениях цен заранее — можно планировать бюджет.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
    name: "Юлия Петрова",
    role: "Финансовый директор, энергетическая компания",
  },
  {
    text: "Заказывали медную проволоку под сварочные работы — качество на уровне, шов чистый, брака не было ни разу.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
    name: "Дмитрий Нефёдов",
    role: "Руководитель сварочного цеха",
  },
  {
    text: "Менеджер помог подобрать марку под наш тип изоляции. Работаем только с этим производителем уже третий год подряд.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    name: "Ольга Синицына",
    role: "Начальник отдела снабжения, кабельный завод",
  },
]

const firstColumn = testimonials.slice(0, 3)
const secondColumn = testimonials.slice(3, 6)
const thirdColumn = testimonials.slice(6, 9)

const logos = ["СтройМонтаж", "ЖБИ-Урал", "МеталлСтрой", "ПромМеталл", "АвтоКомплект", "РемСнаб", "ГарантСтрой"]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="px-6 py-24 bg-zinc-900/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-xl mx-auto mb-12"
        >
          <div className="border border-zinc-800 py-1.5 px-4 rounded-full text-sm text-zinc-400">Отзывы</div>

          <h2 className="font-display text-4xl md:text-5xl font-bold text-zinc-100 mt-6 text-center tracking-tight">
            Что говорят наши клиенты
          </h2>
          <p className="text-center mt-4 text-zinc-500 text-lg text-balance">
            Нам доверяют предприятия по всей России уже более 10 лет.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>

        <div className="mt-16 pt-16 border-t border-zinc-800/50">
          <p className="text-center text-sm text-zinc-500 mb-8">Нас выбирают ведущие предприятия страны</p>
          <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <motion.div
              className="flex gap-12 md:gap-16"
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                x: {
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              {/* Duplicate logos for seamless loop */}
              {[...logos, ...logos].map((logo, index) => (
                <span
                  key={`${logo}-${index}`}
                  className="text-xl font-semibold text-zinc-700 whitespace-nowrap flex-shrink-0"
                >
                  {logo}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}