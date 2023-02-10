
interface link {
    id: number,
    href: string,
    text: string
}

interface pageLinkTypes {
    link: link,
    itemClass: string
}

const PageLink = ({ link, itemClass }: pageLinkTypes) => {
  return (
    <li key={link.id}>
      <a href={link.href} className={itemClass}>
        {link.text}
      </a>
    </li>
  )
}
export default PageLink
