import { useState } from 'react'
import { HeartIcon } from '@heroicons/react/outline'

const MAX_TWEET_CHAR = 140;

function TweetForm(){
  const [text, setText] = useState('');

  function changeText(e){
    setText(e.target.value)
  }

  return (
    <div className='border-b border-silver p-4 space-y-6'>
      <div className='flex p-4 space-x-7'>
          <img src="/src/avatar.png" className='w-7'/>
          <h1 className='font-bold text-xl'>Página inicial</h1>
      </div>
        <form className='pl-20 text-lg flex flex-col'>
          <textarea value={text} onChange={changeText} type="text" name='text' placeholder=' O que está acontecendo?' className='bg-transparent outline-none' />
          <div className='flex justify-end items-center space-x-3'>
            <span className='text-sm'>
              <span cl>{text.length}/</span> <span className='text-birdblue'>{ MAX_TWEET_CHAR }</span>
            </span>
            <button disabled={text.length  > MAX_TWEET_CHAR} className='bg-birdBlue px-4 py-2 rounded-full disabled:opacity-50'>Tweet</button>
          </div>
        </form>
    </div>
    
  )
}

function Tweet ({ name, username, avatar, children }){
  return (
  <div className="flex space-x-3 p-4 border-b border-silver">
    <div>
      <img src={avatar}/>
    </div>
    <div>
      <span className="font-bold text-sm">{name}</span>{' '}
      <span className="text-sm text-silver">@{username}</span>

      <p>{children}</p>
      <div className='flex space-x-1 text-silver text-sm items-center'>
      <HeartIcon className='w-6 stroke-1 stroke-silver'></HeartIcon>
      <span>1.0k</span>
      </div>
      
    </div>
  </div>
  )
}

export const App = () => {
  return(
  <>
  <TweetForm></TweetForm>
    <div>
      <Tweet name="Elon Musk" username="elonmusk" avatar="/src/avatar.png">
        Let's make Twitter maximun fun!
      </Tweet>
      <Tweet name="Bruno Bertolini" username="brunobertolini" avatar="/src/avatar.png">
        Let's make Twitter maximun fun!
      </Tweet>
    </div>
  </>
    
  )
}