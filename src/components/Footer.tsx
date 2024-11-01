import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

function Footer() {
    return (
        <footer className='relative w-[100%] h-[417px] left-0 right-0 top-[1524px] xs:top-[1624px] sm:top-[2824px] lg:top-[2135px] xl:top-[2835px] bg-[#2C2C2C]'>



            {/* Logo Section */}
            <div className='flex justify-center items-center pt-[50px]'>
                <Image src={"/images/Logo-footer.png"}
                    alt='Logo' width={145} height={94}
                    className='absolute w-[30px] md:w-[80px] xl:w-[145px] h-[25px] md:h-[50px] xl:h-[94px] left-auto md:left-[30px] xl:left-[116px] top-[5%] md:top-[58px]' />
            </div>


            {/* links */}
            <div className='absolute w-[90%] md:w-[400px] lg:w-[500px] xl:max-w-[605px] mx-[5%] min-h-[229px] left-auto md:left-[130px] lg:left-[180px] xl:left-[360px] top-[58px] justify-center items-center flex-col'>

                {/* Information Section */}
                <div className="absolute w-[103px] h-[20px] left-[0] text-white text-center md:text-left">
                    <ul className="font-['Roboto'] not-italic font-bold text-[12px] md:text-[16px] leading-[19px] flex flex-col gap-[5px] md:gap-3">
                        <li className="mb-4">Information</li>
                        <li className="font-medium text-[14px] leading-[24px]"><Link href={'#'}>Main</Link></li>
                        <li className="font-medium text-[14px] leading-[24px]"><Link href={'#'}>Gallery</Link></li>
                        <li className="font-medium text-[14px] leading-[24px]"><Link href={'#projects'}>Projects</Link></li>
                        <li className="font-medium text-[14px] leading-[24px]"><Link href={'#'}>Certifications</Link></li>
                        <li className="font-medium text-[14px] leading-[24px]"><Link href={'#contact'}>Contacts</Link></li>
                    </ul>
                </div>



                {/* Contacts Section */}
                <div className="absolute right-0 xl:left-[260px] text-[12px] md:text-[16px] font-['Roboto'] not-italic text-white text-center md:text-left space-y-6 flex flex-col gap-[5px] md:gap-[10px] xl:gap-5">
                    <div>
                        <h3 className="font-bold mb-5">Contacts</h3>
                        <Link href={'https://www.google.com/maps/'}>
                            <p className=" mt-2 flex  justify-center md:justify-start">
                                <svg width="11" height="16" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg" className='mr-2 '>
                                    <path d="M1.50814 9.2492L1.51345 9.25698L5.5 15.1116L9.48655 9.25698L9.49186 9.2492L9.49745 9.24161C10.2363 8.23991 10.5723 6.879 10.4871 5.5225C10.4019 4.16584 9.89922 2.86989 9.03258 1.98859C7.08079 0.00382428 3.91955 0.00377946 1.96742 1.98859L1.50814 9.2492ZM1.50814 9.2492L1.50255 9.24161M1.50814 9.2492L1.50255 9.24161M1.50255 9.24161C0.763724 8.23991 0.42775 6.879 0.51291 5.5225M1.50255 9.24161L0.51291 5.5225M0.51291 5.5225C0.59808 4.16585 1.10077 2.86991 1.9674 1.98862L0.51291 5.5225ZM3.23807 5.53836C3.23807 6.82627 4.26679 7.88453 5.55356 7.88453C6.84032 7.88453 7.86905 6.82627 7.86905 5.53836C7.86905 4.25045 6.84032 3.19219 5.55356 3.19219C4.26679 3.19219 3.23807 4.25045 3.23807 5.53836Z" stroke="white" />
                                </svg>

                                1234 Sample Street, <br />Austin Texas 78704
                            </p>
                        </Link>
                    </div>
                    <div className="flex items-center justify-center md:justify-start">
                        <Link href={'tel:+1-512-123-4567'}>
                            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" className='mr-2'>
                                <mask id="path-1-inside-1_1_131" fill="white">
                                    <path d="M16.0028 12.6271C16.0367 12.887 15.9575 13.113 15.7655 13.305L13.5113 15.5422C13.4096 15.6552 13.2768 15.7514 13.113 15.8304C12.9492 15.9095 12.7882 15.9604 12.63 15.9829C12.6187 15.9829 12.5848 15.9858 12.5282 15.9915C12.4718 15.9971 12.3984 16 12.308 16C12.0932 16 11.7457 15.9633 11.2655 15.8898C10.7853 15.8163 10.1978 15.6355 9.5029 15.3474C8.80787 15.0593 8.01976 14.627 7.13844 14.0508C6.25711 13.4746 5.31923 12.6836 4.32488 11.6779C3.53392 10.8983 2.87856 10.1525 2.35878 9.44068C1.83901 8.72879 1.42093 8.0706 1.10455 7.46608C0.788135 6.86156 0.550847 6.31354 0.392655 5.82202C0.234463 5.33049 0.127118 4.90677 0.0706214 4.55083C0.0141243 4.1949 -0.00847457 3.91524 0.00282486 3.71185C0.0141243 3.50847 0.019774 3.39547 0.019774 3.37287C0.0423728 3.21468 0.0932202 3.05366 0.172316 2.88982C0.251412 2.72598 0.347457 2.59321 0.460451 2.49152L2.71469 0.237287C2.87288 0.0790958 3.05367 0 3.25706 0C3.40395 0 3.53389 0.0423728 3.64689 0.127118C3.75988 0.211864 3.85593 0.316383 3.93502 0.440677L5.74858 3.88135C5.85028 4.06214 5.87852 4.25988 5.83333 4.47456C5.78813 4.68925 5.69208 4.87004 5.54519 5.01694L4.71468 5.84744C4.69208 5.87004 4.67231 5.90676 4.65536 5.95761C4.63841 6.00846 4.62994 6.05083 4.62994 6.08473C4.67514 6.32202 4.77683 6.5932 4.93502 6.89829C5.07062 7.16947 5.27965 7.49998 5.56214 7.88981C5.84463 8.27964 6.24575 8.72876 6.76553 9.23724C7.274 9.75706 7.72598 10.161 8.12146 10.4492C8.51686 10.7372 8.84748 10.9491 9.11301 11.0847C9.37855 11.2203 9.58194 11.3022 9.72315 11.3304L9.93496 11.3728C9.95756 11.3728 9.99437 11.3643 10.0452 11.3474C10.096 11.3304 10.1327 11.3106 10.1554 11.288L11.1214 10.305C11.3249 10.1242 11.5621 10.0338 11.8333 10.0338C12.0255 10.0338 12.1779 10.0677 12.2909 10.1355H12.3078L15.579 12.0677C15.8164 12.2147 15.9576 12.4011 16.0028 12.6271Z" />
                                </mask>
                                <path d="M16.0028 12.6271L16.9944 12.4977L16.99 12.4641L16.9834 12.4309L16.0028 12.6271ZM15.7655 13.305L16.4699 14.0148L16.4727 14.0121L15.7655 13.305ZM13.5113 15.5422L12.8069 14.8325L12.7869 14.8523L12.768 14.8733L13.5113 15.5422ZM13.113 15.8304L12.6786 14.9297L12.6781 14.9299L13.113 15.8304ZM12.63 15.9829V16.9829H12.701L12.7713 16.9729L12.63 15.9829ZM12.5282 15.9915L12.6274 16.9866L12.6277 16.9865L12.5282 15.9915ZM9.5029 15.3474L9.88587 14.4237L9.88586 14.4237L9.5029 15.3474ZM7.13844 14.0508L7.68566 13.2138L7.68564 13.2138L7.13844 14.0508ZM4.32488 11.6779L5.03604 10.9748L5.02688 10.9658L4.32488 11.6779ZM2.35878 9.44068L1.55115 10.0304L1.55117 10.0304L2.35878 9.44068ZM1.10455 7.46608L1.99054 7.00238L1.99052 7.00235L1.10455 7.46608ZM0.019774 3.37287L-0.970176 3.23145L-0.980226 3.3018V3.37287H0.019774ZM0.460451 2.49152L1.12942 3.23481L1.14896 3.21722L1.16756 3.19863L0.460451 2.49152ZM2.71469 0.237287L3.42179 0.944395V0.944395L2.71469 0.237287ZM3.93502 0.440677L4.81966 -0.025609L4.80061 -0.0617409L4.77868 -0.0961993L3.93502 0.440677ZM5.74858 3.88135L4.86395 4.34763L4.87031 4.35971L4.87701 4.37161L5.74858 3.88135ZM5.54519 5.01694L4.83808 4.30983L4.83808 4.30983L5.54519 5.01694ZM4.71468 5.84744L5.42179 6.55455L5.42179 6.55455L4.71468 5.84744ZM4.62994 6.08473H3.62994V6.17912L3.6476 6.27184L4.62994 6.08473ZM4.93502 6.89829L5.82945 6.45107L5.82616 6.4445L5.82278 6.43797L4.93502 6.89829ZM6.76553 9.23724L7.4804 8.53798L7.4727 8.5301L7.46482 8.5224L6.76553 9.23724ZM8.12146 10.4492L7.53253 11.2573L7.53267 11.2574L8.12146 10.4492ZM9.72315 11.3304L9.91944 10.3498L9.91875 10.3497L9.72315 11.3304ZM9.93496 11.3728L9.73867 12.3533L9.83585 12.3728H9.93496V11.3728ZM10.0452 11.3474L10.3612 12.2961L10.3618 12.2959L10.0452 11.3474ZM10.1554 11.288L10.8625 11.9952L10.8686 11.9889L10.1554 11.288ZM11.1214 10.305L10.4573 9.55733L10.432 9.57986L10.4082 9.60405L11.1214 10.305ZM12.2909 10.1355L11.7763 10.9929L12.0138 11.1355H12.2909V10.1355ZM12.3078 10.1355L12.8164 9.2745L12.5811 9.13551H12.3078V10.1355ZM15.579 12.0677L16.1055 11.2175L16.0966 11.212L16.0876 11.2067L15.579 12.0677ZM15.0112 12.7565C15.0099 12.7464 15.0083 12.709 15.0251 12.6611C15.0414 12.6144 15.0626 12.5938 15.0583 12.598L16.4727 14.0121C16.8746 13.61 17.0702 13.0786 16.9944 12.4977L15.0112 12.7565ZM15.0611 12.5953L12.8069 14.8325L14.2157 16.252L16.4699 14.0148L15.0611 12.5953ZM12.768 14.8733C12.7678 14.8735 12.7627 14.8792 12.7492 14.8889C12.7355 14.8989 12.713 14.9131 12.6786 14.9297L13.5474 16.7311C13.8062 16.6063 14.051 16.4375 14.2546 16.2112L12.768 14.8733ZM12.6781 14.9299C12.5943 14.9704 12.532 14.9868 12.4887 14.993L12.7713 16.9729C13.0444 16.9339 13.304 16.8486 13.5479 16.7309L12.6781 14.9299ZM12.63 14.9829C12.5554 14.9829 12.4569 14.9936 12.4288 14.9964L12.6277 16.9865C12.6405 16.9852 12.6513 16.9842 12.6603 16.9833C12.6695 16.9825 12.6759 16.9819 12.6802 16.9815C12.6823 16.9814 12.6834 16.9813 12.6838 16.9812C12.6842 16.9812 12.6832 16.9813 12.681 16.9814C12.679 16.9816 12.6742 16.9819 12.6674 16.9822C12.6639 16.9823 12.6591 16.9825 12.6533 16.9826C12.6477 16.9828 12.6397 16.9829 12.63 16.9829V14.9829ZM12.4291 14.9964C12.4185 14.9975 12.3814 15 12.308 15V17C12.4153 17 12.5251 16.9967 12.6274 16.9866L12.4291 14.9964ZM12.308 15C12.1756 15 11.8933 14.9742 11.4168 14.9013L11.1143 16.8783C11.5982 16.9523 12.0109 17 12.308 17V15ZM11.4168 14.9013C11.047 14.8447 10.5422 14.6958 9.88587 14.4237L9.11992 16.2712C9.85327 16.5752 10.5236 16.7879 11.1143 16.8783L11.4168 14.9013ZM9.88586 14.4237C9.26584 14.1666 8.53398 13.7685 7.68566 13.2138L6.59121 14.8878C7.50555 15.4856 8.34991 15.952 9.11993 16.2712L9.88586 14.4237ZM7.68564 13.2138C6.87975 12.6869 5.99637 11.9462 5.03598 10.9748L3.61378 12.381C4.64209 13.421 5.63447 14.2623 6.59123 14.8878L7.68564 13.2138ZM5.02688 10.9658C4.26498 10.2147 3.64739 9.5097 3.1664 8.85097L1.55117 10.0304C2.10972 10.7953 2.80287 11.5818 3.62288 12.3901L5.02688 10.9658ZM3.16642 8.851C2.6679 8.16822 2.27846 7.55251 1.99054 7.00238L0.218553 7.92978C0.563401 8.58869 1.01012 9.28936 1.55115 10.0304L3.16642 8.851ZM1.99052 7.00235C1.69268 6.4333 1.48079 5.9389 1.34457 5.51565L-0.55926 6.12838C-0.379092 6.68819 -0.116406 7.28983 0.21857 7.92981L1.99052 7.00235ZM1.34457 5.51565C1.19599 5.05399 1.10408 4.68278 1.05826 4.39407L-0.917014 4.7076C-0.849848 5.13075 -0.72706 5.607 -0.55926 6.12838L1.34457 5.51565ZM1.05826 4.39407C1.00579 4.06355 0.995827 3.86558 1.00129 3.76732L-0.995636 3.65638C-1.01278 3.96491 -0.977545 4.32626 -0.917014 4.7076L1.05826 4.39407ZM1.00129 3.76732C1.01131 3.58687 1.01977 3.43174 1.01977 3.37287H-0.980226C-0.980226 3.35422 -0.979567 3.34471 -0.980418 3.36514C-0.980959 3.37811 -0.981864 3.39759 -0.983216 3.42463C-0.985903 3.47838 -0.990021 3.55533 -0.995636 3.65638L1.00129 3.76732ZM1.00972 3.51429C1.01593 3.47088 1.03239 3.40842 1.07287 3.32457L-0.728235 2.45507C-0.845947 2.6989 -0.931179 2.95848 -0.970176 3.23145L1.00972 3.51429ZM1.07287 3.32457C1.08958 3.28995 1.10391 3.26729 1.1139 3.25349C1.12371 3.23992 1.12932 3.2349 1.12942 3.23481L-0.208513 1.74822C-0.434986 1.95205 -0.60357 2.19684 -0.728235 2.45507L1.07287 3.32457ZM1.16756 3.19863L3.42179 0.944395L2.00758 -0.46982L-0.246655 1.78441L1.16756 3.19863ZM3.42179 0.944395C3.42442 0.941771 3.40782 0.958821 3.36974 0.975479C3.32983 0.99294 3.28899 1 3.25706 1V-1C2.76068 -1 2.33272 -0.794955 2.00758 -0.46982L3.42179 0.944395ZM3.25706 1C3.23308 1 3.19701 0.996318 3.15466 0.98251C3.1119 0.968564 3.07517 0.948327 3.04689 0.927119L4.24689 -0.672882C3.95352 -0.892907 3.61104 -1 3.25706 -1V1ZM3.04689 0.927119C3.05935 0.936463 3.07414 0.950493 3.09136 0.977553L4.77868 -0.0961993C4.63771 -0.317726 4.46042 -0.512735 4.24689 -0.672882L3.04689 0.927119ZM3.05039 0.906963L4.86395 4.34763L6.63321 3.41506L4.81966 -0.025609L3.05039 0.906963ZM4.87701 4.37161C4.86951 4.35828 4.86015 4.3351 4.85609 4.30666C4.85215 4.27912 4.85568 4.26425 4.85478 4.26855L6.81188 4.68057C6.90391 4.24342 6.84805 3.79622 6.62016 3.39108L4.87701 4.37161ZM4.85478 4.26855C4.85011 4.2907 4.84527 4.30014 4.84428 4.30202C4.84349 4.3035 4.84243 4.30548 4.83808 4.30983L6.2523 5.72404C6.54423 5.43211 6.72907 5.07389 6.81188 4.68057L4.85478 4.26855ZM4.83808 4.30983L4.00758 5.14033L5.42179 6.55455L6.2523 5.72404L4.83808 4.30983ZM4.00758 5.14033C3.82477 5.32314 3.74364 5.53049 3.70668 5.64138L5.60404 6.27384C5.5992 6.28838 5.58712 6.32194 5.56337 6.36604C5.54035 6.4088 5.49659 6.47975 5.42179 6.55455L4.00758 5.14033ZM3.70668 5.64138C3.67309 5.74214 3.62994 5.89958 3.62994 6.08473H5.62994C5.62994 6.14869 5.62222 6.19692 5.61687 6.22364C5.61132 6.2514 5.60571 6.26884 5.60404 6.27384L3.70668 5.64138ZM3.6476 6.27184C3.71679 6.63509 3.86166 7.00065 4.04727 7.3586L5.82278 6.43797C5.692 6.18575 5.63348 6.00895 5.61228 5.89762L3.6476 6.27184ZM4.0406 7.3455C4.21043 7.68516 4.45418 8.06506 4.75239 8.47659L6.37189 7.30303C6.10513 6.9349 5.9308 6.65378 5.82945 6.45107L4.0406 7.3455ZM4.75239 8.47659C5.08019 8.92895 5.52429 9.42191 6.06623 9.95207L7.46482 8.5224C6.96722 8.03562 6.60906 7.63033 6.37189 7.30303L4.75239 8.47659ZM6.05066 9.93649C6.58131 10.479 7.07624 10.9248 7.53253 11.2573L8.71039 9.64097C8.37572 9.39709 7.96669 9.03513 7.4804 8.53798L6.05066 9.93649ZM7.53267 11.2574C7.94725 11.5594 8.32587 11.8056 8.65823 11.9753L9.56779 10.1941C9.36908 10.0926 9.08646 9.91491 8.71025 9.64087L7.53267 11.2574ZM8.65823 11.9753C8.9376 12.118 9.24358 12.2544 9.52755 12.3111L9.91875 10.3497C9.93174 10.3523 9.90891 10.3487 9.83824 10.3202C9.77197 10.2935 9.68278 10.2528 9.56779 10.1941L8.65823 11.9753ZM9.52686 12.3109L9.73867 12.3533L10.1313 10.3923L9.91944 10.3498L9.52686 12.3109ZM9.93496 12.3728C10.136 12.3728 10.3103 12.3131 10.3612 12.2961L9.72908 10.3986C9.72232 10.4009 9.73241 10.3972 9.75461 10.392C9.76628 10.3893 9.7864 10.3851 9.813 10.3813C9.83825 10.3777 9.88077 10.3728 9.93496 10.3728V12.3728ZM10.3618 12.2959C10.472 12.2591 10.6795 12.1781 10.8625 11.9951L9.44825 10.5809C9.5231 10.5061 9.5941 10.4623 9.63681 10.4393C9.68083 10.4156 9.71424 10.4036 9.72847 10.3988L10.3618 12.2959ZM10.8686 11.9889L11.8347 11.0059L10.4082 9.60405L9.44212 10.5871L10.8686 11.9889ZM11.7855 11.0526C11.7951 11.0441 11.8015 11.0399 11.8044 11.0381C11.8059 11.0371 11.8069 11.0366 11.8073 11.0364C11.8078 11.0362 11.808 11.0361 11.808 11.0361C11.808 11.0361 11.8081 11.036 11.8085 11.0359C11.8089 11.0358 11.8098 11.0356 11.8113 11.0353C11.8143 11.0348 11.8213 11.0338 11.8333 11.0338V9.03382C11.3161 9.03382 10.8429 9.21479 10.4573 9.55733L11.7855 11.0526ZM11.8333 11.0338C11.8724 11.0338 11.8839 11.0374 11.8749 11.0354C11.8651 11.0332 11.8273 11.0235 11.7763 10.9929L12.8056 9.27811C12.4816 9.08365 12.1287 9.03382 11.8333 9.03382V11.0338ZM12.2909 11.1355H12.3078V9.13551H12.2909V11.1355ZM11.7993 10.9965L15.0704 12.9287L16.0876 11.2067L12.8164 9.2745L11.7993 10.9965ZM15.0525 12.9179C15.0864 12.9389 15.0824 12.9435 15.0659 12.9217C15.0576 12.9108 15.0482 12.8957 15.0397 12.877C15.0312 12.8582 15.0255 12.8397 15.0222 12.8233L16.9834 12.4309C16.8726 11.8772 16.5245 11.477 16.1055 11.2175L15.0525 12.9179Z" fill="white" mask="url(#path-1-inside-1_1_131)" />
                            </svg>

                            512.333.2222
                        </Link>
                    </div>

                    <div className="flex items-center justify-center md:justify-start ">
                        <Link href={'mailto:sampleemail@gmail.com'}>
                            <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg" className='mr-2'>
                                <path d="M8.13945 6.16166L8.13943 6.16163L8.13512 6.16456C8.10734 6.18343 8.06694 6.19696 8.0235 6.19696H8.02008C7.95651 6.19696 7.91576 6.17544 7.90255 6.1642L7.90186 6.16361L1.09985 0.4H14.9358L8.4497 5.90252L8.44932 5.90285L8.16437 6.1452L8.16349 6.14579L8.13945 6.16166ZM10.0346 6.48934L15.0112 10.6H0.983875L5.97125 6.45877L6.96401 7.30051L6.9651 7.30143C7.25806 7.54803 7.63451 7.67805 8.02235 7.67805C8.4099 7.67805 8.78655 7.54692 9.07963 7.29972L9.08053 7.29895L10.0346 6.48934ZM4.82991 5.4915L0.4 9.17041V1.73773L4.82991 5.4915ZM15.6 1.76878V9.17559L11.1765 5.52124L15.6 1.76878Z" stroke="white" stroke-width="0.8" />
                            </svg>

                            sampleemail@gmail.com
                        </Link>
                    </div>
                </div>
            </div>


            {/* Social Media */}

            <div className="absolute w-full md:max-w-[193px] max-h-[64px] left-auto md:left-[70%] lg:left-[80%] xl:left-[1035px] top-[250px] md:top-[58px] flex items-center justify-center">
                <h1 className="absolute w-[93px] max-h-[19px] left-auto md:left-[1px] top-[1px] font-['Roboto'] not-italic font-bold text-[12px] md:text-[16px] leading-[19px] items-end text-[#FFFFFF]">Social Media</h1>

                <svg width="186" height="21" viewBox="0 0 186 21" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-auto md:left-[1px] top-[43px] justify-center">
                    <Link href={'https://facebook.com/'}>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.13698 18.993H2.04598V9.49903H0.000976562V6.22603H2.04598V4.26203C2.04598 1.59303 3.20098 0.00402832 6.47898 0.00402832H9.20898V3.27703H7.50398C6.22598 3.27703 6.14198 3.73503 6.14198 4.58903L6.13698 6.22603H9.22898L8.86698 9.49903H6.13698V18.993Z" fill="white" />
                    </Link>
                    <Link href={'https://x.com/'}>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M71.008 4.89598C70.235 5.21798 69.404 5.43298 68.533 5.53098C69.423 5.03098 70.106 4.23898 70.428 3.29698C69.594 3.75898 68.672 4.09498 67.69 4.27698C66.905 3.49098 65.784 3.00098 64.545 3.00098C62.165 3.00098 60.234 4.80998 60.234 7.03998C60.234 7.35698 60.272 7.66598 60.346 7.96098C56.764 7.79198 53.588 6.18398 51.462 3.74098C51.091 4.33798 50.879 5.03098 50.879 5.77198C50.879 7.17198 51.64 8.40998 52.796 9.13398C52.09 9.11198 51.426 8.93098 50.844 8.62798C50.844 8.64598 50.844 8.66098 50.844 8.67998C50.844 10.637 52.329 12.269 54.301 12.64C53.94 12.732 53.558 12.78 53.166 12.78C52.888 12.78 52.618 12.756 52.355 12.71C52.903 14.313 54.495 15.482 56.381 15.515C54.906 16.598 53.048 17.243 51.028 17.243C50.68 17.243 50.337 17.224 50 17.187C51.907 18.332 54.173 19.002 56.607 19.002C64.535 19.002 68.87 12.846 68.87 7.50898C68.87 7.33298 68.865 7.15998 68.857 6.98598C69.699 6.41598 70.43 5.70498 71.008 4.89598Z" fill="white" />
                    </Link>
                    <Link href={'https://www.linkedin.com/'}>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M130.512 20.013H113.488C112.672 20.013 112.011 19.434 112.011 18.72V3.28199C112.011 2.56899 112.672 1.98999 113.488 1.98999H130.512C131.327 1.98999 131.988 2.56899 131.988 3.28199V18.72C131.988 19.434 131.327 20.013 130.512 20.013ZM115.473 17.044H118.415V8.90699H115.473V17.044ZM116.964 4.98499C115.957 4.98499 115.3 5.59199 115.3 6.39099C115.3 7.17099 115.938 7.79699 116.925 7.79699H116.944C117.97 7.79699 118.608 7.17099 118.608 6.39099C118.59 5.59199 117.97 4.98499 116.964 4.98499ZM129.023 12.379C129.023 9.87899 127.571 8.71599 125.636 8.71599C124.074 8.71599 123.376 9.50499 122.985 10.06V8.90699H120.043C120.082 9.67099 120.043 17.044 120.043 17.044H122.985V12.5C122.985 12.258 123.004 12.014 123.082 11.841C123.294 11.355 123.779 10.852 124.591 10.852C125.656 10.852 126.081 11.598 126.081 12.692V17.044H129.023V12.379ZM122.965 10.087C122.971 10.078 122.979 10.069 122.985 10.06V10.087H122.965Z" fill="white" />
                    </Link>
                    <Link href={'https://www.pinterest.com/'}>

                        <path fill-rule="evenodd" clip-rule="evenodd" d="M179.424 2C174.489 2 172.001 5.522 172.001 8.46C172.001 10.238 172.677 11.82 174.128 12.41C174.366 12.507 174.579 12.413 174.648 12.151C174.696 11.97 174.81 11.512 174.86 11.321C174.93 11.062 174.903 10.971 174.711 10.745C174.292 10.254 174.025 9.618 174.025 8.717C174.025 6.104 175.989 3.765 179.139 3.765C181.928 3.765 183.46 5.462 183.46 7.727C183.46 10.709 182.135 13.225 180.167 13.225C179.081 13.225 178.268 12.33 178.528 11.233C178.841 9.924 179.445 8.51 179.445 7.564C179.445 6.718 178.989 6.012 178.044 6.012C176.934 6.012 176.042 7.156 176.042 8.688C176.042 9.665 176.373 10.325 176.373 10.325C176.373 10.325 175.236 15.119 175.037 15.959C174.64 17.631 174.978 19.681 175.006 19.889C175.023 20.011 175.181 20.04 175.253 19.948C175.355 19.814 176.678 18.189 177.128 16.564C177.255 16.104 177.858 13.722 177.858 13.722C178.219 14.407 179.274 15.011 180.395 15.011C183.734 15.011 185.999 11.98 185.999 7.924C185.999 4.857 183.39 2 179.424 2Z" fill="white" />
                    </Link>
                </svg>

            </div>


            {/* copy right */}
            <div className='flex text-center items-center justify-center '>
                <hr className="absolute w-full h-0 left-0 top-[347px] mix-blend-normal opacity-10 border-[1px] border-[solid] border-[#FFFFFF]" />
                <p className="absolute h-[22px] xl:left-[645px] top-[373px] font-['Open_Sans'] not-italic font-normal text-[12px] leading-[22px] text-center text-[rgba(200,_200,_200,_0.5)]">© 2021 All Rights Reserved</p>
            </div>


        </footer >
    )
}

export default Footer
