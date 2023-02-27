import Image from 'next/image';
import Person from 'public/images/person.jpg';
import LeaderBadge from 'public/svg/leaderBadge.svg';
import React from 'react';

const ranking = [
  {
    position: 1,
    username: '@annecortese',
    points: 500,
    avatar: Person,
    badge: <LeaderBadge width={30} height={30} className='' />,
    RP: 7,
  },
  {
    position: 2,
    username: '@annecortese',
    points: 500,
    avatar: Person,
    badge: <LeaderBadge width={30} height={30} />,
    RP: 6,
  },
  {
    position: 3,
    username: '@annecortese',
    points: 500,
    avatar: Person,
    badge: <LeaderBadge width={30} height={30} />,
    RP: 100,
  },
  {
    position: 4,
    username: '@annecortese',
    points: 500,
    avatar: Person,
    badge: <LeaderBadge width={30} height={30} />,
    RP: 4,
  },
];

function Cards() {
  return (
    <div className='m-4 flex h-full flex-col gap-4'>
      <div className='flex flex-col items-center '>
        <h3>Leaders</h3>
        <p className='text-xs'>Check whos winning in life!</p>
        {ranking.map((rankings, index) => {
          return (
            <>
              <div
                key={index}
                className='flex items-center gap-4 rounded-xl p-4'
              >
                <p className='bg-primary-tealmd m-2 rounded-full p-1 font-bold'>
                  {rankings.position}
                </p>

                <span className='flex items-center gap-4'>
                  <span className='absolute flex h-12 items-center rounded-xl '>
                    <Image
                      src={rankings.avatar}
                      alt=''
                      width={50}
                      className='relative h-full rounded-xl object-cover '
                    />
                  </span>
                  <span className='relative top-5 left-8 z-10'>
                    {rankings.badge}
                  </span>
                </span>

                <span className='relative ml-4 flex flex-col text-left'>
                  <p className='font-semibold'>{rankings.username}</p>
                  <p className='ml-2 text-xs font-bold'>
                    {rankings.points} Points
                  </p>
                </span>
                <span className='m-2 w-4'>
                  <p>{rankings.RP}</p>
                </span>
              </div>
              <hr className='border-1 w-full rounded-full border-slate-50' />
            </>
          );
        })}
      </div>
      {/* <div className=' flex items-center gap-4 rounded-md border p-4'>
        <p>1</p>
        <Image src='' alt='' />
        <span>
          <p>@annecortese</p>
          <p className='text-xs'>points</p>
        </span>
        <span>
          <p>RP</p>
        </span>
      </div> */}
    </div>
  );
}

export default Cards;
