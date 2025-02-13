'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Switch } from '@/components/ui/switch'
import { Bell, Lock, User } from 'lucide-react'

export default function UserInfo() {
  return (
    <div className='container max-w-4xl py-6'>
      <div className='mb-8'>
        <h1 className='text-3xl font-bold'>Hesap Ayarları</h1>
        <p className='text-muted-foreground'>Hesap tercihlerinizi yönetin</p>
      </div>

      <Tabs defaultValue='profile' className='space-y-4'>
        <TabsList>
          <TabsTrigger value='profile' className='flex items-center gap-2'>
            <User size={16} />
            Profil
          </TabsTrigger>
          <TabsTrigger value='security' className='flex items-center gap-2'>
            <Lock size={16} />
            Güvenlik
          </TabsTrigger>
          <TabsTrigger value='notifications' className='flex items-center gap-2'>
            <Bell size={16} />
            Bildirimler
          </TabsTrigger>
        </TabsList>

        <TabsContent value='profile'>
          <Card>
            <CardHeader>
              <CardTitle>Profil Bilgileri</CardTitle>
              <CardDescription>Profil bilgilerinizi güncelleyin</CardDescription>
            </CardHeader>
            <CardContent className='space-y-4'>
              <div className='space-y-2'>
                <Label htmlFor='name'>İsim Soyisim</Label>
                <Input id='name' defaultValue='Burak Boduroglu' />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='email'>Email</Label>
                <Input id='email' type='email' defaultValue='ornek@kodexen.com' />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='bio'>Biyografi</Label>
                <textarea
                  id='bio'
                  className='w-full min-h-[100px] rounded-md border border-input bg-background px-3 py-2'
                  placeholder='Kendinizden bahsedin...'
                />
              </div>
              <Button disabled={true}>{true ? 'Kaydediliyor...' : 'Değişiklikleri Kaydet'}</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value='security'>
          <Card>
            <CardHeader>
              <CardTitle>Güvenlik Ayarları</CardTitle>
              <CardDescription>
                Şifrenizi değiştirin ve güvenlik tercihlerinizi yönetin
              </CardDescription>
            </CardHeader>
            <CardContent className='space-y-4'>
              <div className='space-y-2'>
                <Label htmlFor='current-password'>Mevcut Şifre</Label>
                <Input id='current-password' type='password' />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='new-password'>Yeni Şifre</Label>
                <Input id='new-password' type='password' />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='confirm-password'>Yeni Şifre Tekrar</Label>
                <Input id='confirm-password' type='password' />
              </div>
              <Button disabled={true}>Şifreyi Güncelle</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value='notifications'>
          <Card>
            <CardHeader>
              <CardTitle>Bildirim Tercihleri</CardTitle>
              <CardDescription>Hangi bildirimler almak istediğinizi seçin</CardDescription>
            </CardHeader>
            <CardContent className='space-y-4'>
              <div className='flex items-center justify-between'>
                <div>
                  <Label>Email Bildirimleri</Label>
                  <p className='text-sm text-muted-foreground'>
                    Önemli güncellemeler hakkında email alın
                  </p>
                </div>
                <Switch />
              </div>
              <div className='flex items-center justify-between'>
                <div>
                  <Label>Yeni Takipçi Bildirimleri</Label>
                  <p className='text-sm text-muted-foreground'>
                    Biri sizi takip ettiğinde bildirim alın
                  </p>
                </div>
                <Switch />
              </div>
              <div className='flex items-center justify-between'>
                <div>
                  <Label>Yorum Bildirimleri</Label>
                  <p className='text-sm text-muted-foreground'>
                    Gönderilerinize yorum yapıldığında bildirim alın
                  </p>
                </div>
                <Switch />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
