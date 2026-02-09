import igIcon from "../assets/instagram.png"; 
import ytIcon from "../assets/youtube.png";   

export default function Footer() {
  const SOCIAL = {
    instagram: "https://www.instagram.com/hearts2hearts?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    youtube: "https://www.youtube.com/@hearts2hearts.official",
  };

  return (
    <footer className="bg-skysoft-100/80 backdrop-blur border-b border-white/60">
      <div className="max-w-6xl mx-auto px-4 py-5 flex flex-col md:flex-row md:items-start md:justify-between gap-10">
        <div>
          <div className="text-xs font-black tracking-wider text-slate-400">
            IKUTI HEART2HEARTS TICKETING DI
          </div>

          <div className="mt-4 flex items-center gap-4">
            <a
              href={SOCIAL.instagram}
              target="_blank"
              rel="noreferrer"
              className="h-16 w-16 rounded-full bg-slate-300/80 grid place-items-center shadow-soft hover:opacity-90 transition"
              aria-label="Instagram"
              title="Instagram"
            >
              <img
                src={igIcon}
                alt="Instagram"
                className="h-8 w-8 object-contain"
                draggable="false"
              />
            </a>

            <a
              href={SOCIAL.youtube}
              target="_blank"
              rel="noreferrer"
              className="h-16 w-16 rounded-full bg-slate-300/80 grid place-items-center shadow-soft hover:opacity-90 transition"
              aria-label="YouTube"
              title="YouTube"
            >
              <img
                src={ytIcon}
                alt="YouTube"
                className="h-8 w-8 object-contain"
                draggable="false"
              />
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 sm:items-end">
          <div>
            <div className="text-sm font-bold text-slate-600">Lokasi</div>
            <div
              className="mt-2 w-56 h-12 px-5 rounded-md bg-slate-400 text-white font-bold shadow-soft flex items-center"
              aria-label="Lokasi"
              title="Lokasi"
            >
              Indonesia
            </div>
          </div>

          <div>
            <div className="text-sm font-bold text-slate-600">Venue</div>
            <div
              className="mt-2 w-56 h-12 px-5 rounded-md bg-slate-400 text-white font-bold shadow-soft flex items-center"
              aria-label="Venue"
              title="Venue"
            >
              GBK Jakarta, Indonesia
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-skysoft-100">
        <div className="max-w-6xl mx-auto px-4 py-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-black text-slate-900">
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="hover:text-skysoft-600 transition"
          >
            Heart2HearstTicketing
          </a>
          <span className="text-slate-400 font-black">|</span>
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="hover:text-skysoft-600 transition"
          >
            Event
          </a>
          <span className="text-slate-400 font-black">|</span>
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="hover:text-skysoft-600 transition"
          >
            Merch
          </a>

          <span className="ml-2 text-slate-700 font-black">©Heart2Hearts Ticketing</span>
        </div>
      </div>
    </footer>
  );
}
