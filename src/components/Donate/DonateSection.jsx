const DonateSection = (props) => {
    const sectionClassName = `
        lg:full-section lg:min-h-[740px] p-0 lg:p-8
        odd:bg-white even:bg-[#f2f2f2] flex justify-center
    `;

    const cardClassName = `
        h-full w-full ${props.cardLgW} lg:min-w-[700px] px-4 lg:px-8 ${props.cardPY.mob} ${props.cardPY.lg}
        ${props.cardDark ? 'bg-white' : 'bg-[#FBF6ED]'} lg:bg-[#FBF6ED] lg:border-2 border-black
        rounded-xl lg:shadow-[2px_2px_1px_4px_rgba(0,0,0,0.2)]
        flex flex-col gap-8 lg:gap-2 items-center justify-between
    `;
    const innerDarkClassName = `
        w-full p-2 lg:p-4 flex flex-col
        gap-${props.innerDarkGap.mob} lg:gap-${props.innerDarkGap.lg} bg-[#ede3d1] rounded-xl
    `;
    
    return (
        <section className={sectionClassName}
        >
            {/* "Card" */}
            <div className={cardClassName}
            >
                <h1 className="text-3xl lg:text-5xl font-bold text-center">{props.title}</h1>
                {/* Darker div with info */}
                <div className={innerDarkClassName}>
                    {props.children}
                </div>
                {props.thankYouMsg !== null && <p className="text-2xl lg:text-3xl">{props.thankYouMsg}</p>}
                {props.otherOptions !== null && <p className="text-2xl lg:text-3xl text-green-700">
                    {props.otherOptions + ' '}<i className="fa fa-arrow-down" aria-hidden="true"></i>
                </p>}
                {props.separator && <div className="h-8 lg:hidden"></div>}
            </div>
        </section>
    )
}

export default DonateSection