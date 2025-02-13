'use client'

import { useState } from 'react'
import Editor from './editor'

export default function PostInput() {
  const [content, setContent] = useState('')

  return <Editor editorContent={content} onChange={(newContent) => setContent(newContent)} />
}
