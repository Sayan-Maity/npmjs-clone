import { SiNpm, SiGithub } from "react-icons/si";

const Footer = () => {
  const FooterItems = [
    {
      title: 'Support',
      children: [
        {
          title: 'Help',
          link: ''
        },
        {
          title: 'Advisories',
          link: ''
        },
        {
          title: 'Status',
          link: ''
        },
        {
          title: 'Contact npm',
          link: ''
        },
      ]
    },
    {
      title: 'Company',
      children: [
        {
          title: 'About',
          link: ''
        },
        {
          title: 'Blog',
          link: ''
        },
        {
          title: 'Press',
          link: ''
        },
      ]
    },
    {
      title: 'Terms & Policies',
      children: [
        {
          title: 'Policies',
          link: ''
        },
        {
          title: 'Terms of Use',
          link: ''
        },
        {
          title: 'Code of Conduct',
          link: ''
        },
        {
          title: 'Privacy',
          link: ''
        },
      ]
    },
  ]
  return (
    <div className="flex items-center justify-center w-full border-t border-[#e5e5e5] mt-8">
    <div className="footer flex flex-col md:flex-row w-full 2xl:w-[1500px] justify-start p-4 ">
      <div className="flex flex-col items-start justify-start p-8 gap-2 mt-1">
        <SiNpm className="text-[#333] text-5xl mt-4" />
        <SiGithub className="text-[#333] text-5xl mt-4" />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 w-full justify-around items-start">
        {FooterItems.map((item, index) => (
          <div key={index} className="flex flex-col p-8 w-full">
            <p className="text-lg my-[17px] text-[17px] font-bold text-[#333]">{item.title}</p>
            <div className="flex flex-col gap-1">
              {item.children.map((child, index) => (
                <p key={index} className="text-sm py-1 text-[#000000b3]">{child.title}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Footer
