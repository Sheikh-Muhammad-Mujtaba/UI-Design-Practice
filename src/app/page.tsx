
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex flex-col">
      {/* Hero section */}
      <div className="relative sm:absolute w-[100%] min-h-fit  mx-auto px-4 items-center justify-center">

        <div>
          <h1 className="relative sm:absolute w-fit sm:w-[70vw] md:w-[277.76px] h-[64px] left-[18%] sm:left-[5%] md:left-[135px] top-[80px] sm:top-[20vh] md:top-[150px] xl:top-[438px] text-[#BDBDBD] font-['Roboto'] font-light text-[8vw] md:text-[64px] leading-[1]">
            PROJECT
          </h1>
          <h2 className="relative sm:absolute w-fit sm:w-[70vw] md:w-[186px] h-[64px] left-[56%] sm:left-[15%] md:left-[135px] top-[10px] sm:top-[26vh] md:top-[200px] xl:top-[502px] text-[#333333] font-['Roboto'] font-bold text-[8vw] md:text-[64px] leading-[2]">
            Lorum
          </h2>
          <div className="hidden sm:flex">
            <button
              aria-label="Left Arrow"
              className="box-border absolute w-[53px] h-[53px] left-[0] sm:left-[60px] md:left-[135px] top-[400px] sm:top-[50vh] md:top-[300px] xl:top-[656px] bg-[#F9F9F9] border-[1px] border-[solid] border-[#F2F2F2] hover:border-[#444343]">{ }
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute w-[24px] h-[24px] left-[15px] top-[15px]">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M21 11.5C21 11.2239 20.7761 11 20.5 11L4.5 11C4.22386 11 4 11.2239 4 11.5C4 11.7761 4.22386 12 4.5 12L20.5 12C20.7761 12 21 11.7761 21 11.5Z" fill="#333333" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.35355 7.64645C8.15829 7.45118 7.84171 7.45118 7.64645 7.64645L3.79289 11.5L7.64645 15.3536C7.84171 15.5488 8.15829 15.5488 8.35355 15.3536C8.54882 15.1583 8.54882 14.8417 8.35355 14.6464L5.20711 11.5L8.35355 8.35355C8.54882 8.15829 8.54882 7.84171 8.35355 7.64645Z" fill="#333333" />
              </svg>
            </button>
            <button
              aria-label="Right Arrow"
              className="box-border absolute w-[53px] h-[53px] left-[70px] sm:left-[130px] md:left-[210.94px] top-[400px] sm:top-[50vh] md:top-[300px] xl:top-[656px] bg-[#F9F9F9] border-[1px] border-[solid] border-[#F2F2F2] hover:border-[#444343]">{ }
              <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute w-[24px] h-[24px] left-[15px] top-[15px]">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.9353 11.5C3.9353 11.2239 4.15916 11 4.4353 11L20.4353 11C20.7114 11 20.9353 11.2239 20.9353 11.5C20.9353 11.7761 20.7114 12 20.4353 12L4.4353 12C4.15916 12 3.9353 11.7761 3.9353 11.5Z" fill="#333333" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5817 7.64645C16.777 7.45118 17.0936 7.45118 17.2889 7.64645L21.1424 11.5L17.2889 15.3536C17.0936 15.5488 16.777 15.5488 16.5817 15.3536C16.3865 15.1583 16.3865 14.8417 16.5817 14.6464L19.7282 11.5L16.5817 8.35355C16.3865 8.15829 16.3865 7.84171 16.5817 7.64645Z" fill="#333333" />
              </svg>
            </button>
            <svg width="166" height="33" viewBox="0 0 166 33" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute w-[90px] md:w-[141.88px] h-[52px] left-[20px] sm:left-[80px] md:left-[135px] top-[470px] sm:top-[65vh] md:top-[380px] xl:top-[799px]">
              <path d="M12.1289 14.1094V16.7109C12.1289 18.1094 12.0039 19.2891 11.7539 20.25C11.5039 21.2109 11.1445 21.9844 10.6758 22.5703C10.207 23.1562 9.64062 23.582 8.97656 23.8477C8.32031 24.1055 7.57812 24.2344 6.75 24.2344C6.09375 24.2344 5.48828 24.1523 4.93359 23.9883C4.37891 23.8242 3.87891 23.5625 3.43359 23.2031C2.99609 22.8359 2.62109 22.3594 2.30859 21.7734C1.99609 21.1875 1.75781 20.4766 1.59375 19.6406C1.42969 18.8047 1.34766 17.8281 1.34766 16.7109V14.1094C1.34766 12.7109 1.47266 11.5391 1.72266 10.5938C1.98047 9.64844 2.34375 8.89062 2.8125 8.32031C3.28125 7.74219 3.84375 7.32812 4.5 7.07812C5.16406 6.82813 5.90625 6.70312 6.72656 6.70312C7.39062 6.70312 8 6.78516 8.55469 6.94922C9.11719 7.10547 9.61719 7.35938 10.0547 7.71094C10.4922 8.05469 10.8633 8.51562 11.168 9.09375C11.4805 9.66406 11.7188 10.3633 11.8828 11.1914C12.0469 12.0195 12.1289 12.9922 12.1289 14.1094ZM9.94922 17.0625V13.7461C9.94922 12.9805 9.90234 12.3086 9.80859 11.7305C9.72266 11.1445 9.59375 10.6445 9.42188 10.2305C9.25 9.81641 9.03125 9.48047 8.76562 9.22266C8.50781 8.96484 8.20703 8.77734 7.86328 8.66016C7.52734 8.53516 7.14844 8.47266 6.72656 8.47266C6.21094 8.47266 5.75391 8.57031 5.35547 8.76562C4.95703 8.95312 4.62109 9.25391 4.34766 9.66797C4.08203 10.082 3.87891 10.625 3.73828 11.2969C3.59766 11.9688 3.52734 12.7852 3.52734 13.7461V17.0625C3.52734 17.8281 3.57031 18.5039 3.65625 19.0898C3.75 19.6758 3.88672 20.1836 4.06641 20.6133C4.24609 21.0352 4.46484 21.3828 4.72266 21.6562C4.98047 21.9297 5.27734 22.1328 5.61328 22.2656C5.95703 22.3906 6.33594 22.4531 6.75 22.4531C7.28125 22.4531 7.74609 22.3516 8.14453 22.1484C8.54297 21.9453 8.875 21.6289 9.14062 21.1992C9.41406 20.7617 9.61719 20.2031 9.75 19.5234C9.88281 18.8359 9.94922 18.0156 9.94922 17.0625ZM22.043 6.84375V24H19.875V9.55078L15.5039 11.1445V9.1875L21.7031 6.84375H22.043Z" fill="#BDBDBD" />
              <path d="M144.129 14.1094V16.7109C144.129 18.1094 144.004 19.2891 143.754 20.25C143.504 21.2109 143.145 21.9844 142.676 22.5703C142.207 23.1562 141.641 23.582 140.977 23.8477C140.321 24.1055 139.578 24.2344 138.75 24.2344C138.094 24.2344 137.489 24.1523 136.934 23.9883C136.379 23.8242 135.879 23.5625 135.434 23.2031C134.996 22.8359 134.621 22.3594 134.309 21.7734C133.996 21.1875 133.758 20.4766 133.594 19.6406C133.43 18.8047 133.348 17.8281 133.348 16.7109V14.1094C133.348 12.7109 133.473 11.5391 133.723 10.5938C133.981 9.64844 134.344 8.89062 134.813 8.32031C135.281 7.74219 135.844 7.32812 136.5 7.07812C137.164 6.82813 137.906 6.70312 138.727 6.70312C139.391 6.70312 140 6.78516 140.555 6.94922C141.117 7.10547 141.617 7.35938 142.055 7.71094C142.492 8.05469 142.864 8.51562 143.168 9.09375C143.481 9.66406 143.719 10.3633 143.883 11.1914C144.047 12.0195 144.129 12.9922 144.129 14.1094ZM141.949 17.0625V13.7461C141.949 12.9805 141.903 12.3086 141.809 11.7305C141.723 11.1445 141.594 10.6445 141.422 10.2305C141.25 9.81641 141.031 9.48047 140.766 9.22266C140.508 8.96484 140.207 8.77734 139.864 8.66016C139.528 8.53516 139.149 8.47266 138.727 8.47266C138.211 8.47266 137.754 8.57031 137.356 8.76562C136.957 8.95312 136.621 9.25391 136.348 9.66797C136.082 10.082 135.879 10.625 135.739 11.2969C135.598 11.9688 135.528 12.7852 135.528 13.7461V17.0625C135.528 17.8281 135.571 18.5039 135.656 19.0898C135.75 19.6758 135.887 20.1836 136.067 20.6133C136.246 21.0352 136.465 21.3828 136.723 21.6562C136.981 21.9297 137.278 22.1328 137.614 22.2656C137.957 22.3906 138.336 22.4531 138.75 22.4531C139.281 22.4531 139.746 22.3516 140.145 22.1484C140.543 21.9453 140.875 21.6289 141.141 21.1992C141.414 20.7617 141.617 20.2031 141.75 19.5234C141.883 18.8359 141.949 18.0156 141.949 17.0625ZM158.098 22.2188V24H146.93V22.4414L152.52 16.2188C153.207 15.4531 153.739 14.8047 154.114 14.2734C154.496 13.7344 154.762 13.2539 154.91 12.832C155.067 12.4023 155.145 11.9648 155.145 11.5195C155.145 10.957 155.028 10.4492 154.793 9.99609C154.567 9.53516 154.231 9.16797 153.785 8.89453C153.34 8.62109 152.801 8.48438 152.168 8.48438C151.41 8.48438 150.778 8.63281 150.27 8.92969C149.77 9.21875 149.395 9.625 149.145 10.1484C148.895 10.6719 148.77 11.2734 148.77 11.9531H146.602C146.602 10.9922 146.813 10.1133 147.235 9.31641C147.656 8.51953 148.281 7.88672 149.11 7.41797C149.938 6.94141 150.957 6.70312 152.168 6.70312C153.246 6.70312 154.168 6.89453 154.934 7.27734C155.699 7.65234 156.285 8.18359 156.692 8.87109C157.106 9.55078 157.313 10.3477 157.313 11.2617C157.313 11.7617 157.227 12.2695 157.055 12.7852C156.891 13.293 156.66 13.8008 156.364 14.3086C156.074 14.8164 155.735 15.3164 155.344 15.8086C154.961 16.3008 154.551 16.7852 154.114 17.2617L149.543 22.2188H158.098Z" fill="#BDBDBD" />
              <line y1="-1" x2="47.6691" y2="-1" transform="matrix(-0.759663 0.650316 -0.759663 -0.650316 94.6196 0)" stroke="#E0E0E0" stroke-width="2" />
            </svg>
          </div>
        </div>
        {/* hero image */}
        <div className="relative sm:absolute sm:min-w-[40%] md:max-w-[40%] xl:max-w-[770px] max-h-[829px] left-0 sm:left-[300px] md:left-[535px] top-[10vw] sm:top-[105px] ">
          <Image
            src={"/images/Rectangle-6.png"}
            alt="Building Image"
            width={770}
            height={829}
            className="relative"
          />

          <button className="absolute left-[0px] bottom-0 w-[150px] sm:w-[221.81px] h-[50px] sm:h-[71px] bg-[#FFFFFF] flex justify-center text-center items-center text-[#333333] font-['Roboto'] not-italic font-normal text-[10px] sm:text-[12px] sm:leading-[12px] uppercase hover:border-2 hover:border-[#272626]">
            View Project
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-[10px] sm:ml-[18px]"
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

      {/* About Section */}
      <div className="relative">
        <div className="absolute w-[80%] lg:max-w-[1170px] h-[60vh] sm:h-[435px] left-[10vw] xl:left-[135px] top-[15vw] sm:top-[120vh] xl:top-[1054px] bg-[#FBFBFB]"></div>
        <Image
          src={"/images/Rectangle-8.png"}
          alt="Image"
          width={270}
          height={265}
          className="absolute w-[20vw] xl:max-w-[270px] max-h-[265px] left-[12vw] xl:left-[235px] top-[125vh] xl:top-[1084px] hidden sm:flex"
        />
        <Image
          src={"/images/Rectangle-9.png"}
          alt="Image"
          width={270}
          height={345}
          className="absolute w-[20vw] xl:max-w-[270px] max-h-[345px] left-[35vw] xl:left-[535px] top-[125vh] xl:top-[1114px] hidden sm:flex "
        />
        <Image
          src={"/images/Rectangle-10.png"}
          alt="Image"
          width={270}
          height={140}
          className="absolute w-[20vw] xl:max-w-[270px] max-h-[140px] left-[12vw] xl:left-[235px] top-[165vh] xl:top-[1379px] hidden sm:flex "
        />

        <h1 className="relative sm:absolute w-[168px] h-[64px] left-[15vw] sm:left-[60vw] xl:left-[835px] top-[20vw] sm:top-[125vh] xl:top-[1084px] font-['Roboto'] not-italic font-light text-[40px] md:text-[50px] xl:text-[64px] leading-[64px] text-[#BDBDBD]">
          About
        </h1>
        <p className="relative sm:absolute w-[70%] sm:w-[25vw] xl:w-[400px] h-fit sm:h-[200px] left-[15vw] sm:left-[60vw] xl:left-[835px] top-[20vw] sm:top-[140vh] xl:top-[1168px] font-['Roboto'] not-italic font-light text-[10px] md:text-[14px] xl:text-[16px] leading-[20px] xl:leading-[25px] text-[#000000]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <button className="relative sm:absolute w-[150px] sm:w-[20vw] xl:w-[222px] h-[10vh] xl:h-[71px] left-[15vw] sm:left-[60vw] xl:left-[835px] top-[25vw] sm:top-[190vh] xl:top-[1388px] bg-[#FFFFFF] text-center items-center justify-center text-[#333333] font-['Roboto'] not-italic font-normal text-[10px] xl:text-[12px] leading-[12px] uppercase flex flex-col">
          Read More
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute right-[1vw] sm:left-[12vw] xl:left-[134px] top[24px] ml-[20px] sm:ml-[16px]"
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
      {/* Main Focus */}
      <div className="relative w-[90%] xl:w-full flex justify-center">
        <h1 className="relative sm:absolute sm:w-[80%] xl:w-[881px] h-[64px] left-[17vw] sm:left-[135px] top-[45vw] sm:top-[1150px] xl:top-[1639px] font-['Roboto'] not-italic font-light text-[25px] sm:text-[40px] xl:text-[64px] leading-[25px] sm:leading-[64px] text-[#BDBDBD]">
          Main Focus/Mission Statement
        </h1>
        <div className="flex flex-wrap w-[70%] xl:w-full justify-between">
          <div className="relative flex left-[-20vw] sm:left-0 xl:absolute">
            <h2 className="relative xl:absolute w-[15vw] sm:w-[104px] h-[140px] xl:left-[135px] top-[63vw] sm:top-[1250px] xl:top-[1765px] font-['Roboto'] not-italic font-black text-[90px] sm:text-[170px] xl:text-[200px] leading-[234px] flex items-center text-[#F2F2F2]">1</h2>
            <p className="relative xl:absolute w-[45vw] sm:w-[300px] xl:w-[279px] h-[144px] xl:left-[269px] top-[70vw] sm:top-[1248px] xl:top-[1763px] font-['Roboto'] not-italic font-normal text-[12px] sm:text-[18px] xl:text-[22px] leading-[20px] sm:leading-[36px] text-[#333333]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat.</p>
          </div>
          <div className="relative flex left-[-20vw] sm:left-0 xl:absolute">
            <h2 className="relative xl:absolute w-[15vw] sm:w-[120px] h-[140px] xl:left-[735px] top-[55vw] sm:top-[1250px] xl:top-[1765px] font-['Roboto'] not-italic font-black text-[90px] sm:text-[170px] xl:text-[200px] leading-[234px] flex items-center text-[#F2F2F2]">2</h2>
            <p className="relative xl:absolute w-[45vw] sm:w-[300px] xl:w-[420px] h-[144px] xl:left-[885px] top-[60vw] sm:top-[1248px] xl:top-[1763px] font-['Roboto'] not-italic font-normal text-[12px] sm:text-[18px] xl:text-[22px] leading-[20px] sm:leading-[36px] text-[#333333]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat, magna mauris porttitor tortor, a auctor est felis ut nisl.          </p>
          </div>
        </div>

      </div>



      {/* Projects Seection  */}
      <div className="relative max-w-[1440px] top-[300px] sm:top-[1300px] xl:top-[2027px] flex justify-center ">
        <h1 className="relative sm:absolute w-fit sm:w-[346px] h-[64px] xl:left-[135px]  font-['Roboto'] not-italic font-light text-[40px] md:text-[64px] leading-[64px] text-[#BDBDBD] text-center sm:text-left">Our Projects</h1>
        <div className="absolute w-[95%] xl:w-full flex flex-row flex-wrap gap-[30px] top-[100px] xl:top-[100px] justify-center">
          <div className="relative w-full lg:max-w-[570px]">
            <Image src={"/images/Rectangle-12.png"} alt="Project Image-1" width={570} height={255} className="w-full lg:max-w-[570px] max-h-[255px]" />
            <span className="absolute top-0 w-full lg:w-[570px] h-full sm:h-[255px] bg-[#333333] opacity-80" />
            <h2 className="absolute w-[233px] h-[128px] left-[10vw] sm:left-[79px] top-[5vh] sm:top-[48px] font-['Roboto'] not-italic font-bold text-3xl sm:text-[64px] leading-[40px] sm:leading-[64px] text-[#FFFFFF]">Sample
              Project</h2>
            <button className="absolute w-[129px] h-[24px] left-[10vw] sm:left-[79px] bottom-[5vh] sm:top-[190px] flex text-[#FFFFFF]">
              View More
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute w-[24px] h-[24px] left-[85px]">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3 11.5C3 11.2239 3.22386 11 3.5 11L19.5 11C19.7761 11 20 11.2239 20 11.5C20 11.7761 19.7761 12 19.5 12L3.5 12C3.22386 12 3 11.7761 3 11.5Z" fill="white" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.6464 7.64645C15.8417 7.45118 16.1583 7.45118 16.3536 7.64645L20.2071 11.5L16.3536 15.3536C16.1583 15.5488 15.8417 15.5488 15.6464 15.3536C15.4512 15.1583 15.4512 14.8417 15.6464 14.6464L18.7929 11.5L15.6464 8.35355C15.4512 8.15829 15.4512 7.84171 15.6464 7.64645Z" fill="white" />
              </svg>

            </button>
          </div>

          <Image src={"/images/image-15.png"} alt="Project Image" width={570} height={255} className=" w-full max-h-[255px] lg:max-w-[570px]" />
          <Image src={"/images/image-16.png"} alt="Project Image" width={270} height={255} className=" w-full max-h-[255px] lg:max-w-[270px]" />
          <Image src={"/images/image-17.png"} alt="Project Image" width={470} height={255} className=" w-full max-h-[255px] lg:max-w-[470px]" />
          <Image src={"/images/image-18.png"} alt="Project Image" width={370} height={255} className=" w-full max-h-[255px] lg:max-w-[370px]" />
          <button className="relative xl:absolute w-[150px] sm:w-[221.81px] h-[50px] sm:h-[71px] right-[5%] xl:right-[135.19px] top-[0px] xl:top-[540px] bg-[#333333] text-[#ffffff] flex justify-center items-center sm:mt-[30px]">All Projects
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M3 11.4998C3 11.2236 3.22386 10.9998 3.5 10.9998L19.5 10.9998C19.7761 10.9998 20 11.2236 20 11.4998C20 11.7759 19.7761 11.9998 19.5 11.9998L3.5 11.9998C3.22386 11.9998 3 11.7759 3 11.4998Z" fill="white" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M15.6464 7.6462C15.8417 7.45094 16.1583 7.45094 16.3536 7.6462L20.2071 11.4998L16.3536 15.3533C16.1583 15.5486 15.8417 15.5486 15.6464 15.3533C15.4512 15.158 15.4512 14.8415 15.6464 14.6462L18.7929 11.4998L15.6464 8.35331C15.4512 8.15805 15.4512 7.84146 15.6464 7.6462Z" fill="white" />
            </svg>

          </button>
        </div>

      </div>

      {/* Contact section */}
      <div className="relative w-[80%] sm:w-[100%] top-[1600px] xs:top-[1700px] sm:top-[2950px] lg:top-[2312px] xl:top-[2912px] justify-center">
        <h1 className="relative w-[312px] h-[64px] left-[5vw] md:left-[135px] font-['Roboto'] not-italic font-light text-[40px] md:text-[64px] leading-[64px] text-[#BDBDBD]">Contact Us</h1>
        <div className="relative top-[22px] flex flex-row gap-[120px]">
        <div className="relative flex flex-col w-full sm:w-[392px] left-[5vw] md:left-[135px] gap-[10px] ">
          <input type="text" placeholder="Name" className=" w-full sm:w-[30vw] lg:max-w-[391px] h-[46px] bg-[#F3F3F3] text-[#8D8D8D] p-2" />
          <input type="tel" placeholder="Phone Number*" className="  w-full sm:w-[30vw] lg:max-w-[391px] h-[45px] bg-[#F3F3F3] text-[#8D8D8D] p-2" />
          <input type="email" placeholder="E-mail*" className="  w-full sm:w-[30vw] lg:max-w-[391px] h-[46px] bg-[#F3F3F3] text-[#8D8D8D] p-2" />
          <input type="text" placeholder="Interested In" className="  w-full sm:w-[30vw] lg:max-w-[391px] h-[46px] bg-[#F3F3F3] text-[#8D8D8D] p-2" />
          <textarea name="message box" placeholder="Message" className=" w-full sm:w-[30vw] lg:max-w-[391px] h-[147px] bg-[#F3F3F3] text-[#8D8D8D] p-2"></textarea>

          <button className="w-[221.81px] h-[71px] bg-[#333333] text-[#ffffff] flex justify-center items-center mt-[47px]">Send Email
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M3 11.4998C3 11.2236 3.22386 10.9998 3.5 10.9998L19.5 10.9998C19.7761 10.9998 20 11.2236 20 11.4998C20 11.7759 19.7761 11.9998 19.5 11.9998L3.5 11.9998C3.22386 11.9998 3 11.7759 3 11.4998Z" fill="white" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M15.6464 7.6462C15.8417 7.45094 16.1583 7.45094 16.3536 7.6462L20.2071 11.4998L16.3536 15.3533C16.1583 15.5486 15.8417 15.5486 15.6464 15.3533C15.4512 15.158 15.4512 14.8415 15.6464 14.6462L18.7929 11.4998L15.6464 8.35331C15.4512 8.15805 15.4512 7.84146 15.6464 7.6462Z" fill="white" />
            </svg>
          </button>
        </div>
        <Image src={"/images/image-12.png"} alt="Contact Image" width={749} height={369} className="relative w-[50vw] xl:max-w-[749px] max-h-[369px] hidden sm:flex" />
        </div>
      </div>
    </div>
  );
}
