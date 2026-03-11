import Image from "next/image"

function FinishStep() {
    return(
        <div className="my-12 md:my-auto">
            <div className="relative h-14 md:h-20">
                <Image src="/images/icon-thank-you.svg" alt="Thank you" fill />
            </div>
            <h3 className="block mt-6 mb-2 text-blue-950 text-2xl text-center font-bold leading-[120%] md:text-[2rem] md:mt-8 md:mb-4">Thank you!</h3>
            <p className="text-gray-500 text-base leading-normal text-center md:w-[19.688rem] md:mx-auto">
                Thanks for confirming your subscription! We hope you have fun 
                using our platform. If you ever need support, please feel free 
                to email us at support@loremgaming.com.
            </p>
        </div>
    )
}

export default FinishStep;