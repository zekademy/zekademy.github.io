import Link from "next/link";

const Header = () => {
  return (
    <section className="flex flex-col md:flex-row items-center md:justify-between mt-16 mb-16 md:mb-12 px-6">
      {/* عنوان سایت */}
      <div className="text-center md:text-left mb-5 md:mb-0">
        <h6 className="text-lg mt-4 md:pl-8 text-neutral-700">
          راهی به سوی آینده ...
        </h6>
      </div>

      {/* اضافه کردن تصویر یا آیکون برای جذابیت بیشتر */}
      <div className="mt-8 md:mt-0">
        <Link href="/" className="hover:underline">
          <img src="/assets/zekademy.png" alt="Zekademy Logo" className="w-32 h-32 mx-auto md:mx-0" />
        </Link>
      </div>
    </section>
  );
};

export default Header;
