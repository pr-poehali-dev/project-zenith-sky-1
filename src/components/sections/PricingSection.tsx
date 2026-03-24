import { Check } from "lucide-react"

const plans = [
  {
    name: "Розница",
    description: "Для строителей и мастеров — покупка от 1 кг",
    price: "от 1 кг",
    period: "",
    features: ["Самовывоз со склада", "Наличный и безналичный расчёт", "Консультация по ассортименту", "Сертификаты качества", "Отгрузка в день обращения"],
    cta: "Узнать цены",
    highlighted: false,
  },
  {
    name: "Опт",
    description: "Для предприятий и строительных компаний",
    price: "от 1 тонны",
    period: "",
    features: [
      "Скидки от объёма заказа",
      "Персональный менеджер",
      "Доставка по Москве и МО",
      "Отсрочка платежа",
      "Приоритетная обработка",
      "Счёт-фактура и УПД",
      "Онлайн согласование заявок",
    ],
    cta: "Запросить прайс",
    highlighted: true,
  },
  {
    name: "Договор",
    description: "Долгосрочное партнёрство для крупных заказчиков",
    price: "По запросу",
    period: "",
    features: [
      "Всё из пакета Опт",
      "Индивидуальные цены",
      "Резервирование на складе",
      "Доставка по всей России",
      "Юридическое сопровождение",
      "Гибкие условия оплаты",
      "Обучение и онбординг",
    ],
    cta: "Связаться с нами",
    highlighted: false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="px-6 py-24">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-4">Условия работы</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-zinc-100 mb-4">
            Удобно для любого объёма
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto text-balance text-lg">
            Работаем с физлицами, ИП и юридическими лицами. Никаких скрытых наценок.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`p-8 rounded-2xl border flex flex-col h-full ${
                plan.highlighted ? "bg-zinc-100 border-zinc-100" : "bg-zinc-900/50 border-zinc-800/50"
              }`}
            >
              {/* Plan Header */}
              <div className="mb-6">
                <h3
                  className={`font-heading text-xl font-semibold mb-2 ${
                    plan.highlighted ? "text-zinc-900" : "text-zinc-100"
                  }`}
                >
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.highlighted ? "text-zinc-600" : "text-zinc-500"}`}>{plan.description}</p>
              </div>

              {/* Price */}
              <div className="mb-6">
                <span
                  className={`font-display text-4xl font-bold ${plan.highlighted ? "text-zinc-900" : "text-zinc-100"}`}
                >
                  {plan.price}
                </span>
                <span className={`text-sm ${plan.highlighted ? "text-zinc-600" : "text-zinc-500"}`}>{plan.period}</span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 shrink-0 ${plan.highlighted ? "text-zinc-900" : "text-zinc-400"}`} />
                    <span className={`text-sm ${plan.highlighted ? "text-zinc-700" : "text-zinc-400"}`}>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#"
                className={`block w-full py-3 px-6 text-center rounded-full font-medium text-sm transition-colors mt-auto ${
                  plan.highlighted
                    ? "bg-zinc-900 text-zinc-100 hover:bg-zinc-800"
                    : "bg-zinc-800 text-zinc-100 hover:bg-zinc-700"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}