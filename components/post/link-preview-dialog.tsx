'use client'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { useState } from 'react'
import { Link as LinkIcon, Loader2 } from 'lucide-react'

interface LinkPreviewDialogProps {
  onShare: (url: string) => void
  trigger: React.ReactNode
}

export function LinkPreviewDialog({ onShare, trigger }: LinkPreviewDialogProps) {
  const [url, setUrl] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleShare = async () => {
    if (url.trim()) {
      if (url.match(/^https?:\/\/.+/)) {
        setIsLoading(true)
        setError(null)
        try {
          // Here you would typically validate the URL or fetch preview data
          // For now, we'll just simulate a delay
          await new Promise((resolve) => setTimeout(resolve, 1000))
          onShare(url.trim())
          setUrl('')
          setIsOpen(false)
        } catch (err) {
          setError('Failed to fetch link preview. Please try again.')
        } finally {
          setIsLoading(false)
        }
      } else {
        setError('Please enter a valid URL starting with http:// or https://')
      }
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Bağlantı Paylaş</DialogTitle>
        </DialogHeader>
        <div className='grid gap-4 py-4'>
          <div className='grid gap-2'>
            <div className='flex gap-2 items-center'>
              <LinkIcon className='w-4 h-4 text-muted-foreground' />
              <Input
                value={url}
                onChange={(e) => {
                  setUrl(e.target.value)
                  setError(null)
                }}
                placeholder='Enter URL (https://...)'
                className={error ? 'border-destructive' : ''}
                disabled={isLoading}
              />
            </div>
            {error && <p className='text-sm text-destructive'>{error}</p>}
          </div>
          <Button onClick={handleShare} disabled={!url.trim() || isLoading}>
            {isLoading ? (
              <>
                <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                Url alınıyor...
              </>
            ) : (
              'Add Link'
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
