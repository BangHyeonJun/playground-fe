import { Button } from "@pfe/ui/components/ui/button";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@pfe/ui/components/ui/avatar";

export default function Page() {
  return (
    <main>
      <Button>Click me</Button>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </main>
  );
}
