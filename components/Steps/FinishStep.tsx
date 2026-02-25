import Image from "next/image"

function FinishStep() {
    return(
        <div>
            <div className="relative">
                <Image src="/images/icon-thank-you.svg" alt="Thank you" fill />
            </div>
            <h3>Thank you!</h3>
            <p>
                Thanks for confirming your subscription! We hope you have fun 
                using our platform. If you ever need support, please feel free 
                to email us at support@loremgaming.com.
            </p>
        </div>
    )
}

export default FinishStep;