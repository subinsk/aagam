import { FC } from 'react'

export default function register() {
  return (
    <div className="bg-br bg-cover gap-8 justify-center relative flex flex-col items-center z-20 w-full bg-reg h-screen sm:h-full">
      <div className="flex justify-center items-center w-full mt-16">
        <div className="text-3xl text-black text-center">REGISTRATION</div>
      </div>

      <div className="w-4/5">
        <div className="mt-12 mb-6 flex flex-col justify-between h-full w-full">
          <div className="flex-col md:flex sm:flex md:flex-row md:justify-between justify-center items-center">
            <div className="w-3/5 xl:w-1/2 sm:w-full flex-col  flex justify-center items-center">
              <div className="m-4 w-full flex-col">
                <div className="text-xl text-black">Name</div>
                <input
                  type="text"
                  className=" h-12 w-4/5  border-2 border-black"
                />
              </div>

              <div className="m-4 w-full flex-col">
                <div className="text-xl text-black">Email-Id</div>
                <input
                  type="text"
                  className=" h-12 border-2 w-4/5 border-black"
                />
              </div>

              <div className="m-4 w-full flex-col">
                <div className="text-xl text-black">Phone Number</div>
                <input
                  type="text"
                  className=" h-12 border-2 w-4/5 border-black"
                />
              </div>

              <div className="m-4 w-full flex-col">
                <div className="text-xl text-black">Gender</div>
                <input
                  type="text"
                  className="h-12 border-2 w-4/5 border-black"
                />
              </div>
            </div>
            <div className="w-3/5 xl:w-1/2  sm:w-full flex-col  flex justify-center items-center">
              <div className="m-4 w-full flex-col">
                <div className="text-xl text-black">EVENT</div>
                <input
                  type="text"
                  className="h-12 border-2 w-4/5 border-black"
                />
              </div>

              <div className="m-4 w-full flex-col">
                <div className="text-xl text-black">COLLEGE</div>
                <input
                  type="text"
                  className="h-12 border-2 w-4/5 border-black"
                />
              </div>

              <div className="m-4 w-full flex-col">
                <div className="text-xl text-black">YEAR OF STUDY</div>
                <input
                  type="text"
                  className="h-12 border-2 w-4/5 border-black"
                />
              </div>

              <div className="m-4 w-full flex-col">
                <div className="text-xl text-black">CITY</div>
                <input
                  type="text"
                  className="h-12 border-2 w-4/5 border-black"
                />
              </div>
            </div>
          </div>
          <div className=" m-4 w-full h-full flex items-center justify-center">
            <div className="w-1/4 h-1/2 sm:w-3/4 p-3 border-2 border-black rounded-lg flex items-center justify-center">
              <div className="text-center text-3xl sm:text-xl  text-black ">
                REGISTER
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
