import { pageLinks } from '../data'
import PageLink from './PageLink'

interface pageLinks {
    parentClass:string,
    itemClass: string
}
const PageLinks = ({ parentClass, itemClass } : pageLinks) => {
  return (
    <ul className={parentClass} id='nav-links'>
      {pageLinks.map((link) => {
        return <PageLink key={link.id} link={link} itemClass={itemClass} />
      })}
    </ul>
  )
}
export default PageLinks
