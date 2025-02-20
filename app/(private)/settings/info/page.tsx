import UserInfo from "@/components/user/user-info";

export default function UserInfoPage() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="container max-w-4xl pt-8 pb-4 px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Hesap Ayarları</h1>
          <p className="text-muted-foreground">Hesap tercihlerinizi yönetin</p>
        </div>
        <UserInfo />
      </div>
    </div>
  );
}
