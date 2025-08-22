import { QRCode } from "./qr-code";
import { Button } from "./button";

interface DiscordQRProps {
  size?: number;
  showButton?: boolean;
  className?: string;
}

export function DiscordQR({ size = 180, showButton = true, className = "" }: DiscordQRProps) {
  const discordUrl = "https://discord.gg/1-ve";

  return (
    <div className={`bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-6 border border-primary/30 ${className}`}>
      <div className="text-center">
        <h3 className="text-xl font-bold text-primary mb-4 flex items-center justify-center">
          <i className="fab fa-discord ml-2"></i>
          انضم إلى Venice Discord
        </h3>
        
        <div className="flex flex-col items-center space-y-4">
          <QRCode 
            value={discordUrl}
            size={size}
            darkColor="#00f5ff"
            lightColor="#0f0f0f"
            className="hover:scale-105 transition-transform duration-300"
          />
          
          <div className="text-center">
            <p className="text-sm text-gray-400 mb-2">امسح الرمز بكاميرا هاتفك</p>
            <div className="flex items-center justify-center gap-2 text-primary font-mono text-sm">
              <i className="fas fa-link"></i>
              <span>discord.gg/1-ve</span>
            </div>
          </div>
          
          {showButton && (
            <Button
              asChild
              className="bg-[#5865f2] hover:bg-[#4752c4] text-white px-6 py-2 text-sm transition-all duration-300 hover:scale-105"
              data-testid="discord-join-button"
            >
              <a 
                href={discordUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-discord mr-2"></i>
                فتح في المتصفح
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}