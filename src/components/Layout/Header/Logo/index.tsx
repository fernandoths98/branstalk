import Image from "next/image";
import Link from "next/link";
import Icons from "@/assets/logo-white-cropped.svg";
// import Icons from "@/assets/logo-white.svg";

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <Image
        src={Icons}
        alt="logo"
        width={160}
        height={50}
        style={{ width: 200, height: 50, marginLeft: 5}}
        quality={100}
      />
    </Link>
  );
};

export default Logo;
