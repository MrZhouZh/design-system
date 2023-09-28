import Button from '@/components/Button'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center flex-col justify-between font-mono text-sm lg:flex lg:flex-row lg:gap-3 md:gap-3 sm:flex sm:gap-3">
        <Button intent='primary' size='small' text='Create' />
        <Button intent='secondary' text='Update' />
        <Button intent='danger' text='Delete' />
      </div>
    </main>
  )
}
