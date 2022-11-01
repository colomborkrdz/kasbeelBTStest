export function Timeline() {

    const timelineEvents = [
        'Idea — Completed',
        'Discuss idea a lot — Completed',
        'Design tool — Completed',
        'Write V1 Protocol — Completed',
        'Build tool — Completed',
        'Continue to discuss a lot — Completed',
        'Submit solidity for audit — Completed',
        'Finalize audit — Completed',
        'Create Builder DAO art — Completed',
        'Deploy on Mainnet — Completed',
        'Deploy to production — Completed',
        'Aquire nounsbuilder.eth — Completed',
        '20 Nouns in zora.eth — Completed',
        'Submit proposal onchain — 1/1 November',
        'Proposal executed — ~7 November',
        'Builder DAO starts — ~15 November',
        '??? — Imagine'       
    ]

    return (
        <section className='grid grid-cols-1 pb-10'>
            <div className="flex flex-row  text-center flex-wrap text-[22px] sm:text-[24px]">
                <div className="w-full mb-6">
                    SEQUENCE OF EVENTS
                </div>
                {timelineEvents.map((tEvent, index) => 
                    <div className="w-full text-[19px] sm:text-[24px]" key={index}>
                        {tEvent}
                    </div>
                )}
            </div>
        </section>
    )
}
