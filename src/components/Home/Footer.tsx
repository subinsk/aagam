import { FC } from 'react'
import { FaInstagram } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'
import { LinkProps } from 'next/link'

export const Footer: FC<{}> = ({}) => {
  return (
    <div className="flex w-fullh-auto bg-black p-4">
      <div className="flex w-1/4 h-full bg-black flex-col ">
        <div className="w-full h-14 flex align-center justify-center">
          <img
            src="/assets/logo/new.svg"
            alt="img"
          ></img>
        </div>
        <div className="flex h-4 p-2 pr-2 gap-4 align-center justify-center p-2">
          <FaInstagram
            color="white"
            fontSize={'32px'}
          />
          <FaTwitter
            color="white"
            fontSize={'32px'}
          />
          <FaLinkedin
            color="white"
            fontSize={'32px'}
          />
          <FaYoutube
            color="white"
            fontSize={'32px'}
          />
        </div>
      </div>

      <div className="flex w-1/4 h-full flex-col">
        <div className="w-full h-auto flex-col align-center justify-center">
          <div className="p-4">
            <a
              href="#"
              className="text-xl text-white p-4"
            >
              EVENTS
            </a>
          </div>
          <div className="p-2">
            <a
              href="#"
              className="text-xl text-white p-2"
            >
              Treasure Hunt
            </a>
          </div>
          <div className="p-2">
            <a
              href="#"
              className="text-xl text-white p-2"
            >
              Dare 2 Win
            </a>
          </div>
        </div>
      </div>

      <div className="flex w-1/4 h-full flex-col">
        <div className="w-full h-auto flex-col align-center justify-center">
          <div className="p-4">
            <a
              href="#"
              className="text-xl text-white p-4"
            >
              About
            </a>
          </div>
          <div className="p-2">
            <a
              href="#"
              className="text-xl text-white p-2"
            >
              Teams
            </a>
          </div>
          <div className="p-2">
            <a
              href="#"
              className="text-xl text-white p-2"
            >
              Contact us
            </a>
          </div>
        </div>
      </div>

      <div className="flex w-1/4 h-full flex-col">
        <div className="w-full h-auto flex-col align-center justify-center">
          <div className="text-xl text-white p-4">Legal</div>
          <div className="text-xl text-white p-2">Privacy</div>
          <div className="text-xl text-white p-2">Terms</div>
        </div>
      </div>
    </div>
  )
}
