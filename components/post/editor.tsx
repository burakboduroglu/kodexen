'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import { Extension } from '@tiptap/core'
import { Bold, Italic, Heading2, List, ListOrdered, Code2, Quote } from 'lucide-react'
import { common, createLowlight } from 'lowlight'
import python from 'highlight.js/lib/languages/python'
import ruby from 'highlight.js/lib/languages/ruby'
import javascript from 'highlight.js/lib/languages/javascript'

// Initialize lowlight with languages
const lowlight = createLowlight(common)
lowlight.register('python', python)
lowlight.register('ruby', ruby)
lowlight.register('javascript', javascript)

const CustomKeyboardShortcuts = Extension.create({
  name: 'customKeyboardShortcuts',
  addKeyboardShortcuts() {
    return {
      'Mod-b': () => this.editor.chain().focus().toggleBold().run(),
      'Mod-i': () => this.editor.chain().focus().toggleItalic().run(),
      'Mod-1': () => this.editor.chain().focus().toggleHeading({ level: 2 }).run(),
    }
  },
})

interface TipTapProps {
  editorContent: string
  onChange: (content: string) => void
}

const Tiptap = ({ editorContent, onChange }: TipTapProps) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        // Disable default codeBlock as we'll use CodeBlockLowlight
        codeBlock: false,
        // Configure built-in extensions
        heading: {
          levels: [2],
          HTMLAttributes: {
            class: 'text-xl font-bold capitalize',
          },
        },
        bulletList: {
          HTMLAttributes: {
            class: 'list-disc ml-2',
          },
        },
        orderedList: {
          HTMLAttributes: {
            class: 'list-decimal ml-2',
          },
        },
      }),
      CodeBlockLowlight.configure({
        lowlight,
        defaultLanguage: 'javascript',
        HTMLAttributes: {
          class: 'rounded-md bg-muted p-4 font-mono text-sm',
        },
      }),
      CustomKeyboardShortcuts,
    ],
    editorProps: {
      attributes: {
        class:
          'shadow appearance-none min-h-[150px] border rounded w-full py-2 px-3 bg-white text-black text-sm mt-0 md:mt-3 leading-tight focus:outline-none focus:shadow-outline',
      },
    },
    content: editorContent,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML())
    },
    immediatelyRender: false, // Add this line to fix SSR hydration
  })

  if (!editor) {
    return null
  }

  return (
    <div className='flex flex-col justify-stretch min-h-[200px] border rounded border-b-0'>
      <div className='flex items-center gap-2 mb-2 p-2 border-b'>
        <button
          type='button'
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`p-2 rounded hover:bg-gray-100 ${
            editor.isActive('bold') ? 'bg-gray-200' : ''
          }`}
          title='Bold (Ctrl+B)'>
          <Bold className='h-4 w-4' />
        </button>

        <button
          type='button'
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`p-2 rounded hover:bg-gray-100 ${
            editor.isActive('italic') ? 'bg-gray-200' : ''
          }`}
          title='Italic (Ctrl+I)'>
          <Italic className='h-4 w-4' />
        </button>

        <button
          type='button'
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={`p-2 rounded hover:bg-gray-100 ${
            editor.isActive('heading', { level: 2 }) ? 'bg-gray-200' : ''
          }`}
          title='Heading 2'>
          <Heading2 className='h-4 w-4' />
        </button>

        <button
          type='button'
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`p-2 rounded hover:bg-gray-100 ${
            editor.isActive('bulletList') ? 'bg-gray-200' : ''
          }`}
          title='Bullet List'>
          <List className='h-4 w-4' />
        </button>

        <button
          type='button'
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`p-2 rounded hover:bg-gray-100 ${
            editor.isActive('orderedList') ? 'bg-gray-200' : ''
          }`}
          title='Ordered List'>
          <ListOrdered className='h-4 w-4' />
        </button>

        <button
          type='button'
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={`p-2 rounded hover:bg-gray-100 ${
            editor.isActive('codeBlock') ? 'bg-gray-200' : ''
          }`}
          title='Code Block'>
          <Code2 className='h-4 w-4' />
        </button>

        <button
          type='button'
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={`p-2 rounded hover:bg-gray-100 ${
            editor.isActive('blockquote') ? 'bg-gray-200' : ''
          }`}
          title='Quote'>
          <Quote className='h-4 w-4' />
        </button>
      </div>

      <EditorContent editor={editor} />
    </div>
  )
}

export default Tiptap
