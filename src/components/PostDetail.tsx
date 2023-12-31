import Image from "next/image"
import moment from "moment"
import React from "react";

const PostDetail = (
  { post }: { post: blogPost }
) => {

  const getContentFragment = (index:number, text:any, obj:any, type?:string) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = (<strong key={index}>{text}</strong>);
      }

      if (obj.italic) {
        modifiedText = (<em key={index}>{text}</em>);
      }

      if (obj.underline) {
        modifiedText = (<u key={index}>{text}</u>);
      }
    }

    switch (type) {
      case 'heading-three':
        return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item:any, i:number) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
      case 'paragraph':
        return <p key={index} className="mb-8">{modifiedText.map((item:any, i:number) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
      case 'heading-four':
        return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item:any, i:number) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
      case 'image':
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };

  return (
    <div className='bg-white rounded-lg p-4 lg:p-8 mb-8'>
      <div className='relative overflow-hidden shadow-md mb-6 pb-96'>
        <Image
          src={post.featuredImage.url}
          alt={post.title}
          fill={true}
          className="object-top rounded-lg object-cover" />
      </div>
      <div className="mb-8 w-full" >
        <h1 className="text-center mb-8 text-3xl font-semibold">
          {post.title}
        </h1>
        <div className="block lg:flex text-center items-center justify-center mb-8 w-full" >
          <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
            <Image
              alt={post.author.name}
              height={30}
              width={30}
              style={{ width: '30px', height: '30px' }}
              className="align-middle rounded-full"
              src={post.author.photo.url} />
            <p className="inline align-middle text-gray-700 ml-2 text-lg">
              {post.author.name}
            </p>
          </div>
          <div className="font-medium text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-[#DDB109]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>
              {moment(post.createdAt).format('MMM DD, YYYY')}
            </span>
          </div>
        </div>
        { post.videoLink ? 
          <div className="mb-8">
            <h3 className="text-xl text-center italic">Watch the madness here:</h3>
            <iframe 
              src={post.videoLink}
              className="w-full lg:w-2/3 md:w-4/5 p-2 h-96 mx-auto">
            </iframe>
          </div>
        :
          null
        }
        { post.content.raw.children.map((typeObj:any, index:number) => {
          const children = typeObj.children.map((item:any, itemIndex:number) => getContentFragment(itemIndex, item.text, item))

          return getContentFragment(index, children, typeObj, typeObj.type)
        }) }
      </div>
    </div>
  )
}

export default PostDetail