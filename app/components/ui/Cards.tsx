  import React from 'react'
  import Image from 'next/image'
  
  interface CardsProps {
    CardImage?: {
      src: string;
      width: number;
      height: number;
    } & { alt?: string };
    CardData?: {
      title: string;
      description: string;
      price: {amount: number; currency: string;};
      duration: number;
      rating: number
    };
    
  }
  
  const Cards: React.FC<CardsProps> = ({CardData  , CardImage }) => {
    return (
    <div className="flex flex-col min-w-max h-auto rounded-2xl">
      {CardImage && 
        <Image src={CardImage.src} 
        alt={CardImage.alt || CardData?.title || "Image"} 
        width={CardImage.width} 
        height={CardImage.height} 
        className="mt-2 rounded-2xl" 
        />}
        <h3 className="font-semibold">{CardData?.title || "Default Title"}</h3>
        <p className="text-sm text-gray-600">
          {CardData ? `${CardData.price.currency} ${CardData.price.amount}` : "Price not available"} for{" "}
          {CardData?.duration || "N/A"} nights. {CardData?.rating ? `Rating: ${CardData.rating}` : "No rating available."}
        </p>
    </div>
        )
      }
      
      export default Cards
