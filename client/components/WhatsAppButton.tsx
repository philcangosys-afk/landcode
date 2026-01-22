import { useLanguage } from "@/contexts/LanguageContext";

const WhatsAppButton = () => {
  const { language } = useLanguage();
  const isArabic = language === "ar";
  const phoneNumber = "249999900048"; // WhatsApp uses numbers without + or spaces
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl transition-all duration-300 group ${
        isArabic ? "left-6" : "right-6"
      }`}
      title={isArabic ? "تواصل معنا عبر واتساب" : "Contact us on WhatsApp"}
    >
      <svg
        className="w-7 h-7 text-white"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.255.949c-1.168.493-2.205 1.215-3.056 2.115-1.81 1.97-2.752 4.59-2.666 7.357.086 2.767.914 5.397 2.359 7.61l-2.576 8.354 8.528-2.566c2.107 1.126 4.487 1.75 6.823 1.75 2.645 0 5.127-.51 7.472-1.568 2.344-1.057 4.413-2.565 6.098-4.453 1.684-1.888 2.71-4.265 2.71-6.737 0-2.472-1.026-4.849-2.71-6.737-1.685-1.888-3.754-3.396-6.098-4.453-2.345-1.058-4.827-1.568-7.472-1.568z" />
      </svg>

      {/* Tooltip on hover */}
      <span
        className={`absolute bottom-full mb-3 px-3 py-2 text-xs text-white bg-gray-800 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap ${
          isArabic ? "right-0" : "left-0"
        }`}
      >
        {isArabic ? "واتساب" : "WhatsApp"}
      </span>
    </a>
  );
};

export default WhatsAppButton;
