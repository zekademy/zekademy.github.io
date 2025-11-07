import Container from "@/app/_components/container";
import { EXAMPLE_PATH } from "@/lib/constants";
import {
  FaInstagram,
  FaTelegramPlane,
  FaWhatsapp,
  FaYoutube,
  FaVideo
} from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-200 border-t border-neutral-700">
      <div className="max-w-6xl mx-auto px-2 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* سمت چپ */}
          <div>
            <h3 className="text-3xl font-bold mb-4 text-white">
              Zekademy.ir
            </h3>
            <p className="text-neutral-400 mb-6 leading-relaxed">
              جایی برای یادگیری مهارت‌های جدید، رشد فردی و آموزش‌های من در حوزه توسعه و تکنولوژی.
            </p>

            {/* آیکون‌های شبکه‌های اجتماعی */}
            <div className="flex justify-start md:justify-center gap-5 text-2xl mt-6">
              <a href="https://instagram.com/zekademy" className="text-neutral-400 hover:text-pink-500 transition-colors duration-200" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://t.me/zekademy" className="text-neutral-400 hover:text-sky-400 transition-colors duration-200" aria-label="Telegram">
                <FaTelegramPlane />
              </a>
              <a href="https://wa.me/989000000000" className="text-neutral-400 hover:text-green-500 transition-colors duration-200" aria-label="Whatsapp">
                <FaWhatsapp />
              </a>
              <a href="https://aparat.com/zekademy" className="text-neutral-400 hover:text-red-500 transition-colors duration-200" aria-label="Aparat">
                <img src="https://www.aparat.com/redesign/static/pwa-assets/512.png" alt="Aparat" className="w-6 h-6" />
              </a>
              <a href="https://youtube.com/zekademy" className="text-neutral-400 hover:text-red-600 transition-colors duration-200" aria-label="YouTube">
                <FaYoutube />
              </a>
            </div>
          </div>

        </div>

        {/* کپی‌رایت وسط چین شده */}
        <div className="flex justify-center text-neutral-500 text-sm mt-10 border-t border-neutral-800 pt-6">
          <span>© {new Date().getFullYear()} Zekademy.ir - تمام حقوق محفوظ است.</span>
        </div>
      </div>
    </footer>


  );
}

export default Footer;
