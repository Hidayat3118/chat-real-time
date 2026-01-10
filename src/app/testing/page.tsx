import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function TooltipDemo() {
  return (
    <div className="group bg-red-400 hover:bg-red-500">
      <button className="bg-blue text-white rounded-2xl group-hover:bg-blue-700">hover</button>
    </div>
  )
}
