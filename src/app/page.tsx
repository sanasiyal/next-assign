import Image from "next/image";

export default function Home() {
  return (
  <div className="lg:w-[1280px] h-[72px] top-[100px] left-[100px]  ">
    
          {/* <div>head</div> */}

<div className="w-full h-[54px]  py-[12px] shadow-inner border-b border-black "><h1 className="top-[100px] left-[100px] w-[386px] h-[30px] ml-10 ">Phone Number:  834475974 | Email:info@ddsgnr.com </h1></div>

            {/* <div>logo</div> */}
<header>
<div  className=" w-[1280px] h-[72px]  ">
<nav className="flex w-[1152px] h-[44px] ml-14 mt-4 ">
<Image src={`/images/Ddsgnr Library.png`} alt="pic" width={130.6} height={41}></Image>


<ul className="flex  w-[910px] h-[44px] gap-8 ml-40  mt-3 " >
  <li className="w-[64px] h-[44px] hover:underline "style={{fontFamily:`Roboto`, fontWeight:400}}>Home</li>
  <li className="w-[79px] h-[44px] hover:underline" style={{fontFamily:`Roboto`, fontWeight:400}}>Courses</li>
  <li className="w-[81px] h-[44px] hover:underline"style={{fontFamily:`Roboto`, fontWeight:400}}>Services</li>
  <li className="w-[113px] h-[44px] hover:underline"style={{fontFamily:`Roboto`, fontWeight:400}}>Achievements</li>
  <li className="w-[86px] h-[44px] hover:underline"style={{fontFamily:`Roboto`, fontWeight:400}}>About Us</li>
  <li className="w-[104px] h-[44px] hover:underline"style={{fontFamily:`Roboto`, fontWeight:400}}>Testimonial</li>
   </ul>
  <div className="gap-5 flex">
  <button className="border border-black w-[80px] rounded-[5px] h-[40px] mb-4 ">Login</button>
  <button className=" w-[95px] h-[40px] rounded-[5px] border border-black bg-black text-white">Sign Up</button></div>
</nav>
</div>
</header>

              {/* <div>content</div> */}

<div className="flex w-[1280px] h-[600px] top-[141px] ">

<div >

<div className="w-[800px] h-[300px]  " >
  <h3 className= "ml-28 mt-44 w-[500px] h-[134px] text-[56px]" style={{fontFamily:`Roboto`, fontWeight:700}}  >
    Learn new skills online with ease
    </h3>
  <p className="w-[500px] h-[54px] text-[18px] ml-28 mt-10" style={{fontFamily:`Roboto`, fontWeight:400}}>
    Discover a wide range of course covering a varietyof subjects,taught by expert instructors.
    </p>
</div>


<div className=" flex gap-8 " >

<button className="font-thin w-[178px] h-[48px]  text-white ml-28  bg-black  border-1px rounded-[5px]  px-24px "style={{fontFamily:`Roboto`, fontWeight:400}}>
  start learning now
  </button>

<button className=" px-12px border border-black rounded-[5px] w-[164px] h-[48px]" style={{fontFamily:`Roboto`, fontWeight:400}}>
  Explore Courses
  </button>
</div>
</div>


<div >
<Image src={"/images/Image.svg"} alt="banner" width={640} height={900}></Image>
</div>
</div>


<div className="w-[1280px] h-[228px] py-[80px] px-[64px]  mr-10 flex gap-64">
<div >
  <h1 className="w-[320px] h-[68px] text-[24px]" style={{fontFamily:`Roboto`, fontWeight:700}}>
    Trusted by 2000+ companies worldwide.
    </h1>
    </div>

<div className="w-[880px] h-[56px] flex">
  <div><Image src={"/images/Airbnb Logo.png" } alt="logo" width={123.8} height={38.52}></Image></div>
  <div><Image src={"/images/logo2.svg" } alt="logo" width={123.8} height={38.52}></Image></div>
  <div><Image src={"/images/logo3.png" } alt="logo" width={123.8} height={38.52}></Image></div>
  <div><Image src={"/images/logo4.png" } alt="logo" width={123.8} height={38.52}></Image></div>
  <div><Image src={"/images/logo5.png" } alt="logo" width={123.8} height={38.52}></Image></div>
  <div><Image src={"/images/logo6.png" } alt="logo" width={123.8} height={38.52}></Image></div>

  </div>
</div>


<div >
<div className="w-[768px] h-[109px] gap-[357px] ml-72 ">
<h1 className="w-[768px] h-[58px] text-[48px] leading-[57.6px] " style={{fontFamily:`Roboto`, fontWeight:700}}>
  Explore Courses By Category
  </h1>
<p className="w-[768px] h-[27px] text-[18px] leading-[27px]" style={{fontFamily:`Roboto`, fontWeight:400}}>
  Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
  </p>
</div>

</div>

<div className="w-[1280px] h-[600px] gap-96 mt-6 ml-16  ">
<div className="w-[1280px] h-[132px] ">

 <div className="w-[410.67px] h-[132px] rounded-[5px] flex">
    <Image src={"/images/icon.png"} alt="icon"  width={100} height={100} ></Image>
   <div > 
    <h1 className="w-[246.67px] h-[30px]  leading-[30px] mt-9 font-semibold">Design & Development
      </h1> 
    <p  className="w-[246.67px] h-[27px]" style={{fontFamily:`Roboto`, fontWeight:400}}>
      50+ Courses Available
      </p>
    </div>


    
    <div className="w-[410.67px] h-[132px] rounded-[5px] ml-20 flex">
    <Image src={"/images/icon2.png"} alt="icon" width={100} height={100} ></Image>
   <div > 
    <h1 className="w-[246.67px] h-[30px]  leading-[30px] mt-9 font-semibold">
      Marketing
      </h1> 
    <p  className="w-[246.67px] h-[27px]"style={{fontFamily:`Roboto`, fontWeight:400}}>
      50+ Courses Available
      </p>
    </div>


    <div className="w-[410.67px] h-[132px] rounded-[5px] ml-20 flex">
    <Image src={"/images/icon 3.png"} alt="icon" width={100} height={100} ></Image>
   <div > 
    <h1 className="w-[246.67px] h-[30px]  leading-[30px] mt-9 font-semibold">
      Development
      </h1> 
    <p  className="w-[246.67px] h-[27px]"style={{fontFamily:`Roboto`, fontWeight:400}}>
      50+ Courses Available
      </p>
      </div>
     </div>
     </div>
</div>


<div className="w-[410.67px] h-[132px] rounded-[5px] flex">
    <Image src={"/images/icon3.png"} alt="icon"  width={100} height={100} ></Image>
   <div > 
    <h1 className="w-[246.67px] h-[30px]  leading-[30px] mt-9 font-semibold">
      Communication
      </h1> 
    <p  className="w-[246.67px] h-[27px]"style={{fontFamily:`Roboto`, fontWeight:400}}>
      50+ Courses Available
      </p>
      </div>


    
    <div className="w-[410.67px] h-[132px] rounded-[5px] ml-20 flex">
    <Image src={"/images/icon4.png"} alt="icon" width={100} height={100} ></Image>
   <div > 
    <h1 className="w-[246.67px] h-[30px]  leading-[30px] mt-9 font-semibold">
      Digital Marketing
      </h1> 
    <p  className="w-[246.67px] h-[27px]"style={{fontFamily:`Roboto`, fontWeight:400}}>
      50+ Courses Available
      </p>
      </div>


    <div className="w-[410.67px] h-[132px] rounded-[5px] ml-20 flex">
    <Image src={"/images/icon6.png"} alt="icon" width={100} height={100} ></Image>
   <div >
     <h1 className="w-[246.67px] h-[30px]  leading-[30px]  mt-9 font-semibold">
      Self Development
      </h1> 
    <p  className="w-[246.67px] h-[27px]"style={{fontFamily:`Roboto`, fontWeight:400}}>
      50+ Courses Available
      </p>
    </div>
  
</div>

</div>
 </div> 
 
 <div className="w-[410.67px] h-[132px] rounded-[5px] flex ">
    <Image src={"/images/icon7.png"} alt="icon"  width={100} height={100} ></Image>
   <div >
     <h1 className="w-[246.67px] h-[30px]  leading-[30px]  mt-9 font-semibold">
      Business
      </h1> 
    <p  className="w-[246.67px] h-[27px]"style={{fontFamily:`Roboto`, fontWeight:400}}>
      50+ Courses Available
      </p>
      </div>


    
    <div className="w-[410.67px] h-[132px] rounded-[5px] ml-20 flex ">
    <Image src={"/images/icon8.png"} alt="icon" width={100} height={100} ></Image>
   <div >
     <h1 className="w-[246.67px] h-[30px]  leading-[30px] mt-9 font-semibold">
      Finance
      </h1> 
    <p  className="w-[246.67px] h-[27px]"style={{fontFamily:`Roboto`, fontWeight:400}}>
      50+ Courses Available
      </p>
      </div>


    <div className="w-[410.67px] h-[132px] rounded-[5px] ml-20 flex ">
    <Image src={"/images/icon9.png"} alt="icon" width={100} height={100} ></Image>
   <div > 
    <h1 className="w-[246.67px] h-[30px]  leading-[30px] mt-9 font-semibold">
      Consulting
      </h1> 
    <p  className="w-[246.67px] h-[27px]"style={{fontFamily:`Roboto`, fontWeight:400}}>
      50+ Courses Available
      </p>
      </div>
    </div>
  </div>
  
 
  </div>
  <div  className="w-[155px] h-[48px] border rounded-[5px]  border-black ml-[500px] mt-14">
    <button className=" text-[16px] leading-[24px] w-[120px] h-[24px] text-[#000000] mt-3 ml-4"style={{fontFamily:`Roboto`, fontWeight:400}}>View All Courses
      </button>
      </div>
  </div>
 </div>



<div className="w-[1152px] h-[264px] ">
  <div className="w-[1152px] h-[136px]  ml-28"> 
    <h1 className="w-[1152px] h-[58px] text-[48px] text-center"style={{fontFamily:`Roboto`, fontWeight:700}}>
      Our Achivements
      </h1>
      <p className="w-[1152px] h-[54px] text-[18px] leading-[27px] text-center mt-4 " style={{fontFamily:`Roboto`, fontWeight:400}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>
        </div>

  <div className="w-[1256px] h-[96px] ">
    <div className="w-[1256px] h-[96px] flex  justify-center ml-28 mt-2">
      <div className="w-[296px] h-[80px] ">
        <h1 className="w-[91px] h-[48px] text-[40px]" style={{fontFamily:`Roboto`, fontWeight:700}}>
          +200
          </h1> 
          <p className="w-[59px] h-[24px] text-[16px] ml-5"style={{fontFamily:`Roboto`, fontWeight:400}}>Courses
            </p>
            </div>


          <div className="w-[296px] h-[80px] ">
            <h1 className="w-[72px] h-[50px] text-[40px]"style={{fontFamily:`Roboto`, fontWeight:700}}>
              50K
              </h1>
               <p className="w-[60px] h-[24px] text-[16px] ml-2"style={{fontFamily:`Roboto`, fontWeight:400}} >
               Mentors
               </p>
               </div>


      <div className="w-[296px] h-[80px] ">
        <h1 className="w-[91px] h-[48px] text-[40px]" style={{fontFamily:`Roboto`, fontWeight:700}}>
          370k
          </h1> 
          <p className="w-[64px] h-[24px] text-[16px] ml-2"style={{fontFamily:`Roboto`, fontWeight:400}}>
            Students
            </p>
            </div>

      <div className="w-[296px] h-[80px] "><h1 className="w-[91px] h-[48px] text-[40px]"style={{fontFamily:`Roboto`, fontWeight:700}}>
        100+
        </h1>
         <p className="w-[85px] h-[24px] text-[16px] ml-3" style={{fontFamily:`Roboto`, fontWeight:400}}>
          Recognition
          </p>
          </div>
          </div>
        </div>
      </div>

  
  <div className=" w-[768px] h-[118px] ml-60">
   <h1 className="w-[768px] h-[67px] text-center text-[56px] leading-[67.2px]"style={{fontFamily:`Roboto`, fontWeight:700}}>
    Courses
    </h1>
   <p className="w-[768px] h-[27px] text-[18px] text-center leading-[27px]" style={{fontFamily:`Roboto`, fontWeight:400}}>
    Your Ultimate Guide to learning
    </p>


   <div className=" w-[336px] h-[40px] flex  gap-8  ml-60 mt-4 "> 
    <h1 className="w-[55px] h-24px] text-[16px] border-b border-[#676767] mt-2"style={{fontFamily:`Roboto`, fontWeight:400}}>Popular</h1> 
   <h1 className="w-[108px] h-[24px] text-[16px] mt-2 "style={{fontFamily:`Roboto`, fontWeight:400}}>
    Recommended
    </h1> 

   <h1 className="w-[77px] h-[24px] text-[16px] mt-2 "style={{fontFamily:`Roboto`, fontWeight:400}}>
    Best  Price
    </h1> 
 </div>
  <div>
 </div>
</div>
 
 
  <div className="w-[1312px]  h-[534px] gap-10 flex  mt-10">s
    <div className=" w-[416px] h-[500px]  mt-6 ">
      <Image src={"/images/pic1.png"} alt="pic" width={416} height={300}>
      </Image> 
      <div className="w-[382px] h-[24px]"><h1 className="w-[326px] h-[21px]  mt-2 text-[14px]font-semibold">
        Design
        </h1>
        </div>

    <h1 className="w-[382px]h-[34px] text-[24px] mt-2 leading-[33.6px]"style={{fontFamily:`Roboto`, fontWeight:700}}>
      UX/UI Design 201
      </h1>
      <p className="w-[382px] h-[48px] text-[16px] leading-[24px]"style={{fontFamily:`Roboto`, fontWeight:400}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
        </p>


    <div className="w-[382px] h-[40px] flex">
       <button className="w-[117px] h-[40px] border border-black  rounded-[5px] mt-4"style={{fontFamily:`Roboto`, fontWeight:400}}>
        Enroll Now
        </button> 
        <div className="w-[77px] h-[40px] mt-6 ml-9" style={{fontFamily:`Roboto`, fontWeight:500}}>
          $400
          </div>
          </div>
    </div>

    <div className=" w-[416px] h-[500px] mt-8  ">
      <Image src={"/images/pic2.png"} alt="pic" width={416} height={300}>
      </Image> 
      <div className="w-[382px] h-[24px]">
        <h1 className="w-[326px] h-[21px]  mt-2 text-[14px]font-semibold">
          Programmimg
          </h1>
          </div>
    <h1 className="w-[382px]h-[34px] text-[24px] mt-2 leading-[33.6px]"style={{fontFamily:`Roboto`, fontWeight:700}}>
      Introduction to Python
      </h1>
      <p className="w-[382px] h-[48px] text-[16px] leading-[24px]"style={{fontFamily:`Roboto`, fontWeight:400}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
        </p>

    <div className="w-[382px] h-[40px] flex"> 
      
      <button className="w-[117px] h-[40px] border border-black  rounded-[5px] mt-4"style={{fontFamily:`Roboto`, fontWeight:400}}>
        Enroll Now
        </button>
         <div className="w-[77px] h-[40px] mt-6 ml-9" style={{fontFamily:`Roboto`, fontWeight:500}}>$400</div>
         </div>
    </div>


    <div className=" w-[416px] h-[500px] mt-6 ">
      <Image  src={"/images/pic3.png"} alt="pic" width={416} height={300}>
    </Image> 
    <div className="w-[382px] h-[24px]">
      <h1 className="w-[326px] h-[21px] mt-2 text-[14px]font-semibold">
        Business
        </h1>
        </div>
    <h1 className="w-[382px]h-[34px] text-[24px] mt-2 leading-[33.6px]"style={{fontFamily:`Roboto`, fontWeight:700}}>
      Data Analysis for Beginners
      </h1>
      <p className="w-[382px] h-[48px] text-[16px] leading-[24px]"style={{fontFamily:`Roboto`, fontWeight:400}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
        </p>


    <div className="w-[382px] h-[40px] flex">
       <button className="w-[117px] h-[40px] border border-black  rounded-[5px] mt-4" style={{fontFamily:`Roboto`, fontWeight:400}}>
        Enroll Now
        </button> 
        
      <div className="w-[77px] h-[40px] mt-6 ml-9" style={{fontFamily:`Roboto`, fontWeight:500}}>
        $400
        </div>
        </div>
    </div>

  </div>

 <div className=" w-[1312px] h-[534px] flex gap-10 ml-8 " >

 <div className="  w-[416px] h-[500px] mt-6  ">
  <Image src={"/images/pic4.png"} alt="pic" width={416} height={300}>
  </Image>
   <div className="w-[382px] h-[24px]"><h1 className="w-[326px] h-[21px]  mt-2 text-[14px] font-semibold">
    Art
    </h1>
    </div>


    <h1 className="w-[382px]h-[34px] text-[24px] mt-2 leading-[33.6px]" style={{fontFamily:`Roboto`, fontWeight:700}}>
      Art Specialization
      </h1>
      <p className="w-[382px] h-[48px] text-[16px] leading-[24px]"style={{fontFamily:`Roboto`, fontWeight:400}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
        </p>
    <div className="w-[382px] h-[40px] flex"> 
      <button className="w-[117px] h-[40px] border border-black  rounded-[5px] mt-4"style={{fontFamily:`Roboto`, fontWeight:400}}>
        Enroll Now
        </button>
         <div className="w-[77px] h-[40px] mt-6 ml-9" style={{fontFamily:`Roboto`, fontWeight:500}}>
          $400
          </div>
          </div>
    </div>

    <div className=" w-[416px] h-[500px] mt-8 ">
      <Image src={"/images/pic5.png"} alt="pic" width={416} height={300}>
      </Image> 
      <div className="w-[382px] h-[24px]">
        <h1 className="w-[326px] h-[21px]  mt-2 text-[14px] font-semibold">
          Law
          </h1>
          </div>
    <h1 className="w-[382px]h-[34px] text-[24px] mt-2 leading-[33.6px]"style={{fontFamily:`Roboto`, fontWeight:700}}>
      Rule of Law
      </h1
      ><p className="w-[382px] h-[48px] text-[16px] leading-[24px]"style={{fontFamily:`Roboto`, fontWeight:400}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
        </p>
    <div className="w-[382px] h-[40px] flex">
      
       <button className="w-[117px] h-[40px] border border-black  rounded-[5px] mt-4"style={{fontFamily:`Roboto`, fontWeight:400}}>
        Enroll Now
        </button>
         <div className="w-[77px] h-[40px] mt-6 ml-9" style={{fontFamily:`Roboto`, fontWeight:500}}>$400

         </div>
         </div>
    </div>



    <div className=" w-[416px] h-[500px] mt-6 ">
      <Image  src={"/images/pic6.png"} alt="pic" width={416} height={300}>
      </Image> 
      <div className="w-[382px] h-[24px]"><h1 className="w-[326px] h-[21px] mt-2 text-[14px] font-semibold ">
        Tech
        </h1>
        </div>
    <h1 className="w-[382px]h-[34px] text-[24px] mt-2 leading-[33.6px]" style={{fontFamily:`Roboto`, fontWeight:700}}>
      Introduction to webflow
      </h1>
      <p className="w-[382px] h-[48px] text-[16px] leading-[24px] " style={{fontFamily:`Roboto`, fontWeight:400}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
        </p>
    <div className="w-[382px] h-[40px] flex"> 
      <button className="w-[117px] h-[40px] border border-black  rounded-[5px] mt-4"style={{fontFamily:`Roboto`, fontWeight:400}}>
        Enroll Now
        </button>
         <div className="w-[77px] h-[40px] mt-6 ml-9" style={{fontFamily:`Roboto`, fontWeight:500}}>
          $400
          </div>
         </div>
    </div>


 </div>
 
 <button className=" w-[152px] h-[40px] border border-black rounded-[5px] ml-[550px] mt-10"style={{fontFamily:`Roboto`, fontWeight:400}} >
  View All Courses
  </button>
 

 <div className=" w-[768px] h-[109px] ml-60 mt-9">
  <h1 className="w-[768px] h-[58px] text-[48px] text-center leading-[57.6px] mt-14"style={{fontFamily:`Roboto`, fontWeight:700}}>
    Our team
    </h1>
    <p className="w-[768px] h-[27px] text-[18px] ml-40"style={{fontFamily:`Roboto`, fontWeight:400}}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      </p>
      </div>


 <div className=" w-[1280px] h-[209px] mt-4 flex">
  <div className="w-[394.67px] h-[209px]  ml-16">
    
    <Image  className=" ml-6"src={"/images/m1.png"} alt="pic" width={80} height={80}>
    
  </Image>
  <h1 className="w-[394.67px] h-[30px] text-[20px] font-semibold ">
    James Nduku
    </h1>
    <p style={{fontFamily:`Roboto`, fontWeight:400}}>
      Marketing Coordinator 
      </p>
 
  </div>


  <div className="w-[394.67px] h-[209px]  ml-16"
  >
    <Image  className=" ml-10"src={"/images/m2.png"} alt="pic" width={80} height={80}>
    </Image>
  <h1 className="w-[394.67px] h-[30px] text-[20px]  font-semibold">
    Joseph Munyambu</h1>
    <p className="ml-3"style={{fontFamily:`Roboto`, fontWeight:400}}>Nursing Assistant</p>
    </div>



  <div className="w-[394.67px] h-[209px]  ml-16"><Image  className=" ml-10"src={"/images/m3.png"} alt="pic" width={80} height={80}></Image>
  <h1 className="w-[394.67px] h-[30px] text-[20px] font-semibold ">Joseph Ngumbau</h1>
  <p className="ml-3"style={{fontFamily:`Roboto`, fontWeight:400}}>Medical Assistant</p>
  </div>


 </div>

 <div className=" w-[560px] h-[109px] ml-14 mt-6">
  <h1 className="w-[560px] h-[58px] text-[48px] leading-[57.6px]" style={{fontFamily:`Roboto`, fontWeight:700}}>Customer testimonials</h1>
  <p style={{fontFamily:`Roboto`, fontWeight:400}} >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>


<div className=" ml-20 mt-10">
  
<Image src={"/images/Content.png"} alt="pic" width={1152} height={417.89}></Image>
</div>


<div className=" w-[1120px] h-[82px] justify-between ml-20 mt-4 flex"> <div>
  <h1 className="w-[500px] h-[27px] text-[18px]">Subscribe to our newsletter</h1>
  <p className="w-[500px] h-[27px] text-[16px]" style={{fontFamily:`Roboto`, fontWeight:400}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>

<div className=" w-[400px] h-[82px]  "> 
  <div>
  <input className="w-[265px] h-[48px] rounded-[5px] border gap-8 border-black " name="text" id="#" placeholder="Enter your email"></input> 
<button className="w-[119px] h-[48px] border border-black rounded-[5px]"style={{fontFamily:`Roboto`, fontWeight:400}}>Subscribe</button>
<p className="w-[400px] h-[18px] mt-2"style={{fontFamily:`Roboto`, fontWeight:400}}>By subscribing you agree to with our Privacy Policy</p>
</div>
</div>

</div>
                {/* <footer> */}

<div className="w-[1120px] h-[255px] gap-8 ml-20 flex">
<div className="w-[250px] h-[40px] mt-12 ml-16">
  <Image src={"/images/Ddsgnr Library.png" } alt="logo" width={130.6} height={40}></Image>
  </div>

<div className=" w-[250px] h-[255px] leading-[40px] text-[16px] space-y-2 mt-6">
  <h1 className="font-semibold ">Courses</h1>
<p className="text-[14px] leading-[21px] "style={{fontFamily:`Roboto`, fontWeight:400}}>Business</p>
<p className="text-[14px] leading-[21px]"style={{fontFamily:`Roboto`, fontWeight:400}}>Development</p>
<p className="text-[14px] leading-[21px]"style={{fontFamily:`Roboto`, fontWeight:400}}>Technology</p>
<p className="text-[14px] leading-[21px]"style={{fontFamily:`Roboto`, fontWeight:400}}>Design</p>
<p className="text-[14px] leading-[21px]"style={{fontFamily:`Roboto`, fontWeight:400}}>Programming</p>
</div>


<div className=" w-[250px] h-[255px] leading-[40px] text-[16px] space-y-2 mt-6"><h1 className="font-semibold ">Resources</h1>
<p className="text-[14px] leading-[21px] "style={{fontFamily:`Roboto`, fontWeight:400}}>Career</p>
<p className="text-[14px] leading-[21px]"style={{fontFamily:`Roboto`, fontWeight:400}}>Resume</p>
<p className="text-[14px] leading-[21px]"style={{fontFamily:`Roboto`, fontWeight:400}}>Learning</p>
<p className="text-[14px] leading-[21px]"style={{fontFamily:`Roboto`, fontWeight:400}}>Interview Preparation</p>
<p className="text-[14px] leading-[21px]"style={{fontFamily:`Roboto`, fontWeight:400}}>Jobs</p>
</div>



<div className=" w-[250px] h-[255px] leading-[40px] text-[16px] space-y-2 mt-6"><h1 className="font-semibold ">About Us</h1>
<p className="text-[14px] leading-[21px] "style={{fontFamily:`Roboto`, fontWeight:400}}>Contact</p>
<p className="text-[14px] leading-[21px]"style={{fontFamily:`Roboto`, fontWeight:400}}>Help/Support</p>
<p className="text-[14px] leading-[21px]"style={{fontFamily:`Roboto`, fontWeight:400}}>FAQ</p>
<p className="text-[14px] leading-[21px]"style={{fontFamily:`Roboto`, fontWeight:400}}>Terms and Conditions</p>
<p className="text-[14px] leading-[21px]"style={{fontFamily:`Roboto`, fontWeight:400}}>Partners</p>
</div>

</div>
 
 
<div className=" w-[1120px] h-[57px] mt-8 ml-20 flex gap-4 border-t border-black ">
  <h1 className="mt-2" style={{fontFamily:`Roboto`, fontWeight:400}}>2023 Ddsgnr. All right reserved.</h1>
  <h1 className="underline mt-2" style={{fontFamily:`Roboto`, fontWeight:400}}>Privacy Policy</h1>
  <h1 className="underline mt-2" style={{fontFamily:`Roboto`, fontWeight:400}}>Terms of Service</h1>
  <h1 className="underline mt-2"style={{fontFamily:`Roboto`, fontWeight:400}}>Cookies Settings</h1>
</div>


  </div>




  );
}
