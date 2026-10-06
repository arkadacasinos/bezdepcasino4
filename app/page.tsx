import { Q8n4Foot } from '@/components/q8n4-foot'
import { Q8n4Hero } from '@/components/q8n4-hero'
import { Q8n4Story } from '@/components/q8n4-story'

export default function Page() {
  return (
    <div className="q8n4-page">
      <a className="q8n4-skip" href="#q8n4-story">
        К тексту
      </a>
      <div className="q8n4-wrap">
        <header className="q8n4-top">
          <p className="q8n4-brand">
            <span className="q8n4-mark" aria-hidden="true" />
            Bezdep Casino
          </p>
          <p className="q8n4-age">18+</p>
        </header>
        <main id="q8n4-story" className="q8n4-flow">
          <Q8n4Hero />
          <Q8n4Story />
        </main>
        <Q8n4Foot />
      </div>
      <script src="/q8n4-find.js" defer />
    </div>
  )
}
