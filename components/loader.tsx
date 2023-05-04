export function Loader() {
    return (
        <div className='absolute preloader h-[100svh] w-[100vw] z-10 font-[fifty] text-8xl bg-[#fce6e7] flex justify-center items-center'>
            <div className="relative spinner flex justify-center items-center">
                <div className="relative heart heart1"></div>
                <div className="relative heart heart2"></div>
                <div className="relative heart heart3"></div>
            </div>
        </div>
    )
}