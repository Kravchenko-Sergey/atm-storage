import Container from '@/components/shared/container'
import BoxList from '@/components/shared/box-list'

export default function Home() {
  return (
    <main>
      <Container className='md:max-w-[1440px] m-auto'>
        <BoxList title='Склад' />
      </Container>
    </main>
  )
}
