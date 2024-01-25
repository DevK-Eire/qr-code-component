import Image from 'next/image'
import qr from '../app/assets/image-qr-code.png'

export default function Home() {
  return (
    <main className="w-full h-screen pt-[152px] pb-[151px] bg-slate-200 justify-center items-center inline-flex">
      
      <div className="w-[320px] h-[497px] bg-white rounded-[20px] shadow flex flex-col items-center px-4  pt-4">
      <div className="w-[288px] h-[288px] bg-blue-500 rounded-[10px]">
      <Image src={qr} alt="qr-code" className='rounded-[10px] items-center justify-center'  />
      </div>

      <div className="w-72 h-[129px] flex-col justify-center items-center gap-4 inline-flex pt-11">
        
  <h1 className="text-center text-blue-950 text-[22px] font-bold font-outfit leading-normal h-[56px] w-[288px] ">Improve your front-end skills by building projects</h1>
  <h2 className="w-[256px] text-center text-slate-500 text-[15px] font-normal font-outfit  leading-normal tracking-custom custom-typography">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</h2>
  </div>
</div>



    </main>
  )
}
