import Container from '@/components/shared/container'
import ItemModal from '@/components/shared/modals/item-modal'

export default function ItemModalPage() {
  return (
    <Container className='flex flex-col my-10'>
      <ItemModal className='w-[92%] rounded-md' />
    </Container>
  )
}
