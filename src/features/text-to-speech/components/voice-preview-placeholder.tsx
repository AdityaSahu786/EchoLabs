import { AudioLines, Sparkles, Volume2 } from "lucide-react";

export function VoicePreviewPlaceholder() {
    return (
       <div className="hidden flex-1 lg:flex h-full flex-col items-center justify-center gap-6 border-t">
         <div className="flex flex-col items-center gap-3">
            <div className="relative flex w-32 items-center justify-center">
                <div className="absolute left-0 -rotate-12 rounded-full bg-muted p-4">
                    <Volume2 className="size-5 text-muted-foreground" />
                </div>
                <div className="relative z-10 rounded-full bg-foreground p-4">
                    <Sparkles className="size-5 text-background" />
                </div>
                <div className="absolute right-0 rotate-12 rounded-full bg-muted p-4">
                    <AudioLines className="size-5 text-muted-foreground" />
                </div>
            </div>
         </div>
       </div>
    );
};