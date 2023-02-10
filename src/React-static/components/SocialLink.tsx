interface socialLinkTypes {
    itemClass: string,
    href: string,
    icon: string
}

const SocialLink = ({ itemClass, href, icon }: socialLinkTypes) => {
  return (
    <li>
      <a href={href} target='_blank' rel='noreferrer' className={itemClass}>
        <i className={icon}></i>
      </a>
    </li>
  )
}
export default SocialLink
