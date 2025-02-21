'use client'

import { Button } from '@/components/ui/button'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Trash2, Loader2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useToast } from '@/hooks/use-toast'

interface DeletePostButtonProps {
  postId: string
  onDelete: (id: string) => Promise<boolean>
}

export function DeletePostButton({ postId, onDelete }: DeletePostButtonProps) {
  const router = useRouter()
  const { toast } = useToast()
  const [isDeleting, setIsDeleting] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const handleDelete = async () => {
    try {
      setIsDeleting(true)
      const success = await onDelete(postId)

      if (success) {
        toast({
          title: 'Gönderi silindi',
          description: 'Gönderi başarıyla silindi.',
          variant: 'success',
          duration: 3000,
        })
        setIsOpen(false)
        router.push('/settings/posts')
      }
    } catch (error) {
      console.error('Silme işlemi başarısız oldu: ', error)
      toast({
        title: 'Hata',
        description: 'Gönderi silinirken bir hata oluştu. Lütfen tekrar deneyin.',
        variant: 'destructive',
        duration: 3000,
      })
    } finally {
      setIsDeleting(false)
    }
  }

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger asChild>
        <Button variant='destructive' size='sm' disabled={isDeleting}>
          {isDeleting ? (
            <>
              <Loader2 className='w-4 h-4 mr-2 animate-spin' />
              Siliniyor...
            </>
          ) : (
            <>
              <Trash2 className='w-4 h-4 mr-2' />
              Gönderiyi Sil
            </>
          )}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Gönderiyi silmek istediğinize emin misiniz?</AlertDialogTitle>
          <AlertDialogDescription>
            Bu işlem geri alınamaz ve gönderi kalıcı olarak silinecektir.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            className='bg-destructive text-destructive-foreground hover:bg-destructive/90'
            onClick={handleDelete}>
            Sil
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
