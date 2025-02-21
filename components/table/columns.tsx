'use client'

import { ColumnDef } from '@tanstack/react-table'
import { MoreHorizontal, ArrowUpDown, Archive, Share, Heart, Eye, Trash } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export const columns: ColumnDef<Post>[] = [
  /* status */
  {
    accessorKey: 'status',
    header: ({ column }) => {
      return (
        <div className='text-center'>
          <Button
            variant='ghost'
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
            className='w-full justify-center'>
            Gönderi Durumu
            <ArrowUpDown className='ml-2 h-4 w-4' />
          </Button>
        </div>
      )
    },
    cell: ({ getValue }) => {
      const value = getValue() as 'Taslak' | 'Yayında' | 'Arşivlendi'
      return (
        <p title={value} className='text-center'>
          {value === 'Taslak' ? 'Draft' : value === 'Yayında' ? 'Yayında' : 'Arşivlendi'}
        </p>
      )
    },
  },

  /* createdAt */
  {
    accessorKey: 'createdAt',
    header: ({ column }) => {
      return (
        <div className='text-center'>
          <Button
            variant='ghost'
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
            className='w-full justify-center'>
            Gönderi Tarihi
            <ArrowUpDown className='ml-2 h-4 w-4' />
          </Button>
        </div>
      )
    },
    cell: ({ getValue }) => {
      const value = getValue() as string
      return (
        <p title={value} className='text-center'>
          {value}
        </p>
      )
    },
  },

  /* content */
  {
    accessorKey: 'content',
    header: () => <p className='text-center'>Gönderi İçeriği</p>,
    cell: ({ getValue }) => {
      const value = getValue() as string
      const truncatedValue = value.length > 25 ? `${value.slice(0, 25)}...` : value
      return (
        <p title={value} className='text-center'>
          {truncatedValue}
        </p>
      )
    },
  },

  /* likes */
  {
    accessorKey: 'likes',
    header: () => (
      <p className='text-center flex items-center justify-center gap-2'>
        <Heart size={12} color='red' /> Beğeni Sayısı
      </p>
    ),
    cell: ({ getValue }) => {
      const value = getValue() as string
      return <p className='text-center'>{value}</p>
    },
  },

  /* actions */
  {
    id: 'actions',
    cell: ({ row }) => {
      const post = row.original as Post

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='ghost' className='h-8 w-8 p-0'>
              <span className='sr-only'>İşlemler</span>
              <MoreHorizontal className='h-4 w-4' />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuLabel>İşlemler</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={(e) => {
                e.stopPropagation()
                window.location.href = `/settings/${post.id}`
              }}
              className='cursor-pointer'>
              <Eye className='mr-2 h-4 w-4' />
              Detaylar
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={(e) => {
                e.stopPropagation()
                window.location.href = `/settings/${post.id}`
              }}
              className='cursor-pointer text-destructive'>
              <Trash className='mr-2 h-4 w-4' />
              Gönderiyi sil
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={(e) => e.stopPropagation()} className='text-yellow-500'>
              <Archive className='mr-2 h-4 w-4' />
              Arşivle
            </DropdownMenuItem>
            <DropdownMenuItem onClick={(e) => e.stopPropagation()} className='text-blue-500'>
              <Share className='mr-2 h-4 w-4' />
              Paylaş
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
