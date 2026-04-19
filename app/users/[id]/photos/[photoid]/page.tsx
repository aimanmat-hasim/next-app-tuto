interface Props{
    params: Promise<{id: string; photoid: string}>
}

const PhotoPage = async ({params}:Props) => {
  const { id, photoid } = await params;
  return (
    <div>
      PhotoPage {id} {photoid}
    </div>
  )
}


export default PhotoPage
