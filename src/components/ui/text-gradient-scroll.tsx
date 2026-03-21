import { cn } from "@/lib/utils"

type TextOpacityEnum = "none" | "soft" | "medium"
type ViewTypeEnum = "word" | "letter"

type TextGradientScrollType = {
  text: string
  type?: ViewTypeEnum
  className?: string
  textOpacity?: TextOpacityEnum
}

function TextGradientScroll({ text, className }: TextGradientScrollType) {
  return (
    <p className={cn("relative flex m-0 flex-wrap", className)}>
      {text}
    </p>
  )
}

export { TextGradientScroll }
