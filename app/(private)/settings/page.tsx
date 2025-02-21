import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import UserInfo from '@/components/user/user-info'
import { Bookmarks } from '@/components/user/bookmarks'
import {
  AlertCircle,
  Bookmark,
  Gift,
  KeyRound,
  Lock,
  Settings,
  Shield,
  Smartphone,
  User,
} from 'lucide-react'

export default function SettingsPage() {
  return (
    <div className='container mx-auto max-w-4xl pt-8 pb-4 px-4'>
      <div className='mb-8'>
        <h1 className='text-3xl font-bold'>Hesap Ayarları</h1>
        <p className='text-muted-foreground'>Hesap tercihlerinizi yönetin</p>
      </div>

      <Tabs defaultValue='profile' className='space-y-4'>
        <TabsList className='w-full border-b rounded-none bg-transparent p-0 h-auto'>
          <TabsTrigger
            value='profile'
            className='flex items-center gap-2 rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent'>
            <User size={16} />
            Profil
          </TabsTrigger>
          <TabsTrigger
            value='security'
            className='flex items-center gap-2 rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent'>
            <Lock size={16} />
            Güvenlik
          </TabsTrigger>
          <TabsTrigger
            value='bookmarks'
            className='flex items-center gap-2 rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent'>
            <Bookmark size={16} />
            Kaydedilenler
          </TabsTrigger>
          <TabsTrigger
            value='premium'
            className='flex items-center gap-2 rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent'>
            <Gift size={16} />
            Premium
          </TabsTrigger>
          <TabsTrigger
            value='preferences'
            className='flex items-center gap-2 rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent'>
            <Settings size={16} />
            Tercihler
          </TabsTrigger>
        </TabsList>

        <TabsContent value='profile' className='space-y-4 pt-4'>
          <UserInfo />
        </TabsContent>

        <TabsContent value='security' className='space-y-6'>
          <Card>
            <CardHeader>
              <CardTitle>Şifre Değiştir</CardTitle>
              <CardDescription>
                Hesabınızın güvenliği için şifrenizi düzenli olarak değiştirin
              </CardDescription>
            </CardHeader>
            <CardContent className='space-y-4'>
              <div className='grid gap-2'>
                <Label htmlFor='current-password'>Mevcut Şifre</Label>
                <Input id='current-password' type='password' />
              </div>
              <div className='grid gap-2'>
                <Label htmlFor='new-password'>Yeni Şifre</Label>
                <Input id='new-password' type='password' />
              </div>
              <div className='grid gap-2'>
                <Label htmlFor='confirm-password'>Yeni Şifre Tekrar</Label>
                <Input id='confirm-password' type='password' />
              </div>
              <Button>Şifreyi Güncelle</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>İki Faktörlü Doğrulama</CardTitle>
              <CardDescription>Hesabınıza ekstra güvenlik katmanı ekleyin</CardDescription>
            </CardHeader>
            <CardContent className='space-y-6'>
              <div className='flex items-center justify-between space-x-2'>
                <div className='flex gap-2'>
                  <Smartphone className='h-5 w-5 text-muted-foreground' />
                  <div>
                    <Label>SMS ile Doğrulama</Label>
                    <p className='text-sm text-muted-foreground'>
                      Her girişte telefonunuza kod gönderilir
                    </p>
                  </div>
                </div>
                <Switch defaultChecked />
              </div>

              <div className='flex items-center justify-between space-x-2'>
                <div className='flex gap-2'>
                  <Shield className='h-5 w-5 text-muted-foreground' />
                  <div>
                    <Label>Authenticator Uygulaması</Label>
                    <p className='text-sm text-muted-foreground'>
                      Google Authenticator veya benzeri uygulamalar ile doğrulama
                    </p>
                  </div>
                </div>
                <Switch />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Oturum Yönetimi</CardTitle>
              <CardDescription>Aktif oturumlarınızı görüntüleyin ve yönetin</CardDescription>
            </CardHeader>
            <CardContent className='space-y-4'>
              <div className='flex items-center justify-between py-2 border-b'>
                <div className='flex items-center gap-4'>
                  <KeyRound className='h-5 w-5 text-muted-foreground' />
                  <div>
                    <p className='font-medium'>Windows - Chrome</p>
                    <p className='text-sm text-muted-foreground'>İstanbul, TR • Aktif</p>
                  </div>
                </div>
                <Button variant='outline' size='sm'>
                  Oturumu Kapat
                </Button>
              </div>
              <div className='flex items-center justify-between py-2 border-b'>
                <div className='flex items-center gap-4'>
                  <KeyRound className='h-5 w-5 text-muted-foreground' />
                  <div>
                    <p className='font-medium'>iPhone 13</p>
                    <p className='text-sm text-muted-foreground'>İstanbul, TR • 2 saat önce</p>
                  </div>
                </div>
                <Button variant='outline' size='sm'>
                  Oturumu Kapat
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value='bookmarks'>
          <Card>
            <CardHeader>
              <CardTitle>Kaydedilenler</CardTitle>
              <CardDescription>Kaydettiğiniz gönderiler ve kod parçacıkları</CardDescription>
            </CardHeader>
            <CardContent>
              <Bookmarks />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value='premium'>
          <Card>
            <CardHeader>
              <div className='flex items-center gap-2'>
                <CardTitle>Premium Özellikler</CardTitle>
                <span className='bg-yellow-500/10 text-yellow-500 text-xs font-medium px-2 py-1 rounded-full'>
                  Yakında
                </span>
              </div>
              <CardDescription>Premium üyelik avantajlarını keşfedin</CardDescription>
            </CardHeader>
            <CardContent>
              <div className='rounded-lg border p-4'>
                <div className='flex items-center gap-2 text-muted-foreground'>
                  <AlertCircle className='h-5 w-5' />
                  <p>Premium özellikler yakında kullanıma açılacak.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value='preferences'>
          <Card>
            <CardHeader>
              <CardTitle>Tercihler</CardTitle>
              <CardDescription>Uygulama tercihlerinizi özelleştirin</CardDescription>
            </CardHeader>
            <CardContent className='space-y-6'>
              <div className='flex items-center justify-between space-x-2'>
                <div>
                  <Label>Email Bildirimleri</Label>
                  <p className='text-sm text-muted-foreground'>
                    Önemli güncellemeler hakkında email alın
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className='flex items-center justify-between space-x-2'>
                <div>
                  <Label>Otomatik Oynatma</Label>
                  <p className='text-sm text-muted-foreground'>Video içerikleri otomatik oynat</p>
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
