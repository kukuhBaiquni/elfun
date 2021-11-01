/* eslint-disable react/display-name */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import { Disclosure, Transition } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'
import clsx from 'clsx'
import { Fragment } from 'react'

const dummy = [
  {
    title: 'Optimus 1/5',
    questAcceptancePrerequisites: [
      'Achieve Level 35',
      'Advance to Metal Heart',
    ],
    objectives: [
      'Altera - Clear Nasod Foundry 0/1',
    ],
    description: 'Rose noticed that her robots were weaker than the new Nasods in Altera, but she wasn\'t too surprised. She needed an upgrade anyway. First, she should investigate how strong the Nasods are in this area.',
  },
  {
    title: 'Optimus 2/5',
    questAcceptancePrerequisites: [
      'Complete Optimus 1/5',
    ],
    objectives: [
      'Altera - Clear Altera Core 0/1',
    ],
    description: 'It didn\'t take long for her to make new robots based on the combat power she gathered. The new information she received from the Nasods and her ongoing research was able to yield her good results. However, Rose wasn\'t happy to see the robots moving to the testing site.',
  },
  {
    title: 'Optimus 3/5',
    questAcceptancePrerequisites: [
      'Complete Optimus 2/5',
    ],
    objectives: [
      'Enter Feita Village',
    ],
    description: 'Though the upgrade was somewhat urgent, the robots still functioned decently. However, Rose was not satisfied. Due to the urgent upgrade, the designs of the body was too rough. What\'s the use if they\'re not beautiful? Rose did not know what to feel as she looked at her robots.',
  },
  {
    title: 'Optimus 4/5',
    questAcceptancePrerequisites: [
      'Complete Optimus 3/5',
    ],
    objectives: [
      'Feita - Clear Shrine of Dedication Entrance 0/1',
    ],
    description: 'She needed something revolutionary to maintain the current performance level without sub units and outer armor. As Rose continued to research to find a way, she is inspired by the El energy extraction device. If there\'s a device that maximize efficiency even with small amount of El energy, she should be able to minimize the devices that are attached all over the robots. It\'s now time to find the right material for a beautiful body.',
  },
  {
    title: 'Optimus 5/5',
    questAcceptancePrerequisites: [
      'Complete Optimus 4/5',
    ],
    objectives: [
      'Feita - Clear Underground Chapel 0/1',
    ],
    description: 'Rose manages to create a micro El energy device and begins working at once. It didn\'t take long for her to complete beautiful robots. \'True strength comes from beauty!\' The robots followed Rose to the last testing site.',
  },
]

export default function ChangeJobQuest() {
  return (
    <div className='w-full mt-3'>
      <Disclosure>
        {({ open }) => (
          <Fragment>
            <Disclosure.Button className='flex justify-between w-full px-4 py-2 font-medium text-left bg-rose hover:bg-opacity-80 text-gray-600 border-general'>
              <span className='font-semibold'>Change Job Quest (Optimus)</span>
              <ChevronUpIcon className={clsx(open ? '-transform rotate-180' : 'transform rotate-0', 'w-5 h-5 text-gray-600 transition-all duration-300')} />
            </Disclosure.Button>
            <Transition
              enter='transition duration-100 ease-out'
              enterFrom='transform scale-95 opacity-0'
              enterTo='transform scale-100 opacity-100'
              leave='transition duration-75 ease-out'
              leaveFrom='transform scale-100 opacity-100'
              leaveTo='transform scale-95 opacity-0'
            >
              <Disclosure.Panel className='p-2 text-gray-600 dark:text-gray-400 border-general'>
                {dummy.map((item) => (
                  <Disclosure as='div' className='mt-2' key={item.title}>
                    {(props) => (
                      <Fragment>
                        <Disclosure.Button className='flex justify-between items-center w-full p-2 font-medium text-left bg-rose hover:bg-opacity-80 text-gray-600 border dark:border-gray-600 border-gray-300'>
                          <span className='bg-indigo-500 text-white text-xs px-2 py-1 border-gray-300 border font-titillium'>Job Change</span>
                          <span className='font-semibold'>{item.title}</span>
                          <ChevronUpIcon className={clsx(props.open ? '-transform rotate-180' : 'transform rotate-0', 'w-5 h-5 text-gray-600 transition-all duration-300')} />
                        </Disclosure.Button>
                        <Transition
                          enter='transition duration-100 ease-out'
                          enterFrom='transform scale-95 opacity-0'
                          enterTo='transform scale-100 opacity-100'
                          leave='transition duration-75 ease-out'
                          leaveFrom='transform scale-100 opacity-100'
                          leaveTo='transform scale-95 opacity-0'
                        >
                          <Disclosure.Panel className='text-gray-600 dark:text-gray-400 font-titillium overflow-x-auto'>
                            <div className='grid grid-cols-3 w-[800px] sm:w-full'>
                              <div className='font-semibold text-center dark:text-gray-300 text-gray-700 dark:bg-gray-700 bg-gray-200 p-2 border-t-0 border-r-0 border dark:border-gray-600 border-gray-300'>Quest Acceptance Prerequisites</div>
                              <div className='font-semibold text-center dark:text-gray-300 text-gray-700 dark:bg-gray-700 bg-gray-200 p-2 border-t-0 border-r-0 border dark:border-gray-600 border-gray-300'>Objectives</div>
                              <div className='font-semibold text-center dark:text-gray-300 text-gray-700 dark:bg-gray-700 bg-gray-200 p-2 border-t-0 border dark:border-gray-600 border-gray-300'>Description</div>

                              <div className='py-1 pl-8 pr-2 border-t-0 border-r-0 border dark:border-gray-600 border-gray-300'>
                                <ul className='list-disc'>
                                  {item.questAcceptancePrerequisites.map((quest) => (
                                    <li key={quest}>{quest}</li>
                                  ))}
                                </ul>
                              </div>
                              <div className='py-1 pl-8 pr-2 border-t-0 border-r-0 border dark:border-gray-600 border-gray-300'>
                                <ul className='list-disc'>
                                  {item.objectives.map((objective) => (
                                    <li key={objective}>{objective}</li>
                                  ))}
                                </ul>
                              </div>
                              <div className='py-1 px-2 border-t-0 border dark:border-gray-600 border-gray-300'>
                                {item.description}
                              </div>
                            </div>
                          </Disclosure.Panel>
                        </Transition>
                      </Fragment>
                    )}
                  </Disclosure>
                ))}
              </Disclosure.Panel>
            </Transition>
          </Fragment>
        )}
      </Disclosure>
    </div>
  )
}
