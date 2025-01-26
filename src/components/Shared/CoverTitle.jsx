const CoverTitle = ({ children, imgUrl, positionY }) => {
    return (
    <div
        style={{
            background: `url(${imgUrl})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "left",
            backgroundPositionY: positionY
        }}
        className="
            w-full px-4 py-14 lg:px-14 lg:py-28 relative
            before:content-[''] before:absolute before:inset-0
            before:bg-gradient-to-r before:from-[#0008] before:to-[#0001]"
    >
        <h2 className='
            text-5xl lg:text-7xl font-thin text-white text-left
            relative animate-slideDownSlow'
        >{children}</h2>
    </div>
    )
}

export default CoverTitle