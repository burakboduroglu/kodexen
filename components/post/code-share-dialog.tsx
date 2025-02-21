'use client'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useState } from 'react'

const LANGUAGES = [
  'javascript',
  'typescript',
  'python',
  'java',
  'c++',
  'go',
  'rust',
  'ruby',
  'php',
  'swift',
  'kotlin',
  'sql',
]

interface CodeShareDialogProps {
  onShare: (code: string, language: string) => void
  trigger: React.ReactNode
}

export function CodeShareDialog({ onShare, trigger }: CodeShareDialogProps) {
  const [code, setCode] = useState('')
  const [language, setLanguage] = useState('javascript')
  const [isOpen, setIsOpen] = useState(false)

  const handleShare = () => {
    if (code.trim()) {
      onShare(code, language)
      setCode('')
      setIsOpen(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className='sm:max-w-[600px]'>
        <DialogHeader>
          <DialogTitle>Kod Paylaş</DialogTitle>
        </DialogHeader>
        <div className='grid gap-4 py-4'>
          <Select value={language} onValueChange={setLanguage}>
            <SelectTrigger>
              <SelectValue placeholder='Select language' />
            </SelectTrigger>
            <SelectContent>
              {LANGUAGES.map((lang) => (
                <SelectItem key={lang} value={lang}>
                  {lang.charAt(0).toUpperCase() + lang.slice(1)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder='Paste your code here...'
            className='min-h-[200px] font-mono'
          />
          <Button onClick={handleShare} disabled={!code.trim()}>
            Paylaş
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
