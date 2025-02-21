'use client'

import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Code, Tag, X, Copy, Check, Link as LinkIcon, Loader2, User } from 'lucide-react'
import Image from 'next/image'
import { CodeShareDialog } from './code-share-dialog'
import { LinkPreviewDialog } from './link-preview-dialog'
import { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

export default function PostInput() {
  const [content, setContent] = useState('')
  const [codeSnippet, setCodeSnippet] = useState<{
    code: string
    language: string
  } | null>(null)
  const [linkPreview, setLinkPreview] = useState<{
    url: string
    title: string
    image: string
  } | null>(null)
  const [tags, setTags] = useState<string[]>([])
  const [tagInput, setTagInput] = useState('')
  const [isTagDialogOpen, setIsTagDialogOpen] = useState(false)
  const [isCodeCopied, setIsCodeCopied] = useState(false)
  const [isLinkLoading, setIsLinkLoading] = useState(false)

  const hasContent = Boolean(content.trim() || codeSnippet || linkPreview || tags.length > 0)

  const handleAddTag = (e: React.FormEvent) => {
    e.preventDefault()
    const newTag = tagInput.trim().toLowerCase()
    if (newTag && !tags.includes(newTag)) {
      setTags((prev) => [...prev, newTag])
      setTagInput('')
      setIsTagDialogOpen(false)
    }
  }

  const handleRemoveTag = (tagToRemove: string) => {
    setTags((prev) => prev.filter((tag) => tag !== tagToRemove))
  }

  const handleCodeShare = (code: string, language: string) => {
    setCodeSnippet({ code, language })
  }

  const handleLinkShare = async (url: string) => {
    setIsLinkLoading(true)
    setLinkPreview({
      url,
      title: 'Loading preview...',
      image: '',
    })

    try {
      // Here you would typically fetch the link preview data
      // For now, we'll simulate a delay
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setLinkPreview((prev) => ({
        ...prev!,
        title: 'Preview Title', // This would come from your API
      }))
    } catch (error) {
      setLinkPreview(null)
    } finally {
      setIsLinkLoading(false)
    }
  }

  const handleCopyCode = async (code: string) => {
    await navigator.clipboard.writeText(code)
    setIsCodeCopied(true)
    setTimeout(() => setIsCodeCopied(false), 2000)
  }

  return (
    <div className='p-1 lg:p-4'>
      <div className='hidden lg:flex gap-4'>
        <Avatar className='w-10 h-10 border border-primary flex justify-center items-center'>
          <User />
        </Avatar>
        <div className='flex-1'>
          <Textarea
            value={content}
            onChange={(e) => {
              setContent(e.target.value)
            }}
            placeholder='Düşüncelerini paylaş...'
            className='min-h-[100px] resize-none'
          />

          {tags.length > 0 && (
            <div className='flex flex-wrap gap-2 mt-4'>
              {tags.map((tag) => (
                <div
                  key={tag}
                  className='flex items-center gap-1 bg-primary/10 text-primary rounded-full px-3 py-1'>
                  <span className='text-sm'>#{tag}</span>
                  <button onClick={() => handleRemoveTag(tag)} className='hover:text-primary/70'>
                    <X className='w-3 h-3' />
                  </button>
                </div>
              ))}
            </div>
          )}

          {linkPreview && (
            <div className='mt-4 border rounded-md p-4'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                  {isLinkLoading ? (
                    <Loader2 className='h-4 w-4 animate-spin text-muted-foreground' />
                  ) : (
                    <LinkIcon className='w-4 h-4 text-muted-foreground' />
                  )}
                  <span className='text-sm font-medium'>{linkPreview.title}</span>
                </div>
                <Button variant='ghost' size='sm' onClick={() => setLinkPreview(null)}>
                  Kaldır
                </Button>
              </div>
              <a
                href={linkPreview.url}
                target='_blank'
                rel='noopener noreferrer'
                className='text-sm text-muted-foreground hover:underline mt-1 block'>
                {linkPreview.url}
              </a>
            </div>
          )}

          {codeSnippet && (
            <div className='mt-4 rounded-md overflow-hidden'>
              <div className='flex justify-between items-center bg-muted px-4 py-2'>
                <span className='text-sm font-medium'>{codeSnippet.language}</span>
                <div className='flex gap-2'>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant='ghost'
                          size='sm'
                          className='h-8 w-8 p-0'
                          onClick={() => handleCopyCode(codeSnippet.code)}>
                          {isCodeCopied ? (
                            <Check className='h-4 w-4' />
                          ) : (
                            <Copy className='h-4 w-4' />
                          )}
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{isCodeCopied ? 'Copied!' : 'Copy code'}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <Button variant='ghost' size='sm' onClick={() => setCodeSnippet(null)}>
                    Kaldır
                  </Button>
                </div>
              </div>
              <SyntaxHighlighter
                language={codeSnippet.language}
                style={vscDarkPlus}
                customStyle={{
                  margin: 0,
                  borderRadius: '0 0 0.5rem 0.5rem',
                }}>
                {codeSnippet.code}
              </SyntaxHighlighter>
            </div>
          )}

          <div className='flex items-center justify-between mt-4'>
            <div className='flex gap-2'>
              <LinkPreviewDialog
                onShare={handleLinkShare}
                trigger={
                  <Button variant='ghost' size='sm'>
                    <LinkIcon className='w-4 h-4' />
                    Bağlantı
                  </Button>
                }
              />
              <CodeShareDialog
                onShare={handleCodeShare}
                trigger={
                  <Button variant='ghost' size='sm'>
                    <Code className='w-4 h-4' />
                    Kod
                  </Button>
                }
              />
              <Dialog open={isTagDialogOpen} onOpenChange={setIsTagDialogOpen}>
                <DialogTrigger asChild>
                  <Button variant='ghost' size='sm'>
                    <Tag className='w-4 h-4' />
                    Etiket
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Etiketi ekle</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleAddTag} className='flex gap-2'>
                    <Input
                      value={tagInput}
                      onChange={(e) => setTagInput(e.target.value)}
                      placeholder='Enter a tag...'
                      className='flex-1'
                    />
                    <Button type='submit' disabled={!tagInput.trim()}>
                      Ekle
                    </Button>
                  </form>
                  {tags.length > 0 && (
                    <div className='flex flex-wrap gap-2 mt-4'>
                      {tags.map((tag) => (
                        <div
                          key={tag}
                          className='flex items-center gap-1 bg-primary/10 text-primary rounded-full px-3 py-1'>
                          <span className='text-sm'>#{tag}</span>
                          <button
                            onClick={() => handleRemoveTag(tag)}
                            className='hover:text-primary/70'>
                            <X className='w-3 h-3' />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </DialogContent>
              </Dialog>
            </div>
            <Button disabled={!hasContent}>Paylaş</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
