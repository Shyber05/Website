import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

/*
if we had an rss feed add this under the <small> tag
<a href="/feed.xml">RSS</a>
*/

const YEAR = new Date().getFullYear()

export default {
  footer: (
    <footer>
      <small>
        <time>{YEAR}</time> © Brandon Scheiber.
      </small>
      <style jsx>{`
        footer {
          margin-top: 8rem;
        }
        a {
          float: right;
        }
      `}</style>
    </footer>
  ),
}
