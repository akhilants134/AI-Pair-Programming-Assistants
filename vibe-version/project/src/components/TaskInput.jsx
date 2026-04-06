import { useState } from "react";
import { Plus, CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

export const TaskInput = ({ onAdd }) => {
  const [value, setValue] = useState("");
  const [dueDate, setDueDate] = useState();
  const [open, setOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = value.trim();
    if (!trimmed) return;
    onAdd(trimmed, dueDate);
    setValue("");
    setDueDate(undefined);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="What needs to be done?"
        className="flex-1 h-12 bg-card border-border text-foreground placeholder:text-muted-foreground"
      />
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            type="button"
            variant="outline"
            className={cn(
              "h-12 px-3 border-border",
              dueDate ? "text-foreground" : "text-muted-foreground",
            )}
          >
            <CalendarIcon className="h-4 w-4 mr-1.5" />
            {dueDate ? format(dueDate, "MMM d") : "Due"}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="end">
          <Calendar
            mode="single"
            selected={dueDate}
            onSelect={(date) => {
              setDueDate(date);
              setOpen(false);
            }}
            initialFocus
            className={cn("p-3 pointer-events-auto")}
          />
        </PopoverContent>
      </Popover>
      <Button
        type="submit"
        size="lg"
        className="h-12 px-4 bg-primary text-primary-foreground hover:opacity-90"
      >
        <Plus className="h-5 w-5" />
      </Button>
    </form>
  );
};
