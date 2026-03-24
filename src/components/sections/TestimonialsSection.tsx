import { motion } from "framer-motion"
import { TestimonialsColumn } from "@/components/ui/testimonials-column"

const testimonials = [
  {
    text: "Работаем с Металлором уже три года. Всегда точное попадание по размерам, документы приходят вовремя, менеджер на связи.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    name: "Наталья Орлова",
    role: "Снабженец в СтройМонтаж",
  },
  {
    text: "Заказывали проволоку вязальную оптом — цена ниже рынка, качество соответствует ГОСТ. Рекомендуем партнёрам.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    name: "Игорь Зайцев",
    role: "Директор по закупкам в ЖБИ-Урал",
  },
  {
    text: "Отгрузили 15 тонн метизов за один день. Для нас это критично — производство не останавливается.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    name: "Светлана Кузнецова",
    role: "Руководитель отдела снабжения в МеталлСтрой",
  },
  {
    text: "Нашли нужный диаметр проволоки, которого нет у конкурентов. Сертификаты предоставили сразу — без лишних вопросов.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    name: "Алексей Громов",
    role: "Технолог в ПромМеталл",
  },
  {
    text: "Постоянный поставщик крепежа для нашего завода. Ни одного срыва поставки за два года сотрудничества.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    name: "Марина Федотова",
    role: "Коммерческий директор в АвтоКомплект",
  },
  {
    text: "Цены честные, без скрытых наценок. Всегда выставляют счёт день в день — бухгалтерия довольна.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    name: "Виктор Соколов",
    role: "CEO в РемСнаб",
  },
  {
    text: "Делаем крупные заказы раз в квартал. Металлор всегда предупреждает об изменениях цен заранее — можно планировать бюджет.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
    name: "Юлия Петрова",
    role: "Финансовый директор в ГарантСтрой",
  },
  {
    text: "Заказывали сетку сварную под нестандартный проект — изготовили и доставили точно в срок. Отличная работа!",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
    name: "Дмитрий Нефёдов",
    role: "Прораб в ЖилСтройПроект",
  },
  {
    text: "Удобно работать через менеджера — сам подбирает аналоги если нужного нет в наличии. Экономит время.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    name: "Ольга Синицына",
    role: "Начальник склада в ПромТехника",
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