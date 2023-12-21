import React from 'react'

export default function Rating({rate}:{rate:number}) {
      
    const fullStars = Math.floor(rate);
    const hasHalfStar = rate % 1 !== 0;
  
    const Star = ({ filled }: { filled: boolean }) => (
        <span className={`text-yellow-400 ${filled ? 'text-opacity-200' : 'text-opacity-20'}`}>&#9733;</span>
      );
      
      if(fullStars){
        return (
          <div className="flex justify-center items-center">
            <div className="text-3xl">
              {[...Array(fullStars)]?.map((_, index) => (
                <Star key={index} filled />
              ))}
            </div>
            {hasHalfStar && <Star filled={false} />}
          </div>
        );
              }
      
      
}
