
export const ShoeCard = ({imgURL, changeBigShoeImage, bigShoeImg}) => {

    const handleClick = ()=> {
        console.log(bigShoeImg)
        console.log(imgURL.bigShoe)
        if(bigShoeImg !== imgURL.bigShoe){
            console.log('first')
            changeBigShoeImage(imgURL.bigShoe)
        }
    }

    return (
        <div 
            className={`border-2  rounded-xl
                ${bigShoeImg === imgURL.bigShoe && 'border-coral-red' }
                cursor-pointer max-sm:flex-1
            `}
            src={imgURL.thumbnail}
            alt="" 
            onClick={handleClick}
        >
            <div className="flex justify-center items-center bg-card bg-center bg-cover
                sm:w-40 sm:h-40 rounded-xl max-sm:p-4
            " >
                <img src={imgURL.thumbnail} alt="shoe collection"
                    width={127} 
                    height={103}
                    className="object-contain"
                />
            </div>
        </div>
    )
}
