import React from 'react';
import Image, { StaticImageData } from 'next/image'
import Link from '../Link/Link';
import CardObject from '@/data/exports';

interface Props {
    data: CardObject
}

export default function Card(props: Props) {

    return (
        <div className='m-2xs:min-h-full min-h-[480px] h-full flex flex-col relative md:w-[360px] self-center backdrop-blur-[2.5px] p-4 rounded-lg border-h-purple border text-sm'>
            <Image
                className={`z-0 top-0 m-2xs:h-[180px] h-[240px] w-full self-center justify-center object-cover ${props.data.imgPos ? props.data.imgPos : "object-center"} rounded-md opacity bg-white`}
                alt="" src={props.data.img} draggable="false"
            />
            <div className='text-left mt-4 font-bold'>{props.data.name}</div>
            {props.data.desc.map((item, key) =>
                <div className='text-left font-light ' key={key}>{item}</div>
            )}

            {props.data.stack &&
                <div className='flex flex-row absolute top-4 -right-[.75rem] border-text items-center text-white align-middle font-semibold gap-4'>
                    {props.data.stack.map((item, key) =>
                        <div className='tracking-wide inline-block bg-[#0B0E17]' key={key}>{item}</div>
                    )}
                </div>}

            {props.data.link &&
                <div className='flex flex-row absolute -bottom-2 items-center text-white align-middle w-full font-bold gap-4'>
                    <div className='inline-block bg-[#0B0E17] border-aqua border rounded-md'>
                        <Link button={false} name={'visit repo'} link={props.data.link} />
                    </div>
                </div>}
        </div>
    )
}