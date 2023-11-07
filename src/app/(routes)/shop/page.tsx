import Image from 'next/image'
import {Button} from '@/app/ui/button';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button type="submit">Create Invoiced</Button>
      <div>Shop Page</div>
    </main>
  )
}
