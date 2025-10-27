import { useEffect, useRef } from "react";

export default function BackgroundMusic() {
  const audioRef = useRef(null);

  useEffect(() => {

    const audio = audioRef.current;

    const playAudio = () => {
      audio.play().catch((err) => {
        console.log("Reprodução automática bloqueada pelo navegador:", err);
      });
    };

    document.addEventListener("click", playAudio, { once: true });

    return () => {
      document.removeEventListener("click", playAudio);
      audio.pause();
    };
  }, []);

  return (
    <audio ref={audioRef} loop>
      <source src="/musica.mp3" type="audio/mpeg" />
      O teu navegador não suporta áudio.
    </audio>
  );
}
