import { Check } from "lucide-react"

const plans = [
  {
    name: "Катанка медная",
    description: "Бескислородная литая катанка для кабельно-проводниковой продукции",
    price: "",
    period: "",
    features: [
      "Диаметр ø6–8 мм",
      "Сырьё марки М1",
      "Соответствие ГОСТ Р 53803",
      "Паспорт качества на партию",
      "Отгрузка от 500 кг",
    ],
    cta: "Узнать цены",
    highlighted: false,
  },
  {
    name: "Медная проволока",
    description: "Проволока любого диаметра — от обмоточной до сварочной",
    price: "от производителя",
    period: "",
    features: [
      "Диаметр ø0,1–8 мм",
      "Сварочная и обмоточная",
      "Перемотка электродвигателей",
      "Персональный менеджер",
      "Прямые поставки без наценок",
      "Сертификаты на каждую партию",
      "Производство по ТУ и ГОСТ",
    ],
    cta: "Запросить прайс",
    highlighted: true,
  },
  {
    name: "Производство под заказ",
    description: "Изготовление нестандартных позиций по техническому заданию",
    price: "по ТЗ",
    period: "",
    features: [
      "Любой диаметр и сплав",
      "Согласование технических условий",
      "Собственная лаборатория",
      "Контроль каждого этапа",
      "Доставка по всей России",
      "Долгосрочные контракты",
      "Индивидуальные цены",
    ],
    cta: "Обсудить заказ",
    highlighted: false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="px-6 py-24">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-4">Продукция</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-zinc-100 mb-4">
            Катанка и проволока от производителя
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto text-balance text-lg">
            Работаем с предприятиями электроэнергетики, машиностроения, сварочного производства и перемотки электродвигателей.
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