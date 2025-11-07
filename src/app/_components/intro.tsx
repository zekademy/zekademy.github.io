import { CMS_NAME } from "@/lib/constants";

export function Intro() {
  return (
    <div>
      <section className="flex flex-col md:flex-row items-center md:justify-between mt-16 mb-16 md:mb-12 px-6">
        {/* عنوان سایت و توضیحات */}
        <div className="text-center md:text-left mb-5 md:mb-0 max-w-xl">
          <h6 className="text-lg mt-4 md:pl-8 text-neutral-700">
            راهی به سوی آینده ...
          </h6>

        </div>
        {/* تصویر لوگو */}
        <div className="mt-8 md:mt-0">
          <img src="/assets/zekademy.png" alt="Zekademy Logo" className="w-32 h-32 mx-auto md:mx-0" />
        </div>

      </section>
      <p className="mt-6 text-sm leading-relaxed text-neutral-600 text-justify">
        در <strong>ذکادمی</strong>، هدف من ارائه‌ی آموزش‌های کاربردی و مفهومی در زمینه‌ی برنامه‌نویسی، هوش مصنوعی، و فناوری‌های اینترنتی است. اینجا جایی‌ست که تجربه‌های شخصی‌ام در یادگیری و تدریس را با شما به اشتراک می‌گذارم—از مفاهیم پایه تا پروژه‌های واقعی. تلاش می‌کنم مطالب را به زبان ساده، دو‌زبانه (فارسی و انگلیسی)، و با مثال‌های عملی ارائه کنم تا برای همه قابل فهم و قابل استفاده باشد. اگر به دنبال یادگیری عمیق، کاربردی، و خلاقانه هستید، ذکادمی برای شماست.
      </p>
      <br />
    </div>
  );
}