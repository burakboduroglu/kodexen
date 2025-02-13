'use client'

import { useState } from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Link from '@tiptap/extension-link'
import CodeBlock from '@tiptap/extension-code-block'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import {
  Bold,
  Italic,
  Code2,
  List,
  Send,
  Quote,
  Heading1,
  Heading2,
  Strikethrough,
  ListOrdered,
  Undo,
  Redo,
} from 'lucide-react'

const PostInput = () => {
  const [isLoading, setIsLoading] = useState(false)

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2],
        },
        history: {
          depth: 100, // Increase undo/redo stack
        },
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: 'text-primary underline',
        },
      }),
      CodeBlock.configure({
        HTMLAttributes: {
          class: 'rounded-md bg-muted p-4 font-mono',
        },
      }),
    ],
    content: '',
    editorProps: {
      attributes: {
        class: 'prose prose-sm dark:prose-invert focus:outline-none max-w-none min-h-[120px] p-4',
      },
      handleDOMEvents: {
        // Ensure editor keeps focus after button clicks
        mousedown: (view, event) => {
          if ((event.target as HTMLElement).tagName === 'BUTTON') {
            event.preventDefault()
            return true
          }
          return false
        },
      },
    },
    onFocus: ({ editor }) => {
      // Ensure editor state is updated
      editor.commands.focus()
    },
  })

  const handleSubmit = async () => {
    if (!editor?.getText().trim()) return

    setIsLoading(true)
    try {
      // TODO: Implement post creation logic
      console.log('Post content:', editor.getHTML())
    } catch (error) {
      console.error('Error creating post:', error)
    } finally {
      setIsLoading(false)
      editor?.commands.clearContent()
    }
  }

  const MenuBar = () => {
    if (!editor) return null

    return (
      <div className='flex flex-wrap items-center gap-1 p-2 border-b'>
        <div className='flex gap-1 mr-2 border-r pr-2'>
          <Button
            variant='ghost'
            size='icon'
            title='Başlık 1'
            onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
            className={editor.isActive('heading', { level: 1 }) ? 'bg-muted' : ''}>
            <Heading1 className='h-4 w-4' />
          </Button>
          <Button
            variant='ghost'
            size='icon'
            title='Başlık 2'
            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            className={editor.isActive('heading', { level: 2 }) ? 'bg-muted' : ''}>
            <Heading2 className='h-4 w-4' />
          </Button>
        </div>

        <div className='flex gap-1 mr-2 border-r pr-2'>
          <Button
            variant='ghost'
            size='icon'
            title='Kalın'
            onClick={() => {
              editor.chain().focus().toggleBold().run()
              // Force editor to update
              editor.commands.focus()
            }}
            className={editor.isActive('bold') ? 'bg-muted' : ''}>
            <Bold className='h-4 w-4' />
          </Button>
          <Button
            variant='ghost'
            size='icon'
            title='İtalik'
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={editor.isActive('italic') ? 'bg-muted' : ''}>
            <Italic className='h-4 w-4' />
          </Button>
          <Button
            variant='ghost'
            size='icon'
            title='Üstü Çizili'
            onClick={() => editor.chain().focus().toggleStrike().run()}
            className={editor.isActive('strike') ? 'bg-muted' : ''}>
            <Strikethrough className='h-4 w-4' />
          </Button>
        </div>

        <div className='flex gap-1 mr-2 border-r pr-2'>
          <Button
            variant='ghost'
            size='icon'
            title='Sırasız Liste'
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={editor.isActive('bulletList') ? 'bg-muted' : ''}>
            <List className='h-4 w-4' />
          </Button>
          <Button
            variant='ghost'
            size='icon'
            title='Sıralı Liste'
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={editor.isActive('orderedList') ? 'bg-muted' : ''}>
            <ListOrdered className='h-4 w-4' />
          </Button>
        </div>

        <div className='flex gap-1 mr-2 border-r pr-2'>
          <Button
            variant='ghost'
            size='icon'
            title='Kod Bloğu'
            onClick={() => editor.chain().focus().toggleCodeBlock().run()}
            className={editor.isActive('codeBlock') ? 'bg-muted' : ''}>
            <Code2 className='h-4 w-4' />
          </Button>
          <Button
            variant='ghost'
            size='icon'
            title='Alıntı'
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            className={editor.isActive('blockquote') ? 'bg-muted' : ''}>
            <Quote className='h-4 w-4' />
          </Button>
        </div>

        <div className='flex gap-1'>
          <Button
            variant='ghost'
            size='icon'
            title='Geri Al'
            onClick={() => editor.chain().focus().undo().run()}
            disabled={!editor.can().undo()}>
            <Undo className='h-4 w-4' />
          </Button>
          <Button
            variant='ghost'
            size='icon'
            title='İleri Al'
            onClick={() => editor.chain().focus().redo().run()}
            disabled={!editor.can().redo()}>
            <Redo className='h-4 w-4' />
          </Button>
        </div>
      </div>
    )
  }

  return (
    <Card className='w-full'>
      <MenuBar />
      <CardContent className='pt-4'>
        <EditorContent editor={editor} />
      </CardContent>
      <CardFooter className='flex justify-end py-4'>
        <Button
          onClick={handleSubmit}
          disabled={!editor?.getText().trim() || isLoading}
          className='gap-2'>
          {isLoading ? 'Paylaşılıyor...' : 'Paylaş'}
          <Send className='h-4 w-4' />
        </Button>
      </CardFooter>
    </Card>
  )
}

export default PostInput
