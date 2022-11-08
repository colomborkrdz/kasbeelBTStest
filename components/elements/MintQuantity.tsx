import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'

const sortOptions = [
    { name: '1', queryValue: '1' },
    { name: '2', queryValue: '2' },
    { name: '3', queryValue: '3' },
    { name: '4', queryValue: '4' },
    { name: '5', queryValue: '5' },
    { name: 'Bundle', queryValue: '22' },
]

export default function MintQuantity({ mintQuantityCB }: any) {
    const [mintQuantity, setMintQuantity] = useState({ name: '1', queryValue: '1' })

    const select = (arg: any) => {
        setMintQuantity(arg);
        mintQuantityCB(arg)
    }

    return (
        <div className={`z-9 flex col-start-1 col-end-2 w-full flex-row justify-self-end`}>
            <Listbox value={mintQuantity} onChange={select}>
            <div className="w-full">
                <Listbox.Button className={`border-[1px] bg-black text-white hover:border-black  hover:bg-white hover:text-black  focus-visible:ring-offset-white
                w-full h-full cursor-pointer relative border-solid  bg-transparent py-2 pl-3 pr-10 text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#000]  focus-visible:ring-opacity-75 focus-visible:ring-offset-2`}
                >
                
                
                <span className="block truncate">{mintQuantity.name}</span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <SelectorIcon
                        className="h-5 w-5"
                        aria-hidden="true" 
                    />
                </span>
                </Listbox.Button>
                <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                >
                    <Listbox.Options className="absolute z-[11] mt-1 max-h-60  bg-red-500 text-base  ring-1 ring-white ring-opacity-5 focus:outline-none sm:text-sm">
                        {sortOptions.map((option, optionIdx) => (
                        <Listbox.Option
                        key={optionIdx}
                        className={({ active }) =>
                            `cursor-pointer border-[1px] border-solid border-white  relative select-none py-2 pl-4 pr-4 ${
                                active ? `bg-[#fff]   text-[#000] ` : `text-[#fff] bg-black `
                            }`
                        }
                        value={option}
                        >
                        {({ selected }) => (
                            <>
                                <span
                                className={`block truncate ${
                                    selected ? 'font-medium' : 'font-normal'
                                }`}
                                >
                                {option.name}
                                </span>
                                {selected ? (
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-black-500">
                                    {/* <CheckIcon className="h-5 w-5" aria-hidden="true" /> */}
                                </span>
                                ) : null}
                            </>
                        )}
                        </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </Transition>
            </div>
            </Listbox>
        </div>
    )
}