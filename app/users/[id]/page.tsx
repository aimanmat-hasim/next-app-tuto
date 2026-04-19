import { Metadata } from 'next';
import { notFound } from 'next/navigation'

interface Props{
    params: Promise<{id: string}>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params;
    return {
        title: `User ${id}`,
        description: `Details for user ${id}.`,
    };
}

const UserPageDetails = async ({params}: Props) => {
  const { id } = await params;
  if (parseInt(id) > 10) notFound();
  return (
    <div>
      UserPageDetails {id}
    </div>
  )
}

export default UserPageDetails