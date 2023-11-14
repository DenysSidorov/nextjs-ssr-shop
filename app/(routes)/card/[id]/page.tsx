import {Button} from '@/app/ui/button';
import {Metadata} from 'next';

type Props = {
    params: {
        id: string;
    }
}

export async function generateMetadata({params: {id}}: Props): Promise<Metadata> {
    return {
        title: `Card with ${id}`
    }
}

export default function Home({params: {id}}: Props) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button type="submit">Create Invoiced</Button>
      <div>Card with id Page {id}</div>
    </main>
  )
}
