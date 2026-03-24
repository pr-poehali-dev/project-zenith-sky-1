import { Phone, Mail, MapPin } from "lucide-react"

const footerLinks = {
  product: [
    { label: "Медная катанка", href: "#pricing" },
    { label: "Медная проволока", href: "#pricing" },
    { label: "Сварочная проволока", href: "#pricing" },
    { label: "Производство под заказ", href: "#pricing" },
  ],
  company: [
    { label: "О производстве", href: "#features" },
    { label: "Лаборатория качества", href: "#features" },
    { label: "Отзывы клиентов", href: "#testimonials" },
    { label: "Контакты", href: "#" },
  ],
  legal: [
    { label: "Политика конфиденциальности", href: "#" },
    { label: "Реквизиты", href: "#" },
    { label: "Оферта", href: "#" },
  ],
}

export function FooterSection() {
  return (
    <footer className="px-6 py-16 border-t border-zinc-900">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="font-display text-xl font-semibold text-zinc-100">
              Медная катанка и проволока
            </a>
            <p className="mt-4 text-sm text-zinc-500 max-w-xs">
              Производство медной бескислородной катанки и проволоки с 2005 года. Прямые поставки от завода-изготовителя.
            </p>
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2 text-sm text-zinc-500">
                <Phone className="w-4 h-4 shrink-0" />
                <span>+7 (495) 000-00-00</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-zinc-500">
                <Mail className="w-4 h-4 shrink-0" />
                <span>info@metallor.ru</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-zinc-500">
                <MapPin className="w-4 h-4 shrink-0" />
                <span>Москва, склад на Варшавском шоссе</span>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-zinc-100 mb-4">Продукт</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-zinc-100 mb-4">Компания</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-zinc-100 mb-4">Правовая информация</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-600">© {new Date().getFullYear()} Медная катанка и проволока от производителя. Все права защищены.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-zinc-500 hover:text-zinc-300 transition-colors" aria-label="ВКонтакте">
              <Phone className="w-5 h-5" />
            </a>
            <a href="#" className="text-zinc-500 hover:text-zinc-300 transition-colors" aria-label="Telegram">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}