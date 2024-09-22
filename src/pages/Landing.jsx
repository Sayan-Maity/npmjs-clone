import Item from "../assets/Item.png"
import PageWrapper from "../components/PageWrapper"

const Landing = () => {
  return (
    <PageWrapper>
      <div className="landing-page flex container-bg text-white w-full items-center justify-center py-16 px-4">
        <div className="w-[700px] text-center">
          <p className="text-[72px] leading-tight my-[53.6px] font-semibold">Build amazing things</p>
          <div className="flex flex-col mx-[112px]">
            <p className="text-[13px]">We're GitHub, the company behind the npm Registry and npm CLI. We offer those to the community for free, but our day job is building and selling useful tools for developers like you.</p>
            <p className="text-[32px] leading-tight my-[30px] font-semibold">Take your JavaScript development up a notch</p>
            <p className="text-[13px]">Get started today for free, or step up to npm Pro to enjoy a premium JavaScript development experience, with features like private packages.</p>
            <div className="mt-14">
              <button className="bg-[#ffc329] text-black py-3 px-10 rounded-full font-semibold mr-4 mb-4 shadow-2xl">Sign up for free</button>
              <button className="bg-[#cb3837] text-white py-3 px-10 rounded-full font-semibold border-2 border-[#fff] ml-4 mb-4 shadow-2xl">Learn about Pro</button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full px-4 py-16 mb-16">
        <img src={Item} alt="" />

        <div className="flex flex-col items-center justify-center text-center w-[490px]">
          <p className="my-[30px] text-4xl text-[#333] font-bold">Bring the best of open source to you, your team, and your company</p>
          <p className="text-[#333] text-[13.5px]">Relied upon by more than 17 million developers worldwide, npm is committed to making JavaScript development elegant, productive, and safe. The free npm Registry has become the center of JavaScript code sharing, and with more than two million packages, the largest software registry in the world. Our other tools and services take the Registry, and the work you do around it, to the next level.</p>
        </div>
      </div>
    </PageWrapper>
  )
}

export default Landing
