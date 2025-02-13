import PostInput from '@/components/post/post-input'

const share = () => {
  return (
    <div className='container mx-auto p-5'>
      <h1 className='mb-5'>
        <span className='text-lg font-bold'>Düşüncelerinizi paylaşın</span>
        <p>
          <span className='text-sm text-gray-500'>
            Düşüncelerinizi paylaşın ve arkadaşlarınızla etkileşime geçin.
          </span>
        </p>
      </h1>
      <PostInput />
    </div>
  )
}

export default share
