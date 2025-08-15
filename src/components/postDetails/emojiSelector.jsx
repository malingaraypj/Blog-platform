import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { BsEmojiLaughingFill } from "react-icons/bs";

function EmojiSelector({ emojiOptions, onSelect }) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          size="icon"
          className="bg-black border-none hover:text-yellow-600"
        >
          <BsEmojiLaughingFill className="h-4 w-4 text-emoji-icon" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-fit bg-gray-800 border-none">
        <div className="flex flex-col gap-4">
          <div className="text-sm font-medium text-muted">Choose an emoji</div>
          <div className="grid grid-cols-6 gap-2">
            {emojiOptions.map((emoji, index) => (
              <button
                key={index}
                onClick={() => onSelect(emoji)}
                className="p-2 rounded-lg border border-border transition-all duration-200 
                  hover:bg-emoji-hover hover:border-primary/20 hover:scale-105
                  active:scale-95 group"
                title={emoji.label}
              >
                <emoji.icon className="h-5 w-5 text-yellow-400 group-hover:scale-110 transition-transform" />
              </button>
            ))}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default EmojiSelector;
