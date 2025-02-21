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
  User,
} from 'lucide-react'
import Link from 'next/link'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

interface PostCardProps {
  post?: Post
  isDetailsView?: boolean
}

export function PostCard({ post, isDetailsView = false }: PostCardProps) {
  const [isCopied, setIsCopied] = useState(false)

  const handleCopyCode = async (code: string) => {
    await navigator.clipboard.writeText(code)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  const contentWithoutTags = post?.content.replace(/#\w+\s?/g, '').trim()

  return (
    <Card className={`p-2 sm:p-4 ${!isDetailsView ? 'cursor-pointer border-none' : ''}`}>
      <div className='flex gap-2 sm:gap-4 border-b-2 pb-4'>
        {/* Avatar */}
        <Avatar className='w-8 h-8 sm:w-10 sm:h-10 border border-primary flex justify-center items-center'>
          <User />
        </Avatar>

        <div className='flex-1 min-w-0'>
          {/* Post Header */}
          <div className='flex items-center gap-1 sm:gap-2 flex-wrap'>
            <Link
              href={`/u/${post?.author.username}`}
              className='font-semibold hover:underline truncate'>
              {post?.author.name}
            </Link>
            <span className='text-muted-foreground text-xs sm:text-sm'>
              @{post?.author.username}
            </span>
            <span className='text-muted-foreground text-xs sm:text-sm'>·</span>
            <span className='text-muted-foreground text-xs sm:text-sm'>
              {formatDistanceToNow(new Date(post?.createdAt || 0), { addSuffix: true })}
            </span>
          </div>

          {/* Post Content */}
          <p className='mt-2 text-sm break-words'>{contentWithoutTags}</p>

          {/* Link Preview */}
          {post?.linkPreview && (
            <div className='mt-4 border rounded-md p-2 sm:p-4'>
              <div className='flex items-center gap-2'>
                <LinkIcon className='w-4 h-4 text-muted-foreground' />
                <span className='text-sm font-medium truncate'>{post.linkPreview.title}</span>
              </div>
              <a
                href={post.linkPreview.url}
                target='_blank'
                rel='noopener noreferrer'
                className='text-xs sm:text-sm text-muted-foreground hover:underline mt-1 block truncate'>
                {post.linkPreview.url}
              </a>
            </div>
          )}

          {/* Code Snippet */}
          {post?.codeSnippet && (
            <div className='mt-4 rounded-md overflow-hidden'>
              <div className='flex justify-between items-center bg-muted px-2 sm:px-4 py-2'>
                <span className='text-xs sm:text-sm font-medium'>{post.codeSnippet.language}</span>
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
                  fontSize: '0.875rem',
                }}>
                {post.codeSnippet.code}
              </SyntaxHighlighter>
            </div>
          )}

          {/* Tags */}
          {post?.tags.length ||
            (0 > 0 && (
              <div className='flex flex-wrap gap-2 mt-2'>
                {post?.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/tag/${tag}`}
                    className='text-blue-500 hover:underline text-xs sm:text-sm'>
                    #{tag}
                  </Link>
                ))}
              </div>
            ))}

          {/* Like, Comments and Shares */}
          <div className='flex gap-4 sm:gap-6 mt-4'>
            <button className='flex items-center gap-1 sm:gap-2 text-muted-foreground hover:text-primary transition-colors'>
              <Heart className='w-4 h-4' />
              <span className='text-xs sm:text-sm'>{post?.likes}</span>
            </button>
            <button className='flex items-center gap-1 sm:gap-2 text-muted-foreground hover:text-primary transition-colors'>
              <MessageCircle className='w-4 h-4' />
              <span className='text-xs sm:text-sm'>{post?.comments}</span>
            </button>
            <button className='flex items-center gap-1 sm:gap-2 text-muted-foreground hover:text-primary transition-colors'>
              <Share2 className='w-4 h-4' />
              <span className='text-xs sm:text-sm'>{post?.shares}</span>
            </button>
            <button className='flex items-center gap-1 sm:gap-2 text-muted-foreground hover:text-primary transition-colors ml-auto'>
              <BookmarkPlus className='w-4 h-4' />
            </button>
          </div>
        </div>
      </div>
    </Card>
  )
}
