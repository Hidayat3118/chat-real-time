import React from 'react'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

const IconHover = ({Icon, textContent} : {Icon: React.ReactNode, textContent?: string}) => {
  return (
    <div>
        <Tooltip>
          <TooltipTrigger asChild>
            {Icon}
          </TooltipTrigger>
          <TooltipContent className="bg-primary-600 py-2 px-3 rounded-md border border-white/5">
            <p className="text-sm">{textContent}</p>
          </TooltipContent>
        </Tooltip>
    </div>
  )
}

export default IconHover