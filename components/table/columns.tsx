'use client'

import { ColumnDef } from '@tanstack/react-table'
import { MoreHorizontal, ArrowUpDown, Trash2, Archive, Share, Heart, Tag } from 'lucide-react'
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

  /* tags */
  {
    accessorKey: 'tags',
    header: () => (
      <p className='text-center flex items-center justify-center gap-2'>
        <Tag size={12} color='blue' /> Etiketleri
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
      const payment = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='ghost' className='h-8 w-8 p-0'>
              <span className='sr-only'>Open menu</span>
              <MoreHorizontal className='h-4 w-4' />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuLabel>İşlemler</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
              className='text-blue-500'>
              <Share />
              Gönderini paylaş
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className='text-red-500'>
              <Trash2 />
              Sil
            </DropdownMenuItem>
            <DropdownMenuItem className='text-yellow-500'>
              <Archive />
              Arşivle
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
