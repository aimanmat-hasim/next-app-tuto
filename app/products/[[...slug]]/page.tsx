import { Metadata } from 'next';

interface Props {
  params: Promise<{ slug?: string[] }>;
  searchParams: Promise<{ sortOrder?: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const label = slug?.join(' / ') ?? 'All Products';
  return {
    title: label,
    description: `Browse products: ${label}.`,
  };
}

const ProductPage = async ({ params, searchParams }: Props) => {
  const { slug } = await params;
  const { sortOrder } = await searchParams;

  return (
    <div>
      ProductPage {slug?.join(' / ') ?? ''} {sortOrder ?? ''}
    </div>
  );
};

export default ProductPage;

