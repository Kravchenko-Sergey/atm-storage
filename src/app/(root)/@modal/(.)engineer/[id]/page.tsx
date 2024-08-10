import Container from '@/components/shared/container'
import EngineerModal from '@/components/shared/modals/engineer-modal'

export default function EngineerModalPage() {
  return (
    <Container className='flex flex-col my-10'>
      <EngineerModal className='w-[92%] rounded-md' />
    </Container>
  )
}
