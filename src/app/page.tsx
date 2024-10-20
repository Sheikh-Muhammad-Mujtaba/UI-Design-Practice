import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Header />
      <div className="max-w-[100%] overflow-hidden">
        <div>
          <h1 className="absolute w-[277.76px] h-[64px] left-[135px] top-[438px] text-[#BDBDBD] font-['Roboto'] not-italic font-light text-[64px] leading-[64px]">
            PROJECT
          </h1>
          <h2 className="absolute w-[186px] h-[64px] left-[135px] top-[502px] text-[#333333] font-['Roboto'] not-italic font-bold text-[64px] leading-[64px]">
            Lorum
          </h2>
        </div>
        <div>
          <Image
            src={"/images/Rectangle-6.png"}
            alt="Building Image"
            width={770}
            height={829}
            className="absolute w-[770px] h-[829px] left-[535px] top-[105px] "
          />

          <div className="absolute left-[534.66px] top-[863px] w-[221.81px] h-[71px] bg-[#FFFFFF] pl-7 pt-7">
            <button className="flex  h-[12px]  text-center items-center text-[#333333] font-['Roboto'] not-italic font-normal text-[12px] leading-[12px] uppercase">
              View Project
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-3"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3 11.5C3 11.2239 3.22386 11 3.5 11L19.5 11C19.7761 11 20 11.2239 20 11.5C20 11.7761 19.7761 12 19.5 12L3.5 12C3.22386 12 3 11.7761 3 11.5Z"
                  fill="#333333"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.6464 7.64645C15.8417 7.45118 16.1583 7.45118 16.3536 7.64645L20.2071 11.5L16.3536 15.3536C16.1583 15.5488 15.8417 15.5488 15.6464 15.3536C15.4512 15.1583 15.4512 14.8417 15.6464 14.6464L18.7929 11.5L15.6464 8.35355C15.4512 8.15829 15.4512 7.84171 15.6464 7.64645Z"
                  fill="#333333"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="absolute w-[1170px] h-[435px] left-[135px] top-[1054px] bg-[#FBFBFB]"></div>
        <Image
          src={"/images/Rectangle-8.png"}
          alt="Image"
          width={270}
          height={265}
          className="absolute w-[270px] h-[265px] left-[235px] top-[1084px]"
        />
        <Image
          src={"/images/Rectangle-9.png"}
          alt="Image"
          width={270}
          height={345}
          className="absolute w-[270px] h-[345px] left-[535px] top-[1114px] "
        />
        <Image
          src={"/images/Rectangle-10.png"}
          alt="Image"
          width={270}
          height={140}
          className="absolute w-[270px] h-[140px] left-[235px] top-[1379px] "
        />

        <h1 className="absolute w-[168px] h-[64px] left-[835px] top-[1084px] font-['Roboto'] not-italic font-light text-[64px] leading-[64px] text-[#BDBDBD]">
          About
        </h1>
        <p className="absolute w-[400px] h-[200px] left-[835px] top-[1168px] font-['Roboto'] not-italic font-light text-[16px] leading-[25px] text-[#000000]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <div className="absolute w-[222px] h-[71px] left-[835px] top-[1388px] bg-[#FFFFFF] pl-7 pt-7">
            <button className="flex  h-[12px]  text-center items-center text-[#333333] font-['Roboto'] not-italic font-normal text-[12px] leading-[12px] uppercase">
              View Project
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-3"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3 11.5C3 11.2239 3.22386 11 3.5 11L19.5 11C19.7761 11 20 11.2239 20 11.5C20 11.7761 19.7761 12 19.5 12L3.5 12C3.22386 12 3 11.7761 3 11.5Z"
                  fill="#333333"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.6464 7.64645C15.8417 7.45118 16.1583 7.45118 16.3536 7.64645L20.2071 11.5L16.3536 15.3536C16.1583 15.5488 15.8417 15.5488 15.6464 15.3536C15.4512 15.1583 15.4512 14.8417 15.6464 14.6464L18.7929 11.5L15.6464 8.35355C15.4512 8.15829 15.4512 7.84171 15.6464 7.64645Z"
                  fill="#333333"
                />
              </svg>
            </button>
          </div>
      </div>

      <div>
        <h1 className="absolute w-[881px] h-[64px] left-[135px] top-[1639px] font-['Roboto'] not-italic font-light text-[64px] leading-[64px] text-[#BDBDBD]">
        Main Focus/Mission Statement
        </h1>
        <div>
        <h2 className="absolute w-[104px] h-[140px] left-[135px] top-[1765px] font-['Roboto'] not-italic font-black text-[200px] leading-[234px] flex items-center text-[#F2F2F2]">1</h2>
        <p className="absolute w-[279px] h-[144px] left-[269px] top-[1763px] font-['Roboto'] not-italic font-normal text-[22px] leading-[36px] text-[#333333]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat.</p>
        <h2 className="absolute w-[120px] h-[140px] left-[735px] top-[1765px] font-['Roboto'] not-italic font-black text-[200px] leading-[234px] flex items-center text-[#F2F2F2]">2</h2>
        <p className="absolute w-[420px] h-[144px] left-[885px] top-[1763px] font-['Roboto'] not-italic font-normal text-[22px] leading-[36px] text-[#333333]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat, magna mauris porttitor tortor, a auctor est felis ut nisl.          </p>

        </div>
        
      </div>
      <div>
        <h1 className="absolute w-[346px] h-[64px] left-[135px] top-[2027px] font-['Roboto'] not-italic font-light text-[64px] leading-[64px] text-[#BDBDBD]">Our Projects</h1>
        <Image  src={"/images/Rectangle-12.png"} alt="Project Image-1" width={570} height={255} className="absolute w-[570px] h-[255px] left-[135px] top-[2151px]" />
        <span className="absolute w-[570px] h-[255px] left-[135px] top-[2151px] bg-[#333333] opacity-80" />
        <h2 className="absolute w-[233px] h-[128px] left-[214px] top-[2199px] font-['Roboto'] not-italic font-bold text-[64px] leading-[64px] text-[#FFFFFF]">Sample 
        Project</h2>
        <button className="absolute w-[129px] h-[24px] left-[214px] top-[2335px] flex text-[#FFFFFF]">
        View More
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute w-[24px] h-[24px] left-[85px]">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 11.5C3 11.2239 3.22386 11 3.5 11L19.5 11C19.7761 11 20 11.2239 20 11.5C20 11.7761 19.7761 12 19.5 12L3.5 12C3.22386 12 3 11.7761 3 11.5Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.6464 7.64645C15.8417 7.45118 16.1583 7.45118 16.3536 7.64645L20.2071 11.5L16.3536 15.3536C16.1583 15.5488 15.8417 15.5488 15.6464 15.3536C15.4512 15.1583 15.4512 14.8417 15.6464 14.6464L18.7929 11.5L15.6464 8.35355C15.4512 8.15829 15.4512 7.84171 15.6464 7.64645Z" fill="white"/>
</svg>

        </button>
        
        <Image src={"/images/image-15.png"} alt="Project Image" width={570} height={255} className="absolute w-[570px] h-[255px] left-[735px] top-[2151px]" />
        <Image src={"/images/image-16.png"} alt="Project Image" width={270} height={255} className="absolute w-[270px] h-[255px] left-[135px] top-[2436px]" />
        <Image src={"/images/image-17.png"} alt="Project Image" width={470} height={255} className="absolute w-[470px] h-[255px] left-[435px] top-[2436px]" />
        <Image src={"/images/image-18.png"} alt="Project Image" width={370} height={255} className="absolute w-[370px] h-[255px] left-[935px] top-[2436px]" />

        <button className="absolute w-[221.81px] h-[71px] left-[1083px] top-[2721px] bg-[#333333] text-[#ffffff] flex justify-center items-center">All Projects
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 11.4998C3 11.2236 3.22386 10.9998 3.5 10.9998L19.5 10.9998C19.7761 10.9998 20 11.2236 20 11.4998C20 11.7759 19.7761 11.9998 19.5 11.9998L3.5 11.9998C3.22386 11.9998 3 11.7759 3 11.4998Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.6464 7.6462C15.8417 7.45094 16.1583 7.45094 16.3536 7.6462L20.2071 11.4998L16.3536 15.3533C16.1583 15.5486 15.8417 15.5486 15.6464 15.3533C15.4512 15.158 15.4512 14.8415 15.6464 14.6462L18.7929 11.4998L15.6464 8.35331C15.4512 8.15805 15.4512 7.84146 15.6464 7.6462Z" fill="white"/>
</svg>

        </button>
      </div>
<div>
      <h1 className="absolute w-[312px] h-[64px] left-[135px] top-[2912px] font-['Roboto'] not-italic font-light text-[64px] leading-[64px] text-[#BDBDBD]">Contact Us</h1>
      <input type="text" placeholder="Name" className="absolute w-[391px] h-[46px] left-[135px] top-[2998px] bg-[#F3F3F3] text-[#8D8D8D] p-2" />
      <input type="tel" placeholder="Phone Number*" className="absolute w-[391px] h-[45px] left-[135px] top-[3054px] bg-[#F3F3F3] text-[#8D8D8D] p-2" />
      <input type="email" placeholder="E-mail*" className="absolute w-[391px] h-[46px] left-[135px] top-[3109px] bg-[#F3F3F3] text-[#8D8D8D] p-2" />
      <input type="text" placeholder="Interested In" className="absolute w-[391px] h-[46px] left-[135px] top-[2998px] bg-[#F3F3F3] text-[#8D8D8D] p-2" />
      <textarea name="message box" placeholder="Message" className="absolute w-[391px] h-[147px] left-[135px] top-[3120px] bg-[#F3F3F3] text-[#8D8D8D] p-2"></textarea>

      <Image  src={"/images/image-12.png"} alt="Contact Image" width={749} height={369} className="absolute w-[749px] h-[369px] left-[556px] top-[2998px]"/>
      <button className="absolute w-[221.81px] h-[71px] left-[135px] top-[3444px] bg-[#333333] text-[#ffffff] flex justify-center items-center">Send Email
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 11.4998C3 11.2236 3.22386 10.9998 3.5 10.9998L19.5 10.9998C19.7761 10.9998 20 11.2236 20 11.4998C20 11.7759 19.7761 11.9998 19.5 11.9998L3.5 11.9998C3.22386 11.9998 3 11.7759 3 11.4998Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.6464 7.6462C15.8417 7.45094 16.1583 7.45094 16.3536 7.6462L20.2071 11.4998L16.3536 15.3533C16.1583 15.5486 15.8417 15.5486 15.6464 15.3533C15.4512 15.158 15.4512 14.8415 15.6464 14.6462L18.7929 11.4998L15.6464 8.35331C15.4512 8.15805 15.4512 7.84146 15.6464 7.6462Z" fill="white"/>
</svg>

        </button>

</div>
<Footer />
    </div>
  );
}
