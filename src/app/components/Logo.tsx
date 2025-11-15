import Image from "next/image";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/logos/logo.png"
      alt="SoftServe Pro Logo"
      width={200}
      height={50}
      className={className}
      priority
    />
  );
}
