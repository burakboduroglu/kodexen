'use client'
import { Avatar } from '@/components/ui/avatar'
import { Card } from '@/components/ui/card'
import { formatDistanceToNow } from 'date-fns'
import {
  MessageCircle,
  Heart,
  Share2,
  BookmarkPlus,
  Link as LinkIcon,
  Copy,
  Check,
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

interface PostCardProps {
  post: Post
  isDetailsView?: boolean
}

export function PostCard({ post, isDetailsView = false }: PostCardProps) {
  const [isCopied, setIsCopied] = useState(false)

  const handleCopyCode = async (code: string) => {
    await navigator.clipboard.writeText(code)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  return (
    <Card
      className={`p-4 ${
        !isDetailsView ? 'hover:bg-accent/50 transition-colors cursor-pointer' : ''
      }`}>
      <div className='flex gap-4'>
        <Avatar className='w-10 h-10'>
          <Image src={post.author.avatar} alt={post.author.name} width={40} height={40} />
        </Avatar>
        <div className='flex-1'>
          <div className='flex items-center gap-2'>
            <Link
              href={`/profile/${post.author.username}`}
              className='font-semibold hover:underline'>
              {post.author.name}
            </Link>
            <span className='text-muted-foreground text-sm'>@{post.author.username}</span>
            <span className='text-muted-foreground text-sm'>·</span>
            <span className='text-muted-foreground text-sm'>
              {formatDistanceToNow(new Date(post.createdAt))}
            </span>
          </div>

          <p className='mt-2 text-sm'>{post.content}</p>

          {post.linkPreview && (
            <div className='mt-4 border rounded-md p-4'>
              <div className='flex items-center gap-2'>
                <LinkIcon className='w-4 h-4 text-muted-foreground' />
                <span className='text-sm font-medium'>{post.linkPreview.title}</span>
              </div>
              <a
                href={post.linkPreview.url}
                target='_blank'
                rel='noopener noreferrer'
                className='text-sm text-muted-foreground hover:underline mt-1 block'>
                {post.linkPreview.url}
              </a>
            </div>
          )}

          {post.codeSnippet && (
            <div className='mt-4 rounded-md overflow-hidden'>
              <div className='flex justify-between items-center bg-muted px-4 py-2'>
                <span className='text-sm font-medium'>{post.codeSnippet.language}</span>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant='ghost'
                        size='sm'
                        className='h-8 w-8 p-0'
                        onClick={(e) => {
                          e.stopPropagation()
                          handleCopyCode(post.codeSnippet!.code)
                        }}>
                        {isCopied ? <Check className='h-4 w-4' /> : <Copy className='h-4 w-4' />}
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{isCopied ? 'Copied!' : 'Copy code'}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <SyntaxHighlighter
                language={post.codeSnippet.language}
                style={vscDarkPlus}
                customStyle={{
                  margin: 0,
                  borderRadius: '0 0 0.5rem 0.5rem',
                }}>
                {post.codeSnippet.code}
              </SyntaxHighlighter>
            </div>
          )}

          {post.tags.length > 0 && (
            <div className='flex gap-2 mt-2'>
              {post.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/tag/${tag}`}
                  className='text-primary hover:underline text-sm'>
                  #{tag}
                </Link>
              ))}
            </div>
          )}

          <div className='flex gap-6 mt-4'>
            <button className='flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors'>
              <Heart className='w-4 h-4' />
              <span className='text-sm'>{post.likes}</span>
            </button>
            <button className='flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors'>
              <MessageCircle className='w-4 h-4' />
              <span className='text-sm'>{post.comments}</span>
            </button>
            <button className='flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors'>
              <Share2 className='w-4 h-4' />
              <span className='text-sm'>{post.shares}</span>
            </button>
            <button className='flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors ml-auto'>
              <BookmarkPlus className='w-4 h-4' />
            </button>
          </div>
        </div>
      </div>
    </Card>
  )
}
