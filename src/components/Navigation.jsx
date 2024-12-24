import { ExternalLink, Download } from 'lucide-react'

export default function Navigation() {
  return (
    <nav className="flex justify-between items-center">
      <div>
        <h1 className="text-md font-medium text-gray-900">
          Florentin Dumitrache
        </h1>
        <h3 className="text-sm text-gray-700">Full Stack Developer</h3>
      </div>

      <ul className="flex items-center gap-2 text-sm text-gray-800 tracking-wide">
        <a
          href="https://www.linkedin.com/in/florentin-dumitrache-cristian/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <li className="border border-gray-200 py-2 px-4 rounded-xl hover:bg-gray-200">
            <ExternalLink size={14} className="inline-block mr-1" />
            LinkedIn
          </li>
        </a>

        <a
          href="/Florentin-Cristian_Dumitrache_-_Full_Stack_Developer.pdf"
          download
        >
          <li className="border border-gray-200 py-2 px-4 rounded-xl hover:bg-gray-200">
            <Download size={14} className="inline-block mr-1" />
            Resume
          </li>
        </a>
      </ul>
    </nav>
  )
}
