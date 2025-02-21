'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  Select,
  SelectContent,
} from '@/components/ui/select'
import { Bell, Globe, Lock, User } from 'lucide-react'

export default function UserInfo() {
  return (
    <div className='space-y-6'>
      <Card>
        <CardHeader>
          <CardTitle>Profil Bilgileri</CardTitle>
          <CardDescription>
            Profilinizi güncelleyin ve kişisel bilgilerinizi yönetin
          </CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='flex items-center gap-4'>
            <div className='h-20 w-20 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-2xl font-bold text-white'>
              B
            </div>
            <Button variant='outline'>Fotoğrafı Değiştir</Button>
          </div>

          <div className='grid gap-4 pt-4'>
            <div className='grid gap-2'>
              <Label htmlFor='name'>İsim</Label>
              <Input id='name' defaultValue='Burak Boduroglu' />
            </div>

            <div className='grid gap-2'>
              <Label htmlFor='username'>Kullanıcı Adı</Label>
              <Input id='username' defaultValue='burakboduroglu' />
            </div>

            <div className='grid gap-2'>
              <Label htmlFor='email'>Email</Label>
              <Input id='email' type='email' defaultValue='ornek@kodexen.com' />
            </div>

            <div className='grid gap-2'>
              <Label htmlFor='bio'>Biyografi</Label>
              <Textarea id='bio' placeholder='Kendinizden bahsedin...' className='min-h-[100px]' />
            </div>

            <div className='grid gap-2'>
              <Label htmlFor='location'>Konum</Label>
              <Input id='location' placeholder='İstanbul, Türkiye' />
            </div>

            <div className='grid gap-2'>
              <Label htmlFor='website'>Website</Label>
              <Input id='website' type='url' placeholder='https://' />
            </div>

            <div className='grid gap-2'>
              <Label>Profil Gizliliği</Label>
              <Select defaultValue='public'>
                <SelectTrigger>
                  <SelectValue placeholder='Profil gizliliğini seçin' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='public'>
                    <div className='flex items-center gap-2'>
                      <Globe className='h-4 w-4' />
                      <span>Herkese Açık</span>
                    </div>
                  </SelectItem>
                  <SelectItem value='followers'>
                    <div className='flex items-center gap-2'>
                      <User className='h-4 w-4' />
                      <span>Sadece Takipçiler</span>
                    </div>
                  </SelectItem>
                  <SelectItem value='private'>
                    <div className='flex items-center gap-2'>
                      <Lock className='h-4 w-4' />
                      <span>Gizli</span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className='flex justify-end pt-4'>
            <Button>Değişiklikleri Kaydet</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Bildirim Tercihleri</CardTitle>
          <CardDescription>Hangi konularda bildirim almak istediğinizi seçin</CardDescription>
        </CardHeader>
        <CardContent className='space-y-6'>
          <div className='flex items-center justify-between space-x-2'>
            <div className='flex gap-2'>
              <Bell className='h-5 w-5 text-muted-foreground' />
              <div>
                <Label htmlFor='comments'>Yorum Bildirimleri</Label>
                <p className='text-sm text-muted-foreground'>
                  Gönderilerinize yapılan yorumlardan haberdar olun
                </p>
              </div>
            </div>
            <Switch id='comments' defaultChecked />
          </div>

          <div className='flex items-center justify-between space-x-2'>
            <div className='flex gap-2'>
              <Bell className='h-5 w-5 text-muted-foreground' />
              <div>
                <Label htmlFor='mentions'>Bahsedilme Bildirimleri</Label>
                <p className='text-sm text-muted-foreground'>
                  Birisi sizi etiketlediğinde bildirim alın
                </p>
              </div>
            </div>
            <Switch id='mentions' defaultChecked />
          </div>

          <div className='flex items-center justify-between space-x-2'>
            <div className='flex gap-2'>
              <Bell className='h-5 w-5 text-muted-foreground' />
              <div>
                <Label htmlFor='follows'>Yeni Takipçi Bildirimleri</Label>
                <p className='text-sm text-muted-foreground'>
                  Yeni takipçilerinizden haberdar olun
                </p>
              </div>
            </div>
            <Switch id='follows' defaultChecked />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
