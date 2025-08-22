interface VeniceLogoProps {
  size?: number;
  className?: string;
}

export function VeniceLogo({ size = 80, className = "" }: VeniceLogoProps) {
  return (
    <div className={`inline-flex items-center justify-center ${className}`}>
      <img
        src="/venice-logo.png"
        alt="Venice Community Logo"
        width={size}
        height={size}
        className="rounded-full drop-shadow-lg border-2 border-white/20"
        style={{ objectFit: 'cover' }}
      />
    </div>
  );
}

export function VeniceLogoWithText({ size = 60, className = "" }: VeniceLogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <VeniceLogo size={size} />
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold text-primary bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Venice Community
        </h1>
      </div>
    </div>
  );
}