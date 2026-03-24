import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { LiquidCtaButton } from "@/components/buttons/LiquidCtaButton"
import Icon from "@/components/ui/icon"

interface RequestFormModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const PRODUCT_OPTIONS = [
  { value: "catanka", label: "Медная катанка" },
  { value: "wire", label: "Медная проволока" },
  { value: "welding", label: "Сварочная проволока" },
  { value: "custom", label: "Производство под заказ" },
]

export function RequestFormModal({ open, onOpenChange }: RequestFormModalProps) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    product: "",
    diameter: "",
    volume: "",
    comment: "",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  function handleChange(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus("loading")
    try {
      const func2url = await import("../../func2url.json")
      const url = func2url["submit-request"]
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error("error")
      setStatus("success")
    } catch {
      setStatus("error")
    }
  }

  function handleClose(open: boolean) {
    if (!open) {
      setStatus("idle")
      setForm({ name: "", phone: "", product: "", diameter: "", volume: "", comment: "" })
    }
    onOpenChange(open)
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="bg-zinc-900 border-zinc-800 text-zinc-100 max-w-md">
        <DialogHeader>
          <DialogTitle className="text-zinc-100 text-xl font-semibold">Заявка на расчёт стоимости</DialogTitle>
          <DialogDescription className="text-zinc-500">
            Укажите нужные параметры — менеджер свяжется с вами в течение 15 минут.
          </DialogDescription>
        </DialogHeader>

        {status === "success" ? (
          <div className="flex flex-col items-center gap-4 py-8 text-center">
            <div className="w-14 h-14 rounded-full bg-emerald-500/10 flex items-center justify-center">
              <Icon name="CheckCircle" size={28} className="text-emerald-400" />
            </div>
            <p className="text-zinc-100 font-medium text-lg">Заявка отправлена!</p>
            <p className="text-zinc-500 text-sm">Наш менеджер свяжется с вами в ближайшее время.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-2">
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-1.5">
                <Label className="text-zinc-400 text-xs">Имя *</Label>
                <Input
                  required
                  placeholder="Иван Петров"
                  value={form.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className="bg-zinc-800 border-zinc-700 text-zinc-100 placeholder:text-zinc-600 focus-visible:ring-zinc-600"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label className="text-zinc-400 text-xs">Телефон *</Label>
                <Input
                  required
                  placeholder="+7 (999) 000-00-00"
                  value={form.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  className="bg-zinc-800 border-zinc-700 text-zinc-100 placeholder:text-zinc-600 focus-visible:ring-zinc-600"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <Label className="text-zinc-400 text-xs">Продукт</Label>
              <Select value={form.product} onValueChange={(v) => handleChange("product", v)}>
                <SelectTrigger className="bg-zinc-800 border-zinc-700 text-zinc-100 focus:ring-zinc-600">
                  <SelectValue placeholder="Выберите продукт" />
                </SelectTrigger>
                <SelectContent className="bg-zinc-800 border-zinc-700 text-zinc-100">
                  {PRODUCT_OPTIONS.map((opt) => (
                    <SelectItem key={opt.value} value={opt.value} className="focus:bg-zinc-700 focus:text-zinc-100">
                      {opt.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-1.5">
                <Label className="text-zinc-400 text-xs">Диаметр, мм</Label>
                <Input
                  placeholder="Например: 0.5"
                  value={form.diameter}
                  onChange={(e) => handleChange("diameter", e.target.value)}
                  className="bg-zinc-800 border-zinc-700 text-zinc-100 placeholder:text-zinc-600 focus-visible:ring-zinc-600"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label className="text-zinc-400 text-xs">Объём, тонн</Label>
                <Input
                  placeholder="Например: 5"
                  value={form.volume}
                  onChange={(e) => handleChange("volume", e.target.value)}
                  className="bg-zinc-800 border-zinc-700 text-zinc-100 placeholder:text-zinc-600 focus-visible:ring-zinc-600"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <Label className="text-zinc-400 text-xs">Комментарий</Label>
              <Textarea
                placeholder="Марка, ГОСТ, условия доставки и другие детали..."
                value={form.comment}
                onChange={(e) => handleChange("comment", e.target.value)}
                rows={3}
                className="bg-zinc-800 border-zinc-700 text-zinc-100 placeholder:text-zinc-600 focus-visible:ring-zinc-600 resize-none"
              />
            </div>

            {status === "error" && (
              <p className="text-red-400 text-sm text-center">Ошибка отправки. Позвоните нам напрямую.</p>
            )}

            <div className="flex justify-center pt-2">
              <LiquidCtaButton>
                {status === "loading" ? "Отправка..." : "Отправить заявку"}
              </LiquidCtaButton>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
