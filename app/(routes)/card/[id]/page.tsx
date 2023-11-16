import {Button} from '@/app/ui/button';
import {Metadata} from 'next';

type Props = {
    params: {
        id: string;
    }
}

export async function generateMetadata({params: {id}}: Props): Promise<Metadata> {
    const card = await getData(id);
    return {
        title: `${card.name} ${card.model}`
    }
}

async function getData(id: string) {
    const response: Response = await fetch(`http://localhost:8001/api/goods/${id}`, {
        next: {
            revalidate: 5 // sec, how often to ask db, otherwise use cache
        }
    });
    return response.json();
}

export default async function Home({params: {id}}: Props) {
  const card = await getData(id);
  console.log('card->', card);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button type="submit">Create Invoiced</Button>
      <div>Card with id Page {id}</div>
      <div>{card['desc-full']}</div>
    </main>
  )
}
