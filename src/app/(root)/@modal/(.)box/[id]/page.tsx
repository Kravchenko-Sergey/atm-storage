import BoxModal from '@/components/shared/modals/box-modal'
import Container from '@/components/shared/container'

export default function ItemModalPage() {
  return (
    <Container className='flex flex-col my-10'>
      <BoxModal className='w-[92%] rounded-md' />
    </Container>
  )
}
