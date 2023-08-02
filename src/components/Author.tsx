import Image from "next/image"

const Author = (
  { author }: { author:blogAuthor }
) => {
  return (
    <div className="text-center mt-20 mb-8 p-8 relative rounded-lg bg-[#7048CF] bg-opacity-90">
      <div className="absolute left-5 -top-14">
        <Image
          alt={author.name}
          height={100}
          width={100}
          className="align-middle rounded-full"
          src={author.photo.url} />
      </div>
      <h3 className="text-[#DDB109] my-4 text-2xl font-bold">
        {author.name}
      </h3>
      <p className="text-black text-lg">
        {author.bio}
      </p>
    </div>
  )
}

export default Author